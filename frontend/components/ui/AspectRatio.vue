<template>
  <div class="aspect-ratio">
    <div class="aspect-ratio__wrapper">
      <slot class="aspect-ratio__content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  ratio: number
}>();

</script>

<style scoped lang="scss">
.aspect-ratio {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(v-bind(ratio) * 100%) ;

  &__wrapper {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
}
:slotted(.aspect-ratio__content) {
    width: 100%;
    height: 100%;
  }
</style>
