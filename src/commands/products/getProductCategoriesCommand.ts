import { tryExecute } from '../utils';
import { getProductCategoriesApi } from '@/plugins/devbookApiClient';

export function createGetProductCategoriesCommand(onError?: (message: string) => void) {
    const productCategoriesApi = getProductCategoriesApi();

    return async (pageSize = 100, offset = 0) => {
        const result = await tryExecute(() => productCategoriesApi.productCategoriesGetAll(pageSize, offset));

        if (result.success) {
            return result.data;
        }

        onError?.('Uh oh, something went wrong.');
    };
}
