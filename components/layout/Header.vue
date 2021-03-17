<template>
  <div class="header">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="#">
        <img :src="header.image.url" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="d-flex align-items-center ml-auto">
          <b-nav-item
            v-for="(item, index) in header.image.page_links"
            :key="index"
            class="text-uppercase"
          >
            {{ item.title }}
          </b-nav-item>
          <div>
            <a class="btn main-btn">
              {{ header.image.button }}
            </a>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    header() {
      return this.$store.state.header;
    },
  },
  created() {
    this.getSectionHeader();
  },
  methods: {
    ...mapActions({
      getSectionHeader: "getSectionHeader",
    }),
  },
};
</script>

<style scoped lang="scss">
.header {
  position: absolute;
  width: 100%;
  padding: 0 7% 3px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.5);
  top: 15px;
  z-index: 100000;
  .nav-item {
    padding: 0 25px;
    font-size: 1.0625rem;
    color: #fff !important;
    .nav-link {
      color: hsla(0, 0%, 100%, 0.5);
    }
    &:hover {
      .nav-link {
        color: hsla(0, 0%, 100%, 1);
      }
    }
  }
}
</style>
