import { tryExecute } from '../utils';
import { getProductCategoriesApi } from '@/plugins/devbookApiClient';

export function useDeleteProductCategoryCommand(onError?: (message: string) => void, onSuccess?: () => void) {
    const productCategoriesApi = getProductCategoriesApi();

    return async (id: string) => {
        const result = await tryExecute(() => productCategoriesApi.productCategoriesDelete(id));

        if (result.success) {
            onSuccess?.();
            return;
        }

        onError?.(JSON.stringify(result.errors));
    };
}
