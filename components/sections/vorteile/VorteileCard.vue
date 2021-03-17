<template>
  <div class="d-flex flex-column">
    <div
      class="d-flex align-items-center justify-content-center justify-content-md-start"
    >
      <div class="vorteile__number">
        {{ index }}
      </div>
      <div class="ml-2">
        <img :src="vorteile.image.url" class="img-fluid" />
      </div>
    </div>
    <div class="pt-3 vorteile__title text-center text-md-left">
      {{ vorteile.title }}
    </div>
    <div class="pt-4 mb-3 vorteile__description text-center text-md-left">
      {{ vorteile.description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vorteile: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped lang="scss">
.vorteile {
  &__number {
    font-size: 5rem;
    font-weight: 700;
    color: hsla(0, 0%, 100%, 0.16);
  }
  &__title {
    font-size: 1.625rem;
    font-weight: 500;
    line-height: 1.5;
  }
  &__description {
    font-size: 1.0625rem;
  }
}
</style>
