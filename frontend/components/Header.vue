<template>
  <ElHeader class="header">
    <ElRow justify="space-between" align="middle" :gutter="12">
      <ElCol :span="6">
        <ElImage class="header__logo" src="/images/logo.svg" fit="contain" />
      </ElCol>
      <ElCol :span="1"> </ElCol>
      <ElCol :span="6">
        <ElIcon size="40px" color="var(--el-color-primary)">
          <IcBaselinePhoneInTalk />
        </ElIcon>
      </ElCol>
    </ElRow>
  </ElHeader>
</template>

<script setup lang="ts">
import IcBaselinePhoneInTalk from "~icons/ic/baseline-phone-in-talk";
</script>

<style lang="scss" scoped>
.header {
  --el-header-padding: 20px;
  height: max-content;

  &__logo {
    height: 80px;
  }
}
</style>
