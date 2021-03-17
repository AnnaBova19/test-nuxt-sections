<template>
  <section
    class="head__section"
    :style="{ 'background-image': `url(${head.background_image.url})` }"
  >
    <div class="d-flex justify-content-center align-items-center h-100">
      <div
        class="d-flex flex-column justify-content-center align-items-center text-center"
      >
        <img :src="head.image.url" class="img-fluid" />
        <div class="pt-4 mb-1 head__title">
          <i>{{ head.title }}</i>
        </div>
        <div class="mb-1 head__subtitle">
          {{ head.subtitle }}
        </div>
        <div
          class="d-flex justify-content-center align-items-center flex-wrap pt-5"
        >
          <a class="btn text-uppercase main-btn mx-2 my-1">
            {{ head.button_1 }}
          </a>
          <a class="btn text-uppercase secondary-btn mx-2 my-1">
            {{ head.button_2 }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    head() {
      return this.$store.state.head;
    },
  },
  created() {
    this.getSectionHead();
  },
  methods: {
    ...mapActions({
      getSectionHead: "getSectionHead",
    }),
  },
};
</script>

<style scoped lang="scss">
.head {
  &__section {
    width: 100%;
    height: 800px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0 0 0 2000px rgb(17 17 17 / 30%);
    color: #fff;
  }
  &__title {
    font-size: 2.3125rem;
  }
  &__subtitle {
    font-size: 1.0625rem;
  }
}
</style>
