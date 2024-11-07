import { getIdentityApi } from '@/plugins/devbookApiClient';
import { useUserTokenStore } from '@/stores/userTokenStore';
import { tryExecute } from '../utils';

/**
 * Creates refresh token command handler
 */
export function createRefreshTokenCommand() {
    const identityApi = getIdentityApi();
    const userTokenStore = useUserTokenStore();

    // command handler
    return async () => {
        const refreshToken = userTokenStore.refreshToken;
        if (!refreshToken) {
            return { success: false, message: 'Missing refresh token.' };
        }

        const result = await tryExecute(() => identityApi.identityRefresh({ refreshToken: refreshToken }));

        if (result.success && result.data) {
            userTokenStore.setTokens(result.data);
            return { success: true };
        } else {
            return { success: false, message: 'Refresh token failed.' };
        }
    };
}
