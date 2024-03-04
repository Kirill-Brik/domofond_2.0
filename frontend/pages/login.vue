<template>
  <ElMain class="login">
    <ElText class="login__title" tag="h1">Войти</ElText>
    <ElForm
      class="login"
      label-position="top"
      :model="formData"
      :rules="formRules"
      ref="formState"
      @submit.prevent="submit(formState)"
    >
      <ElFormItem label="Email" prop="email">
        <ElInput v-model="formData.email" />
      </ElFormItem>
      <ElFormItem label="пароль" prop="password">
        <ElInput v-model="formData.password" type="password" />
      </ElFormItem>
      <ElButton type="primary" native-type="submit">Войти</ElButton>
    </ElForm>
  </ElMain>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";

definePageMeta({
  middleware: [
    (to, from) => {
      const store = useUserStore();
      if (store.user) return navigateTo("/admin", { replace: true });
    },
  ],
});

const store = useUserStore(),
  formState = ref<FormInstance>(),
  formData = ref<LoginData>({
    email: "",
    password: "",
  }),
  formRules = ref<FormRules<LoginData>>({
    email: [{ required: true, message: "Введите почту", trigger: "blur" }],
    password: [{ required: true, message: "Введите пароль", trigger: "blur" }],
  });

async function submit(formState: FormInstance | undefined) {
  if (!formState) return;
  await formState
    .validate()
    .then(() => store.login(formData.value))
    .then(() => {
      navigateTo("/admin");
    })
    .catch((res) => {
      console.log(res);
    });
}
</script>
