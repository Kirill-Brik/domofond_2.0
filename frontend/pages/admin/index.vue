<template>
  <ElMain class="admin">
    <ElText class="admin__title" tag="h1"> Дома </ElText>
    <ClientOnly>
      <ElTable :data="store.homes">
        <ElTableColumn fixed prop="id" label="id" width="70" />
        <ElTableColumn
          prop="attributes.address"
          label="Адресс"
          min-width="300"
        />
        <ElTableColumn
          prop="attributes.contract.data.attributes.name"
          label="Договор"
          min-width="200"
        />
        <ElTableColumn fixed="right" width="200" align="center">
          <template #header>
            <ElButton class="admin__button" @click="openAddHome = true">
              <ElIcon size="18"><IcRoundAddBox /></ElIcon>
              <span>Добавить дом</span>
            </ElButton>
          </template>
          <ElButton class="admin__button">
            <ElIcon size="18"><IcBaselineDelete /></ElIcon>
          </ElButton>
        </ElTableColumn>
      </ElTable>
    </ClientOnly>
  </ElMain>
  <AdminAddHome v-model="openAddHome" />
</template>

<script lang="ts" setup>
import IcBaselineDelete from "~icons/ic/baseline-delete";
import IcRoundAddBox from "~icons/ic/round-add-box";
import type { Head } from "~/components/admin/Table.vue";

definePageMeta({
  middleware: ["auth"],
});

const store = useHomesStore(),
  openAddHome = ref(false)

await useAsyncData("homes", () => store.getHomeList());
</script>

<style scoped lang="scss">
.admin {
  &__button {
    height: 40px;
  }
}
</style>
