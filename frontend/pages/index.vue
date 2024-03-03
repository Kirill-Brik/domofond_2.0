<template>
  <ElMain>
    <HomeAdvantages />
  </ElMain>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "УК Домофонд",
  description: 'Управляющая компания "Домофонд" в городе Тула',
});

const store = useHomesStore();
await useAsyncData("homes", () => store.getHomeList());
</script>
