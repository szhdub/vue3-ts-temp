<template>
  <div>
    <template v-for="(item, index) in menuList" :key="item.path">
      <template v-if="!item.children">
        <el-menu-item
          v-if="!item.meta.hidden"
          :index="item.path"
          @click="goRoute"
        >
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <template #title>{{ item.meta.title }}</template>
        </el-menu-item>
      </template>
      <!-- 有子路由但是只有一个子路由 -->
      <template v-if="item.children && item.children.length == 1">
        <el-menu-item
          v-if="!item.children[0].meta.hidden"
          :index="item.children[0].path"
          @click="goRoute"
        >
          <el-icon>
            <component :is="item.children[0].meta.icon"></component>
          </el-icon>
          <template #title>
            {{ item.children[0].meta.title }}
          </template>
        </el-menu-item>
      </template>
      <el-sub-menu
        :index="item.path"
        v-if="item.children && item.children.length > 1"
      >
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children" />
      </el-sub-menu>
    </template>
  </div>
</template>
<script setup lang="ts">
defineProps(["menuList"]);
import { useRouter } from "vue-router";

let $router = useRouter();

const goRoute = (vc: any) => {
  // console.log(vc.index);
  $router.push(vc.index);
};
</script>
<script lang="ts">
export default {
  name: "Menu",
};
</script>
<style scoped></style>
