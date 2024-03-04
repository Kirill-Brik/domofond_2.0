export interface Home {
  address: string,
  contract: File | null,
  [other: string | number | symbol]: unknown;
}

export const useHomesStore = defineStore("homes", {
  state: () => ({
    homes: [] as object[],
  }),
  actions: {
    async getHomeList() {
      const { find } = useStrapi<object[]>();
      this.homes = (await find("homes", { populate: ["contract"] })).data;
      return this.homes;
    },
    async addHome(data: Home) {
      const { create } = useStrapi<Home[]>();
      return await create('homes', data).then()
    }
  },
});
