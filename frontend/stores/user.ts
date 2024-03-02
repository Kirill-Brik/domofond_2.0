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
      await login({ identifier: email, password }).then(
        () => (this.user = useStrapiUser().value)
      );
      return this.user;
    },
  },
});
