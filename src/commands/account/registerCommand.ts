import { tryExecute } from '../utils';
import { getIdentityApi } from '@/plugins/devbookApiClient';

export function useRegisterCommand(onError?: (message: string) => void) {
    const identityApi = getIdentityApi();

    return async (email: string, password: string) => {
        const result = await tryExecute(() => identityApi.identityRegister({ email: email, password: password }));

        if (result.success) {
            return result.success;
        }

        if (result.status === 400) {
            const errorKey = Object.keys(result.errors ?? [])[0];
            onError?.(result.errors?.[errorKey]?.[0] ?? "");
        } else {
            onError?.('Uh oh, something went wrong.');
        }
    };
}
