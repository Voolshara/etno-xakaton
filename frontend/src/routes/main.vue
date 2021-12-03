<template>
  <div>
    <Carousel />
    <Anounce />
  </div>
</template>

<script>
import Carousel from "@/components/main_page/carousel.vue";
import Anounce from "@/components/main_page/anounce.vue";
export default {
  components: {
    Carousel,
    Anounce,
  },
};
</script>
