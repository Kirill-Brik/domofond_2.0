export interface LoginData {
  email: string;
  password: string;
}

export const useUserStore = defineStore("user", {
  state: () => ({
    user: useStrapiUser().value,
  }),
  actions: {
    async login({ email, password }: LoginData) {
      const { login } = useStrapiAuth();
      this.user = await login({ identifier: email, password }).then(
        async () => useStrapiUser().value
      );
      return this.user;
    },

    async logout() {
      const { logout } = useStrapiAuth();
      logout();
      this.user = useStrapiUser().value
      navigateTo('/')
    },
  },
});
