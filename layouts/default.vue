<template>
  <div>
    <Header />
    <main>
      <Nuxt keep-alive />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "~~/components/layout/Header";
import Footer from "~~/components/layout/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
html {
  font-family: Open Sans, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
