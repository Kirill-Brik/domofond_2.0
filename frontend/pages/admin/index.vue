<template>
  <ElMain>
    <AuthLogin v-if="!user" />
  </ElMain>
</template>

<script lang="ts" setup>
const {user} = useUserStore();
</script>
