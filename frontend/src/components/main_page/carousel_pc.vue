<template>
  <div>
    <div class="arrow arrow--left" v-on:click="$refs.input.prev()">
      <img
        src="https://img.icons8.com/ios-filled/50/000000/expand-arrow.png"
        style="transform: rotate(180reg)"
      />
    </div>
    <div class="arrow arrow--right" v-on:click="$refs.input.next()">
      <img
        src="https://img.icons8.com/ios-filled/50/000000/expand-arrow.png"
        style="transform: rotate(90reg)"
      />
    </div>
    <el-carousel
      type="card"
      height="20vw"
      margin-top="15px"
      arrow="never"
      ref="input"
      indicator-position="none"
      v-on:change="changed"
    >
      <el-carousel-item v-for="element in carousel_data" v-bind:key="element">
        <router-link
          :to="'/city/' + element['link']"
          style="text-decoration: none"
        >
          <a class="carousel-item-title">{{ element["name"] }}</a>
          <img
            :src="element['img']"
            style="
              width: -webkit-fill-available;
              object-fit: cover;
              position: relative;
              height: 100%;
            "
          />
        </router-link>
      </el-carousel-item>
    </el-carousel>
    {{ carousel_data[counter]["description"] }}
  </div>
</template>

<script>
import "swiper/swiper.min.css";

export default {
  data() {
    return {
      counter: 0,
      carousel_data: [
        {
          img: "/img/nijniy-novgorod.jpg",
          name: "Нижний Новгород",
          link: "nizhny",
          description: "1",
        },
        {
          img: "/img/kazan.png",
          name: "Казань",
          link: "Казань",
          description: "2",
        },
        {
          img: "/img/saransk.png",
          name: "Саранск",
          link: "Саранск",
          description: "3",
        },
        {
          img: "/img/esharala.png",
          name: "Йошкар-Ола",
          link: "Йошкар-Ола",
          description: "4",
        },
        {
          img: "/img/sviajsk.png",
          name: "Свияжск",
          link: "Свияжск",
          description: "5",
        },
      ],
    };
  },
  methods: {
    changed: function (index1) {
      this.counter = index1;
    },
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
<style scoped>
.el-carousel__arrow {
  bottom: 0;
}
.el-carousel__arrow--left {
  left: 0px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.arrow {
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: var(--el-transition-duration);
  border-radius: 50%;
  color: #fff;
  position: absolute;
  top: 30vh;
  transform: translateY(-50%);
  text-align: center;
  font-size: var(--el-carousel-arrow-font-size);
}
.arrow--left {
  left: 5vh;
}
.arrow--left img {
  transform: rotate(90deg);
  height: inherit;
}

.arrow--right img {
  transform: rotate(270deg);
  height: inherit;
}
.arrow--right {
  right: 5vh;
}
.carousel-item-title {
  font-size: 20px;
  color: black;
}
</style>
