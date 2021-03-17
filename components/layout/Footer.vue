<template>
  <div class="footer">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div
        class="d-flex flex-column justify-content-center align-items-center text-center"
      >
        <img :src="footer.image.url" class="img-fluid" />
        <div class="pt-4 mb-1">
          <i>{{ footer.title }}</i>
        </div>
        <div class="d-flex flex-column flex-sm-row justify-content-center pt-4">
          <div
            v-for="(item, index) in footer.page_links"
            :key="index"
            class="px-3 text-uppercase"
          >
            {{ item.title }}
          </div>
        </div>
        <div class="d-flex flex-column flex-sm-row justify-content-center pt-3">
          <div
            v-for="(item, index) in footer.legal_links"
            :key="index"
            class="px-3"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    footer() {
      return this.$store.state.footer;
    },
  },
  created() {
    this.getSectionFooter();
  },
  methods: {
    ...mapActions({
      getSectionFooter: "getSectionFooter",
    }),
  },
};
</script>

<style scoped lang="scss">
.footer {
  padding: 100px 0;
  font-size: 1.0625rem;
  font-weight: 600;
  color: #182540;
}
</style>
