import { tryExecute } from '../utils';
import { getProductCategoriesApi } from '@/plugins/devbookApiClient';

export function useGetProductCategoryByIdCommand(onError?: (message: string) => void) {
    const productCategoriesApi = getProductCategoriesApi();

    return async (id: string) => {
        const result = await tryExecute(() => productCategoriesApi.productCategoriesGetById(id));

        if (result.success) {
            return result.data;
        }

        onError?.(JSON.stringify(result.errors));
    };
}
