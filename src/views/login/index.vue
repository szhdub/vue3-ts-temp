<template>
  <div class="login-box">
    <div class="p-4 flex flex-row gap-6">
      <svg-icon name="user" class="scale-150" />
      <span class="font-extrabold text-3xl">后台管理</span>
    </div>
    <el-form :model="form" class="w-96">
      <el-form-item>
        <el-input
          v-model="state.formInline.username"
          placeholder="用户名"
          :prefix-icon="User"
          size="large"
          clearable
        />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="state.formInline.password"
          placeholder="密码"
          :prefix-icon="Lock"
          clearable
          type="password"
          size="large"
          show-password
        />
      </el-form-item>
      <el-form-item>
        <el-button
          @click="onSubmit"
          :loading="state.loading"
          type="primary"
          native-type="submit"
          size="large"
          class="w-full"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
import { useRoute, useRouter } from "vue-router";
import { ElMessage } from "element-plus";
// import { reqLogin } from "@/api/user";
import { useStore } from "@/store/modules/user";

const state = reactive({
  loading: false,
  capcha: "",
  formInline: {
    username: "rootadmin",
    password: "123456",
    verifyCode: "",
    captchaId: "",
  },
});

const route = useRoute();
const router = useRouter();

const userStore = useStore();

const onSubmit = async () => {
  const { username, password } = state.formInline;
  if (username.trim() == "" || password == "") {
    return ElMessage({
      message: "用户名或密码不能为空！",
      type: "warning",
    });
  }
  console.log(import.meta.env.VITE_APP_BASE_API);

  state.loading = true;
  try {
    await userStore.login({ username, password });
    router.push("/");
    ElMessage({
      message: "登录成功！",
      type: "success",
    });
    setTimeout(() => router.replace((route.query.redirect as string) ?? "/"));
  } catch (error) {
    state.loading = false;
    ElMessage({
      message: (error as Error).message,
      type: "error",
    });
  }
  state.loading = false;
};

// do not use same name with ref
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});
</script>

<style scoped lang="scss">
.login-box {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: url("@/assets/login.svg");
  background-size: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
}
</style>
