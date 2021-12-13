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
      <div class="information" v-for="el in parts" :key="el">
        <Element :data="el" />
      </div>
    </div>
  </div>
</template>

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

<script>
import Element from "@/components/article_widgets/article_element_mobile.vue";
export default {
  components: { Element },
  data() {
    return {
      is_load: true,
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
    this.get_data_for_article(this.$route.params.city);
  },
};
</script>
