<template>
  <ElMain class="admin">
    <ElText class="admin__title" tag="h1"> Дома </ElText>
    <AdminTable :items="store.homes" :head-list="headList" />
  </ElMain>
</template>

<script lang="ts" setup>
import type { Head } from "~/components/admin/Table.vue";

definePageMeta({
  middleware: ["auth"],
});

const store = useHomesStore();

const headList = ref<Head[]>([
  {
    key: "id",
    name: "id",
  },
  {
    key: 'attributes.address',
    name: 'Адресс',
  },
  {
    key: 'attributes.contract.data.attributes.name',
    name: 'Договор',
  },
]);

await useAsyncData("homes", () => store.getHomeList());
</script>
