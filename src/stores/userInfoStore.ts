import { defineStore } from 'pinia';

export const useUserInfoStore = defineStore('userStore', {
    state: () => ({ email: '' }),
    getters: {
        getEmail: (state) => state.email,
    },
    actions: {
        setEmail(email: string) {
            this.email = email;
        },
        logout() {
            this.email = '';
        },
    },
});
