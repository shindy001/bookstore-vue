import { AxiosError, AxiosResponse } from 'axios';

export interface ActionResult<T> {
    success: boolean;
    data?: T;
    status?: number;
    error: string;
}

export const tryExecute = async <T>(fn: () => Promise<AxiosResponse<T>>): Promise<ActionResult<T>> => {
    try {
        const response = await fn();
        return { success: true, data: response.data, error: '' };
    } catch (error) {
        const axiosError = error as AxiosError;
        const data = axiosError.response?.data as { errors: { [key: string]: string[] } };
        return {
            success: false,
            status: axiosError.response?.status,
            error: data.errors ? JSON.stringify(data.errors) : 'Uh oh. Something went wrong.',
        };
    }
};
