<template>
  <swiper
    :slides-per-view="2.6"
    :space-between="10"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="carousel"
  >
    <swiper-slide v-for="element in carousel_data" v-bind:key="element"
      ><Element
        :name="element['name']"
        :img="element['img']"
        :link="element['link']"
    /></swiper-slide>
  </swiper>
</template>
<script>
import Element from "@/components/main_page/carousel_element.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.min.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Element,
  },
  data() {
    return {
      carousel_data: [
        {
          img: "/img/nijniy-novgorod.jpg",
          name: "Нижний Новгород",
          link: "Нижний Новгород",
        },
        { img: "/img/kazan.png", name: "Казань", link: "Казань" },
        { img: "/img/saransk.png", name: "Саранск", link: "Саранск" },
        { img: "/img/esharala.png", name: "Йошкар-Ола", link: "Йошкар-Ола" },
        { img: "/img/sviajsk.png", name: "Свияжск", link: "Свияжск" },
      ],
    };
  },
  setup() {
    const onSwiper = () => {
      //(swiper) => {
      //pass
    };
    const onSlideChange = () => {
      //pass
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style lang="scss">
.carousel {
  z-index: 20;
  width: 100%;
  margin-left: -15px;
  padding-right: 30px;
}

.carousel:last-child {
  padding-right: -30px;
}
@media screen and (min-width: 700px) {
  .carousel {
    z-index: 20;
    width: 100%;
    padding-left: 15px;
    padding-right: 0;
  }
}
</style>
