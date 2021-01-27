<template>
  <div class="app-main-layout">
    <main class="app-content">
      <div class="app-page">
        <nav-bar />
        <side-bar />
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>

  <router-view />
</template>


<script>
import SideBar from "../components/app/SideBar.vue";
import NavBar from "../components/app/NavBar.vue";

export default {
  name: "MainLayout",
  components: {
    SideBar,
    NavBar,
  },
};
</script>


<style lang="stylus"></style>