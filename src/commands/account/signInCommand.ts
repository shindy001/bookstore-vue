import { useUserTokenStore } from "@/stores/userTokenStore";
import { tryExecute } from '../utils';
import { getIdentityApi } from '@/plugins/devbookApiClient';

export function createSignInCommand(onError?: (message: string) => void) {
    const identityApi = getIdentityApi();
    const userTokenStore = useUserTokenStore();

    return async (email: string, password: string) => {
        const result = await tryExecute(() => identityApi.identityLogin({ email: email, password: password }));

        if (result.success && result.data) {
            userTokenStore.setTokens(result.data);
            return result.success;
        }

        if (result.status === 401) {
            onError?.('Invalid Credentials');
        } else {
            onError?.('Uh oh, something went wrong.');
        }
    };
}
