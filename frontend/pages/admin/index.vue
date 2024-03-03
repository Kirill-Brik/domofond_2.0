<template>
  <ElMain class="admin">
    <ElText class="admin__title" tag="h1"> Дома </ElText>
    <AdminTable />
  </ElMain>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
});

const store = useHomesStore();

await useAsyncData("homes", () => store.getHomeList());
</script>
