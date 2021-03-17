<template>
  <div
    class="d-flex flex-column p-sm-4 p-3 text-center text-sm-left shadow referenzen__card"
  >
    <div
      class="referenzen__image"
      :style="{ 'background-image': `url(${referenzen.image.url})` }"
    ></div>
    <div class="pt-4 mb-3 referenzen__price">{{ referenzen.price }}</div>
    <div class="mb-3 referenzen__title">{{ referenzen.title }}</div>
    <div class="py-4 mb-3 referenzen__description">
      {{ referenzen.description }}
    </div>
    <div class="mb-3 text-danger referenzen__subtitle">
      {{ referenzen.subtitle }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    referenzen: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped lang="scss">
.referenzen {
  &__card {
    border-radius: 5px;
    margin: 10px 0;
  }
  &__image {
    width: 140px;
    height: 140px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
  }
  &__price {
    font-size: 1.625rem;
    font-weight: 500;
    color: #182540;
  }
  &__title {
    color: #acacac;
    font-size: 1.0625rem;
  }
  &__description {
    font-size: 1.0625rem;
    color: #182540;
    line-height: 2;
  }
  &__subtitle {
    font-size: 1.0625rem;
    font-weight: 600;
  }
}
</style>
