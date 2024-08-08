import { tryExecute } from '../utils';
import { getIdentityApi } from '@/plugins/devbookApiClient';

export function createGetUserInfoCommand(onError?: (message: string) => void) {
    const identityApi = getIdentityApi();

    return async () => {
        const result = await tryExecute(() => identityApi.identityInfo());

        if (result.success) {
            return result.data;
        }

        onError?.('Uh oh, something went wrong.');
    };
}
