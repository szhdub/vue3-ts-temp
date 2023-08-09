<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#222122"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
        >
          <Menu :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar"></div>
    <div class="layout_main">
      <router-view></router-view>
      <!-- <div class="h-[1000px]"></div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import Logo from "./logo/index.vue";
import Menu from "./menu/index.vue";
// import { ref } from "vue";
import useStore from "@/store/modules/user";

let userStore = useStore();
</script>
<style scoped lang="scss">
.layout_container {
  width: 100vw;
  height: 100vh;

  .layout_slider {
    background: $base-menu-background;
    width: $base-menu-width;
    height: 100vh;
    .scrollbar {
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
    }
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
