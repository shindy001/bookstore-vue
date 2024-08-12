import { tryExecute } from '../utils';
import { getProductsApi } from '@/plugins/devbookApiClient';

export function createGetProductsCommand(onError?: (message: string) => void) {
    const productsApi = getProductsApi();

    return async (pageSize = 100, offset = 0, categoryId?: string) => {
        const result = await tryExecute(() => productsApi.productsGetAll(pageSize, offset, categoryId));

        if (result.success) {
            return result.data;
        }

        onError?.(result.error);
    };
}
