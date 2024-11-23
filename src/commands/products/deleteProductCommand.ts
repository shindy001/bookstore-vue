import { tryExecute } from '../utils';
import { getProductsApi } from '@/plugins/devbookApiClient';

export function useDeleteProductCommand(onError?: (message: string) => void, onSuccess?: () => void) {
    const productsApi = getProductsApi();

    return async (id: string) => {
        const result = await tryExecute(() => productsApi.productsDelete(id));

        if (result.success) {
            onSuccess?.();
            return;
        }

        onError?.(JSON.stringify(result.errors));
    };
}
