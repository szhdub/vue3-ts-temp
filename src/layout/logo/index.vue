<template>
  <div class="logo">
    <img src="~@/assets/images/logo.png" alt="" class="h-8 mr-2" />
    <h2 v-show="!collapsed" class="title">One Piece</h2>
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
  @apply flex overflow-hidden whitespace-nowrap items-center;
  height: 64px;
  padding-left: 24px;
  line-height: 64px;
}

.title {
  @apply mb-0 text-xl text-blue-500;
}
</style>
