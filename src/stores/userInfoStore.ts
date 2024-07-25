import { defineStore } from 'pinia';

export const useUserInfoStore = defineStore('userStore', {
    state: () => ({ email: '', roles: [] as string[] }),
    getters: {
        getEmail: (state) => state.email,
        getRoles: (state) => state.roles,
        isAdmin: (state) => state.roles.includes('Admin'),
    },
    actions: {
        setUser(email: string, roles: string[]) {
            this.email = email;
            this.roles = roles;
        },
        logout() {
            this.email = '';
            this.roles = [];
        },
    },
});
