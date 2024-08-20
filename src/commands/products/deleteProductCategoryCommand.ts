import { tryExecute } from '../utils';
import { getProductCategoriesApi } from '@/plugins/devbookApiClient';

export function createDeleteProductCategoryCommand(onError?: (message: string) => void, onSuccess?: () => void) {
    const productCategoriesApi = getProductCategoriesApi();

    return async (id: string) => {
        const result = await tryExecute(() => productCategoriesApi.productCategoriesDelete(id));

        if (result.success) {
            onSuccess?.();
            return;
        }

        onError?.(result.error);
    };
}
