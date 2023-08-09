<template>
  <div class="logo">
    <img src="~@/assets/images/logo.png" alt="" class="h-8 mr-2" />
    <h2 v-show="!collapsed" class="title font-bold">One Piece</h2>
  </div>
</template>
<script setup lang="ts">
defineProps({
  collapsed: {
    type: Boolean,
  },
});
</script>
<style scoped>
.logo {
  @apply flex overflow-hidden whitespace-nowrap items-center h-logo pl-6 leading-logo;
}

.title {
  @apply mb-0 text-xl text-blue-500;
}
</style>
