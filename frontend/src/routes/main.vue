<template>
  <div class="all animate__animated animate__fadeInUp">
    <Anounce class="s1" />
    <!-- <div class="border animate__animated animate__fadeIn"></div> -->
    <div class="main-block">
      <div class="back-carousel">
        <Carousel v-if="isMobile()" class="carousel_mobile" />
        <CarouselPC v-else class="carousel_pc" />
      </div>
      <div style="margin: 20px 0">
        <iframe
          width="100%"
          height="500px"
          src="https://www.youtube-nocookie.com/embed/P3-7FQrv37s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <h2>Наша школа</h2>
      <div class="block">
        <img src="/img/school_61.jpg" />

        <div class="block__text">
          <div style="margin: 0 30px; margin-top: 20%">
            <h3>СОШ №61</h3>
            <a 
              >Муниципальное автономное общеобразовательное учреждение "Средняя
              общеобразовательная школа №61" муниципального образования города
              Чебоксары - столицы Чувашской Республики</a
            >
            <router-link :to="`/school`" style="text-decoration: none">
              <p><el-button type="info" plain>Подробнее</el-button></p>
            </router-link>
          </div>
        </div>
      </div>
      <!-- <div class="border animate__animated animate__fadeIn"></div> -->
      <h2>Наша команда</h2>
      <Team />
    </div>
  </div>
</template>

<script>
import Anounce from "@/components/main_page/anounce.vue";
// import About from "@/components/main_page/about.vue";
import Carousel from "@/components/main_page/carousel.vue";
import CarouselPC from "@/components/main_page/carousel_pc.vue";
import Team from "@/components/main_page/team.vue";
export default {
  components: {
    Anounce,
    // About,
    Carousel,
    CarouselPC,
    Team,
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  display: block;
  position: relative;
  overflow: hidden;
  height: 75vh;
}

.block img {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.block__text {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #cecece;
  opacity: 0;
  -webkit-transition: all 0.7s ease-in-out;
  -moz-transition: all 0.7s ease-in-out;
  -ms-transition: all 0.7s ease-in-out;
  -o-transition: all 0.7s ease-in-out;
  transition: all 0.7s ease-in-out;
  height: 100%;
  font-size: 20px;
}

.block:hover .block__text {
  opacity: 0.9;
}
h2 {
  margin-top: 7px;
  margin: 80px 0 10px 0;
  font-size: 35px;
  font-family: "Yanone Kaffeesatz", sans-serif;
  text-align: center;
}
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
.carousel_mobile {
  animation-duration: 1s;
  display: block;
}
.carousel_pc {
  animation-duration: 1s;
  display: none;
}
.s3 {
  animation-duration: 2.4s;
}

@media screen and (min-width: 700px) {
  .main-block {
    height: 75vw;
    width: 80vw;
    display: inline-block;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
  .carousel_mobile {
    display: none;
  }
  .s1 {
    display: flex;
    justify-content: center;
  }
  .back-carousel {
    padding-bottom: 20px;
  }
  .carousel_pc {
    animation-duration: 1s;
    display: block;
  }
}
</style>
