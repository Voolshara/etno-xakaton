<template>
  <div>
    <Carousel />
    <Anounce />
    <About/>
  </div>
</template>

<script>
import Anounce from "@/components/main_page/anounce.vue";
import About from "@/components/main_page/about.vue"
export default {
  components: {
    Anounce,
    About,
  },
};
</script>
