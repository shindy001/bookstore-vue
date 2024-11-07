import { createRefreshTokenCommand } from '@/commands/account/refreshTokenCommand';
import { createSignOutCommand } from '@/commands/account/signOutCommand';
import { useUserTokenStore } from '@/stores/userTokenStore';
import axios, { AxiosRequestHeaders, InternalAxiosRequestConfig } from 'axios';
import router, { AppRoutes } from './router';

export function registerAuthenticationInterceptors() {
    registerBearerTokenInterceptor();
    registerRefreshTokenInterceptor();
    registerForbiddenErrorInterceptor();
}

function registerBearerTokenInterceptor() {
    const userTokenStore = useUserTokenStore();

    axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
        setAuthorizationHeader(config.headers, userTokenStore.accessToken);
        return config;
    });
}

function registerRefreshTokenInterceptor() {
    const signOutCommand = createSignOutCommand();
    const refreshTokenCommand = createRefreshTokenCommand();
    const userTokenStore = useUserTokenStore();
    let refreshingToken: boolean = false;

    // Handle token refresh on 401
    axios.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest: InternalAxiosRequestConfig = error.config;
            const requestUrl = new URL(originalRequest.url ?? '');

            // Do not retry on login action
            if (requestUrl.pathname.toLocaleLowerCase().endsWith(AppRoutes.signIn.path)) {
                Promise.reject(error);
            }

            if (error.response.status === 401 && !refreshingToken) {
                refreshingToken = true;
                try {
                    const refreshTokenResult = await refreshTokenCommand();
                    if (refreshTokenResult.success) {
                        setAuthorizationHeader(originalRequest.headers, userTokenStore.accessToken);
                        refreshingToken = false;
                        return axios(originalRequest);
                    } else {
                        signOutCommand();
                        refreshingToken = false;
                        return Promise.reject(error);
                    }
                } catch (refreshError) {
                    // TODO replace with proper error logging to the server
                    console.error('Token refresh failed:', (refreshError as Error).message);
                    signOutCommand();
                    refreshingToken = false;
                    return Promise.reject(refreshError);
                }
            }
            return Promise.reject(error);
        },
    );
}

function registerForbiddenErrorInterceptor() {
    // Redirect to forbidden page on 403
    axios.interceptors.response.use(
        (response) => response,
        async (error) => {
            if (error.response.status === 403) {
                router.push(AppRoutes.forbidden.path);
            }
            return Promise.reject(error);
        },
    );
}

function setAuthorizationHeader(headers: AxiosRequestHeaders, accessToken: string | null) {
    headers['Authorization'] = `Bearer ${accessToken}`;
}
