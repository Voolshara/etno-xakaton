<template>
  <div>
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
    <hr>
  </div>
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
          img: "/img/chebocksary_king_city.png",
          name: "Чебоксары",
          link: "cheboksary",
          description: "1",
        },
        {
          img: "/img/nijniy-novgorod.jpg",
          name: "Нижний Новгород",
          link: "nizhny",
          description: "2",
        },
        {
          img: "/img/kazan.png",
          name: "Казань",
          link: "kazan",
          description: "3",
        },
        {
          img: "/img/saransk.png",
          name: "Саранск",
          link: "Саранск",
          description: "4",
        },
        {
          img: "/img/esharala.png",
          name: "Йошкар-Ола",
          link: "Йошкар-Ола",
          description: "5",
        },
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
