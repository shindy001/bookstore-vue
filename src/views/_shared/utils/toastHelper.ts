import { useToast } from 'primevue/usetoast';

export function useToastService() {
    const toast = useToast();

    function showInfo(message: string) {
        toast.add({ severity: 'info', summary: 'Info', detail: message, life: 3000 });
    }

    const showSuccess = (message: string) => {
        toast.add({ severity: 'success', summary: 'Successful', detail: message, life: 3000 });
    };

    const showWarning = (message: string) => {
        toast.add({ severity: 'warn', summary: 'Warning', detail: message, life: 3000 });
    };

    const showError = (message: string) => {
        toast.add({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
    };

    return { showInfo, showSuccess, showWarning, showError };
}
