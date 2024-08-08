import { tryExecute } from '../utils';
import { AuthTokenLocalStorageKey, getIdentityApi, RefreshTokenLocalStorageKey } from '@/plugins/devbookApiClient';

export function createSignInCommand(onError?: (message: string) => void) {
    const identityApi = getIdentityApi();

    return async (email: string, password: string) => {
        const result = await tryExecute(() => identityApi.identityLogin({ email: email, password: password }));

        if (result.success && result.data?.accessToken && result.data.refreshToken) {
            localStorage.setItem(AuthTokenLocalStorageKey, result.data.accessToken);
            localStorage.setItem(RefreshTokenLocalStorageKey, result.data.refreshToken);
            return result.success;
        }

        if (result.status === 401) {
            onError?.('Invalid Credentials');
        } else {
            onError?.('Uh oh, something went wrong.');
        }
    };
}
