<template>
  <ElForm
    class="login"
    label-position="top"
    :model="formData"
    :rules="formRules"
    ref="formState"
    @submit.prevent="submit(formState)"
  >
    <ElText class="login__title" tag="h1">Войти</ElText>
    <ElFormItem label="Email" prop="email">
      <ElInput v-model="formData.email" />
    </ElFormItem>
    <ElFormItem label="пароль" prop="password">
      <ElInput v-model="formData.password" type="password" />
    </ElFormItem>
    <ElButton type="primary" native-type="submit">Войти</ElButton>
  </ElForm>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import type { LoginData } from "~/stores/user";

const {login} = useUserStore();

const formState = ref<FormInstance>();

const formData = ref<LoginData>({
  email: "",
  password: "",
});

const formRules = ref<FormRules<LoginData>>({
  email: [{ required: true, message: "Введите почту", trigger: "blur" }],
  password: [{ required: true, message: "Введите пароль", trigger: "blur" }],
});

async function submit(formState: FormInstance | undefined) {
  if (!formState) return;
  await formState
    .validate()
    .then((valid) => {
      console.log(valid);
      if (valid) {
        return login(formData.value);
      }
    })
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.log(res);
    });
}
</script>
