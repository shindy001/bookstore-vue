import { AuthTokenLocalStorageKey, RefreshTokenLocalStorageKey } from '@/plugins/devbookApiClient';
import { useUserInfoStore } from '@/stores/userInfoStore';

export function createSignOutCommand() {
    return async () => {
        const userStore = useUserInfoStore();
        localStorage.removeItem(AuthTokenLocalStorageKey);
        localStorage.removeItem(RefreshTokenLocalStorageKey);
        userStore.logout();
        window.location.href = '/signin';
    };
}
