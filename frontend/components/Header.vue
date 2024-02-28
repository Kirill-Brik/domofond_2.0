<template>
  <ElHeader class="header">
    <ElRow justify="space-between" align="middle" :gutter="12">
      <ElCol :span="8">
        <ElImage class="header__logo" src="/images/logo.svg" />
      </ElCol>
      <ElCol :span="8">
        <NuxtLink class="el-link el-link--default" to="/">test</NuxtLink>
      </ElCol>
      <ElCol :span="8" class="header__phone-wrapper">
        <UiIconedText
          class="header__phone"
          label="Аварийно-диспечерская служба"
          reverse
        >
          <template #icon>
            <IcBaselinePhoneInTalk />
          </template>
          <NuxtLink
            class="el-link el-link--default"
            href="tel:+7 (4872) 790-451"
          >
            +7 (4872) 790-451
          </NuxtLink>
        </UiIconedText>
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
    max-width: 180px;
    width: 100%;
  }
  &__phone-wrapper {
    display: flex;
    justify-content: flex-end;
  }
  &__phone {
    max-width: 230px;
  }
}
</style>
