<template>
  <component :is="layout">
    <router-view />
  </component>
</template>


<script>
// import "@/assets/scss/index.css";

import EmptyLayout from "@/layouts/EmptyLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";
export default {
  computed: {
    layout() {
      console.log(this.$route.meta);
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
  components: {
    MainLayout,
    EmptyLayout,
  },
};
</script>


<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/scss/index.css";
</style>
