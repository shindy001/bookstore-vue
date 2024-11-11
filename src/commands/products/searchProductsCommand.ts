import { tryExecute } from '../utils';
import { getProductsApi } from '@/plugins/devbookApiClient';

export function useSearchProductsCommand(onError?: (message: string) => void) {
    const productsApi = getProductsApi();

    return async (searchTerm: string) => {
        const result = await tryExecute(() => productsApi.productsSearch(searchTerm));

        if (result.success) {
            return result.data;
        }

        onError?.(result.error);
    };
}
