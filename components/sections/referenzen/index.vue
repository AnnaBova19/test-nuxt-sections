<template>
  <section class="referenzen__section">
    <div class="container text-center">
      <div class="referenzen__title">{{ referenzen.title }}</div>
      <div class="py-4 referenzen__subtitle">
        {{ referenzen.subtitle }}
      </div>
      <div class="row pa-2">
        <div
          v-for="(item, index) in referenzen.referenzen"
          :key="index"
          class="col-xl-3 col-md-6 col-12 mb-4 mb-md-0"
        >
          <ReferenzenCard :referenzen="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import ReferenzenCard from "~/components/sections/referenzen/ReferenzenCard";

export default {
  components: {
    ReferenzenCard,
  },
  computed: {
    referenzen() {
      return this.$store.state.referenzen;
    },
  },
  created() {
    this.getSectionReferenzen();
  },
  methods: {
    ...mapActions({
      getSectionReferenzen: "getSectionReferenzen",
    }),
  },
};
</script>

<style scoped lang="scss">
.referenzen {
  &__section {
    padding: 100px 0;
  }
  &__title {
    font-size: 2.625rem;
    font-weight: 500;
    color: #182540;
  }
  &__subtitle {
    font-size: 1.0625rem;
    font-weight: 600;
    color: #182540;
  }
}
</style>
