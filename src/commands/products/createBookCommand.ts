import { CreateBookCommand } from '@/api/devbookClient';
import { tryExecute } from '../utils';
import { getBooksApi } from '@/plugins/devbookApiClient';

export function useCreateBookCommand(onError?: (message: string) => void, onSuccess?: () => void) {
    const booksApi = getBooksApi();

    return async (command: CreateBookCommand) => {
        const result = await tryExecute(() => booksApi.booksCreate(command));

        if (result.success) {
            onSuccess?.();
            return;
        }

        onError?.(result.error);
    };
}
