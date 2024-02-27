<template>
  <ElContainer class="dark page" direction="vertical">
    <ElContainer class="page__header-wrapper">
      <Header class="page__content" />
    </ElContainer>
    <NuxtPage class="page__content page__main" />
    <Footer class="page__content" />
  </ElContainer>
</template>

<script setup lang="ts">
import 'element-plus/es/components/link/style/css'
</script>

<style lang="scss">
.page {
  min-height: 100vh;

  &__header-wrapper {
    flex: 0 1 auto;
    border-bottom: 1px solid var(--el-border-color-dark);
  }

  &__content {
    margin: 0 auto;
    width: 100%;
    max-width: 1440px;
  }

  &__main {
    padding: 100px var(--el-main-padding);
  }
}
</style>
