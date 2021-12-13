<template>
  <div class="container">
    <div v-if="is_error == true" class="error-code">404</div>
    <el-skeleton
      v-else-if="is_error == false && arcticle_data.length == 0"
      :rows="25"
    />
    <div v-else>
      <section
        class="greet-ban"
        :style="{ backgroundImage: `url(${arcticle_data.img.bg})` }"
      >
        <div class="icon-cont">
          <img class="greet-icon" :src="arcticle_data.img.gerb" />
          <h1>{{ arcticle_data["name"] }}</h1>
        </div>
      </section>
      <div
        v-for="(article, index) in arcticle_data['parts']"
        :key="(article, index)"
      >
        <div v-if="index % 2 == 0">
          <div class="article-container" style="background-color: #ffd49a">
            <div class="aritcle-label">
              <a>{{ article["label"] }}</a>
            </div>
            <img class="article-img" :src="article['img']['H1'][0]" />
            <div class="article-content">
              <div class="art-text">
                <p v-for="text in article['full_text']" :key="text">
                  {{ text }}
                </p>
              </div>
            </div>
            <div class="author-sign">
              <a style="color: rgb(207, 185, 158)"
                >~ {{ article["author"]["name"] }}</a
              >
            </div>
          </div>
        </div>
        <div v-else>
          <div class="article-container" style="background-color: #cfb99e">
            <div class="aritcle-label">
              <a>{{ article["label"] }}</a>
            </div>
            <img class="article-img" :src="article['img']['H1'][0]" />
            <div class="article-content">
              <div class="art-text">
                <p v-for="text in article['full_text']" :key="text">
                  {{ text }}
                </p>
              </div>
            </div>
            <div class="author-sign">
              <a style="color: rgb(151 87 2)"
                >~ {{ article["author"]["name"] }}</a
              >
            </div>
          </div>
        </div>
        <el-carousel type="card" indicator-position="none" height="50vw">
          <el-carousel-item
            v-for="element in arcticle_data"
            :key="element"
            pause-on-hover="true"
          >
            <div class="cards-container">
              <Main_text
                :text="this.lorem200"
                :img="element['img']"
                :label="element['label']"
              />
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import Main_text from "@/components/article_widgets/text_img.vue";

export default {
  data() {
    return {
      arcticle_data: [],
      is_error: false,
    };
  },
  methods: {
    get_data_for_article: function (router) {
      fetch("https://engine.etno-xakaton.ru/article_data", {
        // fetch("http://localhost:4600/article_data", {
        method: "POST", // *GET, POS  T, PUT, DELETE, etc.
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
          this.arcticle_data = data;
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
  components: {
    Main_text,
  },
};
</script>

<style lang="scss" scoped>
.greet-ban {
  background-size: cover;
  position: relative;
  height: auto;
}
.icon-cont {
  color: #fff;
  display: inline-block;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  padding-top: 20px;
  position: relative;
}
.icon_cont h1 {
  margin-left: auto;
  margin-right: auto;
  color: white;
  margin: 0 0 0 0;
}
.greet-icon {
  width: 60%;
  height: 60%;
}
.article-container {
  position: relative;
}
.article-img {
  height: 30vh;
  width: 90%;
  object-fit: cover;
}
.aritcle-label {
  font-size: 19px;
  font-family: fantasy;
  padding-top: 10px;
  padding-bottom: 10px;
}
.art-text {
  font-family: "Oswald", sans-serif;
  font-size: 15px;
  text-align: left;
  padding-left: 5px;
  color: black;
}
.art-text p {
  margin-bottom: 0px;
  margin-top: 0px;
  text-indent: 20px;
}
.author-sign {
  font-family: "Comfortaa";
  padding-bottom: 10px;
  font-size: 12px;
}
</style>
