<template>
  <div class="city-container">
    <div v-if="is_load" class="preloader">Load</div>
    <div v-else>
      <div class="preview animate__animated animate__fadeInUp">
        <el-image :src="bg_img" :fit="'cover'" class="bg_img"></el-image>
        <div class="bg_data">
          <el-image :src="gerb_img" :fit="'cover'" class="gerb_img"></el-image>
          <div class="city-name">{{ name }}</div>
        </div>
      </div>
      <div
        v-if="this.$route.params.city == 'kazan'"
        style="margin: 0 -15px -5px -15px"
      >
        <iframe
          width="100%"
          height="650px"
          src="https://www.youtube-nocookie.com/embed/D7XGLSmPTZ0"
          title="КАЗАНЬ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="information" v-for="el in parts" :key="el">
        <Element v-if="el['label'] != 'карта'" :data="el" />
        <Map v-else :is_PC="false" :data="map[this.$route.params.city]" />
      </div>
    </div>
  </div>
</template>

<script>
import Element from "@/components/article_widgets/article_element_mobile.vue";
import Map from "@/components/article_widgets/map.vue";
export default {
  components: { Element, Map },
  data() {
    return {
      is_load: true,
      map: {
        kazan: [
          [56.139918, 47.247728],
          [55.781469, 49.133238],
          [55.789821, 49.110465],
          [55.788054, 49.123837],
          [55.792392, 49.11148],
          [55.800427, 49.111939],
          [55.799214, 49.106144],
          [55.795858, 49.109599],
          [55.796553, 49.108077],
          [55.798321, 49.105189],
          [55.800501, 49.105184],
          [56.139918, 47.247728],
        ],
        nizhny: [
          [56.139918, 47.247728],
          [56.3167035, 44.0289783],
          [56.3263685, 44.0035651],
          [56.3191524, 43.9867871],
          [56.3198324, 43.995794],
          [56.32824, 43.9852365],
          [56.3278669, 44.0208546],
          [56.3283856, 43.9612387],
          [56.327563, 44.0045368],
          [56.3263723, 43.9874665],
          [56.3263723, 43.9874665],
          [56.139918, 47.247728],
        ],
      },
    };
  },
  methods: {
    get_data_for_article: function (router) {
      fetch("https://engine.etno-xakaton.ru/article_data", {
        // fetch("http://localhost:4600/article_data", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Private-Network": true,
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
          router: router,
        }), // body data type must match "Content-Type" header
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data["meta"]["status"] == "error") {
            this.is_error = true;
          } else {
            this.gerb_img = data["img"]["gerb"];
            this.bg_img = data["img"]["bg"];
            document.title = data["name"];
            this.name = data["name"];
            this.parts = data["parts"];
            this.is_load = false;
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          return null;
        });
    },
  },
  mounted() {
    console.log(this.$route.params.city);
    this.get_data_for_article(this.$route.params.city);
  },
};
</script>

<style lang="scss">
.bg_data {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 25vh;
  z-index: 2;
  height: 100vh;
  width: 100vw;

  .city-name {
    color: #fff;
    font-size: 70px;
    position: relative;
    left: -1vw;
  }
}
.preview {
  margin: -1px -15px -10px -15px;

  .bg_img {
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 1;
  }
}
.city-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
