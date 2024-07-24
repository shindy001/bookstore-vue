import axios from 'axios';
import {
    IdentityApi,
    BookStoreModuleAuthorEndpointsApi,
    BookStoreModuleBookEndpointsApi,
    BookStoreModuleProductEndpointsApi,
    BookStoreModuleProductCategoryEndpointsApi,
    Configuration,
} from '../api/devbookClient/index';
import { createSignOutCommand } from '@/commands/signOutCommand';

const baseUrl = import.meta.env.VITE_BASE_URL;
const signOutCommand = createSignOutCommand;
let refreshingToken = false;

// Set Bearer token for api calls
axios.interceptors.request.use(function (config) {
    const authToken = localStorage.getItem(AuthTokenLocalStorageKey);
    config.headers['Authorization'] = `Bearer ${authToken}`;
    return config;
});

// Handle token refresh on 401
axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !refreshingToken) {
            refreshingToken = true;
            try {
                const refreshToken = localStorage.getItem(RefreshTokenLocalStorageKey);
                if (refreshToken) {
                    const tokenResponse = (await identityApi.identityRefreshPOST({ refreshToken: refreshToken })).data;
                    localStorage.setItem(AuthTokenLocalStorageKey, tokenResponse.accessToken!);
                    localStorage.setItem(RefreshTokenLocalStorageKey, tokenResponse.refreshToken!);
                    axios.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.accessToken}`;
                    return axios(originalRequest);
                } else {
                    signOutCommand();
                    refreshingToken = false;
                    return Promise.reject(error);
                }
            } catch (refreshError) {
                console.error('Token refresh failed:', (refreshError as Error).message);
                signOutCommand();
                refreshingToken = false;
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    },
);

// Redirect to forbidden page on 403
axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response.status === 403) {
            window.location.href = '/forbidden';
        }
        return Promise.reject(error);
    },
);

const configuration = new Configuration({ basePath: baseUrl });
let identityApi: IdentityApi;
let authorsApi: BookStoreModuleAuthorEndpointsApi;
let booksApi: BookStoreModuleBookEndpointsApi;
let productsApi: BookStoreModuleProductEndpointsApi;
let productCategoriesApi: BookStoreModuleProductCategoryEndpointsApi;

export const AuthTokenLocalStorageKey: string = 'AUTH_TOKEN';
export const RefreshTokenLocalStorageKey: string = 'REFRESH_TOKEN';

export function initializeDevbookClientApis() {
    identityApi = new IdentityApi(configuration);
    authorsApi = new BookStoreModuleAuthorEndpointsApi(configuration);
    booksApi = new BookStoreModuleBookEndpointsApi(configuration);
    productsApi = new BookStoreModuleProductEndpointsApi(configuration);
    productCategoriesApi = new BookStoreModuleProductCategoryEndpointsApi(configuration);
}

export function getIdentityApi(): IdentityApi {
    return identityApi;
}

export function getAuthorsApi(): BookStoreModuleAuthorEndpointsApi {
    return authorsApi;
}

export function getBooksApi(): BookStoreModuleBookEndpointsApi {
    return booksApi;
}

export function getProductsApi(): BookStoreModuleProductEndpointsApi {
    return productsApi;
}

export function getProductCategoriesApi(): BookStoreModuleProductCategoryEndpointsApi {
    return productCategoriesApi;
}
