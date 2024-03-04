<template>
  <ClientOnly>
    <ElDialog v-model="open" class="add-home">
      <template #header>
        <ElText class="add-home__title" tag="h2">Добавить дом</ElText>
      </template>
      <ElForm
        class="add-home__form"
        label-position="top"
        :model="formData"
        :rules="formRules"
        ref="formState"
        @submit.prevent="submit(formState)"
      >
        <ElFormItem label="Адрес" prop="address">
          <ElInput v-model="formData.address" />
        </ElFormItem>
        <ElFormItem label="Договор управления" prop="contract">
          <ElUpload
            v-model:file-list="fileList"
            class="upload-demo"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :limit="1"
            :on-exceed="handleExceed"
          >
            <ElButton type="primary">Загрузить</ElButton>
            <template #tip>
              <div class="el-upload__tip">
                jpg/png files with a size less than 500KB.
              </div>
            </template>
          </ElUpload>
        </ElFormItem>
      </ElForm>
    </ElDialog>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { ElForm, FormInstance, FormRules } from "element-plus";
import type { UploadProps, UploadUserFile } from "element-plus";

const open = defineModel<boolean>(),
  store = useHomesStore(),
  formState = ref<FormInstance>(),
  formData = ref<Home>({
    address: "",
    contract: null,
  }),
  formRules = ref<FormRules<Home>>({
    address: [{ required: true, message: "Введите адрес", trigger: "blur" }],
    contract: [
      { required: true, message: "Добавьте договор", trigger: "blur" },
    ],
  }),
  fileList = ref<UploadUserFile[]>([]);

async function submit(formState: FormInstance | undefined) {
  if (!formState) return;
  await formState
    .validate()
    .then(() => store.addHome(formData.value))
    .then((res) => {
      console.log(res)
    })
    .catch((res) => {
      console.log(res);
    });
}

const handleRemove: UploadProps["onRemove"] = (file, uploadFiles) => {
  console.log(file, uploadFiles);
};

const handlePreview: UploadProps["onPreview"] = (uploadFile) => {
  console.log(uploadFile);
};

const handleExceed: UploadProps["onExceed"] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  );
};

const beforeRemove: UploadProps["beforeRemove"] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  );
};
</script>
