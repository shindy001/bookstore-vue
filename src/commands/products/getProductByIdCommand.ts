import { tryExecute } from '../utils';
import { getProductsApi } from '@/plugins/devbookApiClient';

export function useGetProductByIdCommand(onError?: (message: string) => void) {
    const productsApi = getProductsApi();

    return async (id: string) => {
        const result = await tryExecute(() => productsApi.productsGetById(id));

        if (result.success) {
            return result.data;
        }

        onError?.(JSON.stringify(result.errors));
    };
}
