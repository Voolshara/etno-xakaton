<template>
  <div class="all animate__animated animate__fadeInUp">
    <Anounce class="s1" />
    <!-- <div class="border animate__animated animate__fadeIn"></div> -->
    <Carousel class="s2" />
    <!-- <div class="border animate__animated animate__fadeIn"></div> -->
    <About class="s3" />
  </div>
</template>

<script>
import Anounce from "@/components/main_page/anounce.vue";
import About from "@/components/main_page/about.vue";
import Carousel from "@/components/main_page/carousel.vue";
export default {
  components: {
    Anounce,
    About,
    Carousel,
  },
};
</script>

<style lang="scss">
.s1 {
  animation-duration: 0.6s;
}
.border {
  width: 100%;
  height: 1px;
  border-top: 2px dashed var(--el-border-color-base);
  align-self: center;
  animation-duration: 1.5s;
}
.s2 {
  animation-duration: 1s;
}
.s3 {
  animation-duration: 2.4s;
}
</style>
