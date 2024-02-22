<template>
  <div class="page">
    <Header />
    <NuxtPage class="page__content" />
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &:deep(.page__content) {
    flex: 1 1 auto;
  }
}
</style>
