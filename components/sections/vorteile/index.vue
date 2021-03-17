<template>
  <section class="vorteile__section">
    <div class="container">
      <div class="vorteile__subtitle text-center">{{ vorteile.subtitle }}</div>
      <div class="pt-3 pb-5 mb-1 vorteile__title text-center">
        {{ vorteile.title }}
      </div>
      <div class="row">
        <div
          v-for="(item, index) in vorteile.vorteile"
          :key="index"
          class="col-xl-3 col-md-6 col-12 mb-4 mb-md-0"
        >
          <VorteileCard :vorteile="item" :index="index + 1" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import VorteileCard from "~/components/sections/vorteile/VorteileCard";

export default {
  components: {
    VorteileCard,
  },
  computed: {
    vorteile() {
      return this.$store.state.vorteile;
    },
  },
  created() {
    this.getSectionVorteile();
  },
  methods: {
    ...mapActions({
      getSectionVorteile: "getSectionVorteile",
    }),
  },
};
</script>

<style scoped lang="scss">
.vorteile {
  &__section {
    padding: 80px 0;
    background-color: #182540;
    color: #fff;
  }
  &__title {
    font-size: 2.625rem;
    font-weight: 500;
  }
  &__subtitle {
    font-size: 1.125rem;
    font-weight: 600;
  }
}
</style>
