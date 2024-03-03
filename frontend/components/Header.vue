<template>
  <ElHeader class="header">
    <ElRow justify="space-between" align="middle" :gutter="12">
      <ElCol :span="8">
        <NuxtLink to="/">
          <ElImage class="header__logo" src="/images/logo.svg" />
        </NuxtLink>
      </ElCol>
      <ElCol :span="8">
        <NuxtLink class="el-link el-link--default" to="/">test</NuxtLink>
      </ElCol>
      <ElCol :span="8" class="header__phone-wrapper">
        <UiIconedText
          v-if="!user"
          class="header__phone"
          label="Аварийно-диспечерская служба"
          reverse
        >
          <template #icon>
            <IcBaselinePhoneInTalk />
          </template>
          <ElButton to="tel:+7 (4872) 790-451" link :tag="NuxtLink">
            +7 (4872) 790-451
          </ElButton>
        </UiIconedText>
        <ElButton v-else class="header__logout" :icon="IcRoundLogout" @click="store.logout" />
      </ElCol>
    </ElRow>
  </ElHeader>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
import IcBaselinePhoneInTalk from "~icons/ic/baseline-phone-in-talk";
import IcRoundLogout from "~icons/ic/round-logout";

const store = useUserStore();
const { user } = storeToRefs(store)
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

  &__logout {
    height: 40px;
  }
}
</style>
