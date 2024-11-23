import { AxiosError, AxiosResponse } from 'axios';

export interface ActionResult<T> {
    success: boolean;
    data?: T;
    status?: number;
    errors?: { [key: string]: string[] };
}

export const tryExecute = async <T>(fn: () => Promise<AxiosResponse<T>>): Promise<ActionResult<T>> => {
    try {
        const response = await fn();
        return { success: true, data: response.data };
    } catch (error) {
        const axiosError = error as AxiosError;
        const data = axiosError.response?.data as { errors: { [key: string]: string[] } };
        return {
            success: false,
            status: axiosError.response?.status,
            errors: data.errors,
        };
    }
};
