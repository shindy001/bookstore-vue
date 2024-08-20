import { ProductType } from '@/api/devbookClient';
import { tryExecute } from '../utils';
import { getProductsApi } from '@/plugins/devbookApiClient';

export function useGetProductsCommand(onError?: (message: string) => void) {
    const productsApi = getProductsApi();

    return async (pageSize = 100, offset = 0, productType?: ProductType, categoryId?: string) => {
        const result = await tryExecute(() => productsApi.productsGetAll(pageSize, offset, productType, categoryId));

        if (result.success) {
            return result.data;
        }

        onError?.(result.error);
    };
}
