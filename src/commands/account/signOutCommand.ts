import { useUserInfoStore } from '@/stores/userInfoStore';
import { useUserTokenStore } from "@/stores/userTokenStore";

export function createSignOutCommand() {
    const userTokenStore = useUserTokenStore();
    
    return async () => {
        const userInfoStore = useUserInfoStore();
        userTokenStore.removeTokens();
        userInfoStore.logout();
    };
}
