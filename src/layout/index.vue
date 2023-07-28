<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo  />
      <h1>sidebar</h1>
    </div>
    <div class="layout_tabbar"></div>
    <div class="layout_main">
      <div class="h-[1000px]"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Logo from './logo/index.vue'
import { ref, computed } from 'vue'

const collapsed = ref<boolean>(false);
  // 自定义侧边栏菜单收缩和展开时的宽度
const asiderWidth = computed(() => (collapsed.value ? 80 : 220));


</script>
<style scoped lang="scss">
.layout_container {
  width: 100vw;
  height: 100vh;

  .layout_slider {
    background: $base-menu-background;
    width: $base-menu-width;
    height: 100vh;
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background: $base-tabbar-background;
    top: 0;
    right: 0;
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    top: $base-tabbar-height;
    right: 0;
    padding: 20px;
    overflow: auto;
  }
}
</style>
