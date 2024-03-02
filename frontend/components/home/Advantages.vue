<template>
  <ElContainer class="advantages">
    <div class="advantages__content">
      <ElText class="advantages__title" tag="h1">
        Мы работаем для вашего уюта.
      </ElText>
      <ElText class="advantages__description" type="info" tag="p">
        Основной задачей компании является благополучие вверенного объекта
        недвижимости.
      </ElText>
    </div>
    <div class="advantages__list-wrapper">
      <ElText class="advantages__subtitle" tag="h2">Наши преимущества</ElText>
      <ul class="advantages__list">
        <li v-for="advantage in advantagesList" class="advantages__item">
          <ElIcon
            class="advantages__item-icon"
            size="40px"
            color="var(--el-color-primary)"
          >
            <component :is="advantage.icon" />
          </ElIcon>
          <ElText class="advantages__item-text">{{ advantage.text }}</ElText>
        </li>
      </ul>
    </div>
    <div class="advantages__image-wrapper">
      <UiAspectRatio :ratio="431 / 567" v-slot="props">
        <ElImage
          v-bind="props"
          class="advantages__image"
          src="/images/home.svg"
          loading="lazy"
        >
          <template #placeholder>
            <ElSkeleton style="height: 100%">
              <template #template>
                <el-skeleton-item
                  variant="image"
                  style="width: 100%; height: 100%"
                />
              </template>
            </ElSkeleton>
          </template>
        </ElImage>
      </UiAspectRatio>
    </div>
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
  display: grid;
  grid-template-columns: 4fr 5fr;
  grid-template-rows: max-content 1fr;
  gap: 30px;

  &__content {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  &__list-wrapper {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }

  &__image-wrapper {
    grid-row: 1 / 3;
    grid-column: 2 / 3;
    align-self: flex-end;
  }

  &__title {
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 14px;
  }

  &__description {
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
  }

  &__subtitle {
    margin-bottom: 14px;
    font-weight: 700;
    font-size: 24px;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, max-content);
    gap: 30px;
    max-width: 500px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
}

@include md {
  .advantages {
    grid-template-columns: 1fr 2fr;
    row-gap: 40px;

    &__content {
      grid-column: 1 / 3;
    }

    &__image-wrapper {
      grid-row: 2 / 3;
    }

    &__list {
      min-width: 250px;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, max-content);
    }

    &__item {
      flex-direction: row;
      align-items: center;
      padding: 10px;
      border: 1px solid var(--el-color-primary-light-5);
      border-radius: 20px;
    }
  }
}

@include sm {
  .advantages {
    grid-template-columns: 1fr;

    &__content {
      grid-column: 1 / 2;
    }

    &__image-wrapper {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    &__list-wrapper {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }

    &__list {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(2, max-content);
      max-width: inherit;
    }
  }
}

@include xs {
  .advantages {
    &__list {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, max-content);
      gap: 20px;
    }

    &__item {
      padding: 0;
      border: none;
    }
  }
}
</style>
