<template>
  <ElRow class="iconed-text">
    <ElIcon
      class="iconed-text__icon"
      size="40px"
      color="var(--el-color-primary)"
    >
      <slot name="icon"></slot>
    </ElIcon>
    <ElCol
      class="iconed-text__content"
      :class="{ 'iconed-text__content_reverse': reverse }"
    >
      <ElText v-if="label" class="iconed-text__label" type="info" size="small">
        {{ label }}
      </ElText>
      <ElText class="iconed-text__text">
        <slot></slot>
      </ElText>
    </ElCol>
  </ElRow>
</template>

<script setup lang="ts">
defineProps<{
  label?: string;
  reverse?: boolean;
}>();
</script>

<style scoped lang="scss">
.iconed-text {
  width: 100%;
  flex-wrap: nowrap;
  gap: 10px;

  &__content {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;

    &_reverse {
      flex-direction: column-reverse;
    }
  }

  &__label {
    align-self: flex-start;
  }

  &__text {
    --el-font-size-base: 18px;
    --el-font-weight-primary: 700;

    font-size: var(--el-font-size-base);
    font-weight: var(--el-font-weight-primary);
  }
}
</style>
