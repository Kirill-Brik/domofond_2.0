<template>
  <el-container class="dark page" direction="vertical">
    <Header class="page__content"/>
    <NuxtPage class="page__content" />
    <Footer class="page__content" />
  </el-container>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.page {
  min-height: 100vh;

  &__content {
    margin: auto;
    width: 100%;
    max-width: 1100px;
  }
}
</style>
