import { UpdateBookCommandDto } from '@/api/devbookClient';
import { tryExecute } from '../utils';
import { getBooksApi } from '@/plugins/devbookApiClient';

export function useUpdateBookCommand(onError?: (message: string) => void, onSuccess?: () => void) {
    const booksApi = getBooksApi();

    return async (bookId: string, command: UpdateBookCommandDto) => {
        const result = await tryExecute(() => booksApi.booksUpdate(bookId, command));

        if (result.success) {
            onSuccess?.();
            return;
        }

        onError?.(JSON.stringify(result.errors));
    };
}
