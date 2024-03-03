<template>
  <table class="table">

  </table>
</template>

<script lang="ts" setup>
export interface Head {
  key: string
  name: string,
}

defineProps<{
  headList: Head[]
  items: object[]
}>();
</script>

<style scoped lang="scss"></style>
