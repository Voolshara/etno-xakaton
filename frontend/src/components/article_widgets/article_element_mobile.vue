<template>
  <div class="wrapper animate__animated animate__slideInLeft">
    <div class="label">~ {{ data["label"] }}</div>
    <div class="main-text" v-for="n in data['full_text'].length" :key="n">
      <p>
        {{ data["full_text"][n] }}
        <el-image
          v-if="n < data['img']['H1'].length"
          :src="'/img/' + data['img']['H1'][n]"
          :fit="'cover'"
        ></el-image>
      </p>
    </div>
    <swiper
      v-if="data['cards'].length > 0"
      :slides-per-view="2.6"
      :space-between="10"
      class="swiper"
    >
      <swiper-slide v-for="element in data['cards']" v-bind:key="element"
        ><Card
          :name="element['label']"
          :img="element['img']"
          :full_text="element['full_text']"
          :author="element['author']"
      /></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.min.css";
import Card from "@/components/article_widgets/article_card.vue";
export default {
  components: {
    Card,
    Swiper,
    SwiperSlide,
  },
  props: {
    data: JSON,
  },
};
</script>

<style lang="scss">
.swiper {
  width: 100vw;
  margin-top: 10px;
  margin-bottom: 10px;
}
.main-text {
  width: 85vw;
  text-align: left;
  font-size: 20px;
}
.label {
  width: 89vw;
  font-size: 40px;
  font-family: "Yanone Kaffeesatz", sans-serif;
  text-align: left;
  padding-top: 30px;
  margin-left: 1vw;
}
.wrapper {
  margin: -1px -15px 0 -15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #faf7f5;
}
</style>
