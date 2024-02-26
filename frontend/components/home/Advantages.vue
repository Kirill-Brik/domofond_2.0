<template>
  <ElContainer class="advantages">
    <ElRow>
      <ElCol class="advantages__content" :span="10">
        <ElText class="advantages__title" tag="h1">
          Мы работаем для вашего уюта.
        </ElText>
        <ElText class="advantages__description" type="info" tag="p">
          Основной задачей компании является благополучие вверенного объекта
          недвижимости.
        </ElText>
        <ul class="advantages__list">
          <li v-for="advantage in advantagesList" class="advantages__item">
            <ElIcon
              class="advantages__link"
              size="40px"
              color="var(--el-color-primary)"
            >
              <component :is="advantage.icon" />
            </ElIcon>
            <ElText>{{ advantage.text }}</ElText>
          </li>
        </ul>
      </ElCol>
      <ElCol class="advantages__image-wrapper" :span="14">
        <ElImage
          class="advantages__image"
          src="/images/home.svg"
          fit="contain"
        />
      </ElCol>
    </ElRow>
  </ElContainer>
</template>
<script setup lang="ts">
import IcOutlineConstruction from "~icons/ic/outline-construction";
import MaterialSymbolsMonitoring from "~icons/material-symbols/monitoring";
import IcBaselinePublishedWithChanges from "~icons/ic/baseline-published-with-changes";
import IcBaselineTask from "~icons/ic/baseline-task";

const advantagesList = shallowRef([
  {
    icon: IcOutlineConstruction,
    text: "Наличие оборудования и своей спецтехники",
  },
  {
    icon: MaterialSymbolsMonitoring,
    text: "Большой опыт работы в сфере ЖКХ",
  },
  {
    icon: IcBaselinePublishedWithChanges,
    text: "Оперативная реакция на заявки от жителей",
  },
  {
    icon: IcBaselineTask,
    text: "Прозрачность в отчетности",
  },
]);
</script>

<style scoped lang="scss">
.advantages {
  &__title {
    font-weight: 700;
    font-size: 36px;
  }

  &__description {
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
  }
}
</style>
