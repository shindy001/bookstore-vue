import { UpdateProductCategoryCommandDto } from '@/api/devbookClient';
import { tryExecute } from '../utils';
import { getProductCategoriesApi } from '@/plugins/devbookApiClient';

export function useUpdateProductCategoryCommand(onError?: (message: string) => void, onSuccess?: () => void) {
    const productCategoriesApi = getProductCategoriesApi();

    return async (productCategoryId: string, command: UpdateProductCategoryCommandDto) => {
        const result = await tryExecute(() => productCategoriesApi.productCategoriesUpdate(productCategoryId, command));

        if (result.success) {
            onSuccess?.();
            return;
        }

        onError?.(JSON.stringify(result.errors));
    };
}
