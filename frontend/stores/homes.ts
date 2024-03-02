export const useHomesStore = defineStore("homes", {
  state: () => ({
    homes: [] as Object[],
  }),
  actions: {
    async getHomeList() {
      const { find } = useStrapi<Object[]>();
      this.homes = (await find("homes", { populate: ["contract"] })).data;
      return this.homes;
    },
  },
});
