import { CreateProductCategoryCommand } from '@/api/devbookClient';
import { tryExecute } from '../utils';
import { getProductCategoriesApi } from '@/plugins/devbookApiClient';

export function createCreateProductCategoryCommand(onError?: (message: string) => void, onSuccess?: () => void) {
    const productCategoriesApi = getProductCategoriesApi();

    return async (command: CreateProductCategoryCommand) => {
        const result = await tryExecute(() => productCategoriesApi.productCategoriesCreate(command));

        if (result.success) {
            onSuccess?.();
            return;
        }

        onError?.(result.error);
    };
}
