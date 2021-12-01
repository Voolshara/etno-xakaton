<template>
  <el-container id="app">
    <el-header><NavEl /></el-header>
    <el-main>
      <BG style="position: absolute" />
      <div>Router</div>
    </el-main>
    Footer
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
#app {
  font-family: "Caveat", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
