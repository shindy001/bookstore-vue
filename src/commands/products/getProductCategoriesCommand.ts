import { tryExecute } from '../utils';
import { getProductCategoriesApi } from '@/plugins/devbookApiClient';

export function useGetProductCategoriesCommand(onError?: (message: string) => void) {
    const productCategoriesApi = getProductCategoriesApi();

    return async (pageSize = 100, offset = 0) => {
        const result = await tryExecute(() => productCategoriesApi.productCategoriesGetAll(pageSize, offset));

        if (result.success) {
            return result.data;
        }

        onError?.(JSON.stringify(result.errors));
    };
}
