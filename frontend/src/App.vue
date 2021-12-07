<template>
  <el-container id="app">
    <el-header><NavEl /></el-header>
    <el-main style="--el-main-padding: 15px" class="test">
      <BG class="background" />
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import NavEl from "@/components/nav/nav.vue";
import BG from "@/components/particle.vue";
export default {
  name: "App",
  components: {
    NavEl,
    BG,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap");
#app {
  font-family: "Caveat", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.background {
  position: absolute;
}
</style>
