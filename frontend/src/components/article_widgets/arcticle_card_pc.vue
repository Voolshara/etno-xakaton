<template>
  <div>
    <div v-if="is_error == true" class="error-code">404</div>
    <el-skeleton
      v-else-if="is_error == false && arcticle_data.length == 0"
      :rows="25"
    />
    <div v-else>
      <section
        class="hero-banner"
        :style="{ backgroundImage: `url(${arcticle_data.img.bg})` }"
      >
        <div class="text-center">
          <span class="hero-banner-icon"
            ><img :src="arcticle_data.img.gerb"
          /></span>
          <h1>{{ arcticle_data["name"] }}</h1>
        </div>
      </section>
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
      <div
        v-if="this.$route.params.city == 'nizhny'"
        style="margin: 0 -15px -5px -15px"
      >
        <iframe
          width="100%"
          height="650px"
          src="https://www.youtube-nocookie.com/embed/vlvw5QJUEEE"
          title="Нижний Новгород"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div
        v-if="this.$route.params.city == 'Саранск'"
        style="margin: 0 -15px -5px -15px"
      >
        <iframe
          width="100%"
          height="650px"
          src="https://www.youtube-nocookie.com/embed/Uiv9W_xYWhc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div
        v-if="this.$route.params.city == 'Йошкар-Ола'"
        style="margin: 0 -15px -5px -15px"
      >
        <iframe
          width="100%"
          height="650px"
          src="https://www.youtube-nocookie.com/embed/T51KRdhiFfA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div
        v-if="this.$route.params.city == 'cheboxary'"
        style="margin: 0 -15px -5px -15px"
      >
        <iframe
          width="100%"
          height="650px"
          src="https://www.youtube-nocookie.com/embed/elkCYApyjtg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div
        v-for="(article, index) in arcticle_data['parts']"
        :key="(article, index)"
      >
        <div v-if="index % 2 == 0">
          <div class="article-container" style="background-color: #ffd49a">
            <div class="aritcle-label">
              <a class="article-label-a"> {{ article["label"] }} </a>
            </div>
            <div class="article-content">
              <div id="text">
                <p v-for="text in article['full_text']" :key="text">
                  {{ text }}
                </p>
              </div>
            </div>
            <el-carousel
              type="card"
              height="20vw"
              margin-top="30px"
              arrow="never"
              indicator-position="none"
              v-if="article[`img`][`H1`].length > 0"
              autoplay="true"
            >
              <el-carousel-item
                v-for="item in article['img']['H1']"
                :key="item"
              >
                <img
                  :src="'/img/' + item"
                  style="
                    width: -webkit-fill-available;
                    position: relative;
                    height: 100%;
                  "
                  class="carousel-img"
                />
              </el-carousel-item>
            </el-carousel>
            <swiper
              v-if="article['cards'].length > 0"
              :slides-per-view="3"
              :space-between="0"
              class="swiper"
            >
              <swiper-slide
                v-for="element in article['cards']"
                v-bind:key="element"
                ><CardPC
                  :name="element['label']"
                  :img="element['img']"
                  :full_text="element['full_text']"
                  :author="element['author']"
              /></swiper-slide>
            </swiper>
            <div v-if="article['label'] == 'карта'" class="andry-for-u">
              <Map :data="map[this.$route.params.city]" :is_PC="true" />
            </div>
            <div class="author-sign">
              <a style="color: rgb(60 60 60)"
                >~ {{ article["author"]["name"] }}</a
              >
            </div>
          </div>
        </div>
        <div v-else>
          <div
            class="article-container"
            style="background-color: rgb(255 229 198)"
          >
            <div class="aritcle-label">
              <a class="article-label-a"> {{ article["label"] }} </a>
            </div>
            <div class="article-content">
              <div id="text">
                <p v-for="text in article['full_text']" :key="text">
                  {{ text }}
                </p>
              </div>
            </div>
            <el-carousel
              type="card"
              height="20vw"
              margin-top="30px"
              arrow="never"
              indicator-position="none"
              v-if="article[`img`][`H1`].length > 0"
              autoplay="true"
            >
              <el-carousel-item
                v-for="item in article['img']['H1']"
                :key="item"
              >
                <img
                  :src="'/img/' + item"
                  style="
                    width: -webkit-fill-available;
                    position: relative;
                    height: 100%;
                  "
                  class="carousel-img"
                />
              </el-carousel-item>
            </el-carousel>
            <swiper
              v-if="article['cards'].length > 0"
              :slides-per-view="3"
              :space-between="0"
              class="swiper"
            >
              <swiper-slide
                v-for="element in article['cards']"
                v-bind:key="element"
                ><CardPC
                  :name="element['label']"
                  :img="element['img']"
                  :full_text="element['full_text']"
                  :author="element['author']"
              /></swiper-slide>
            </swiper>
            <div v-if="article['label'] == 'карта'" class="andry-for-u">
              <Map :is_PC="true" :data="map[this.$route.params.city]" />
            </div>
            <div class="author-sign">
              <a style="color: rgb(151 87 2)"
                >~{{ article["author"]["name"] }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.min.css";
import CardPC from "@/components/article_widgets/article_card_pc_poca.vue";
import Map from "@/components/article_widgets/map.vue";
export default {
  data() {
    return {
      arcticle_data: [],
      is_error: false,
      is_chered: true,
      name_city: 'Город',
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
        saransk: [
          [56.139918, 47.247728],
          [54.1849498, 45.18165],
          [54.1874126, 45.1838071],
          [54.185753, 45.1781352],
          [54.1861549, 45.180068],
          [54.1831103, 45.1816746],
          [54.1806539, 45.1830744],
          [54.181483, 45.181563],
          [54.1802538, 45.1811233],
          [54.1807402, 45.1821843],
          [54.1824728, 45.1789077],
          [54.1804279, 45.1836752],
          [54.1815071, 45.1863246],
          [54.1803583, 45.1887257],
          [54.1766175, 45.1832868],
          [54.185248, 45.1796922],
          [56.139918, 47.247728],
        ],
        ola: [
          [56.6270773, 47.9224419],
          [56.6316667, 47.8077778],
          [56.6316092, 47.8863032],
          [56.631897, 47.8870669],
          [56.6317281, 47.886526],
          [56.632816, 47.901974],
          [56.6315016, 47.8872102],
          [56.6317618, 47.8923229],
          [56.6317618, 47.8923229],
          [56.6296916, 47.8991186],
          [56.6305322, 47.8970214],
          [56.6337065, 47.9044249],
          [56.633797, 47.9049139],
          [56.633797, 47.9049139],
          [56.6345927, 47.9023003],
          [56.6370675, 47.9027188],
          [56.6359579, 47.9051745],
          [56.6359579, 47.9051745],
          [56.6359579, 47.9051745],
          [56.6359579, 47.9051745],
          [56.6368414, 47.9058989],
          [56.6374772, 47.9001761],
          [56.63715, 47.895584],
          [56.6387978, 47.878785],
          [56.639244, 47.8786277],
          [56.6300614, 47.8943319],
        ],
      },

      lorem200:
        "lorem  perspiciatis quod aut ex. Fugiat obcaecat est vel vis! Recusandae numquam voluptatem deserunt ducimus dolorem harum esse reiciendis sequi ut beatae rerum sunt molestiae ipsum nihil ab nesciunt magnam nemo ea totam obcaecati assumenda praesentium, saepe, molestias illum! Nihil corporis quae, quisquam obcaecati architecto similique. Dolor impedit itaque minus veniam animi? Quibusdam ea recusandae velit non autem? Impedit, ipsa? Illo, impedit. Qui, perspiciatis vero iste accusamus assumenda nobis fuga nihil voluptate dolor distinctio! Saepe qui sequi ut aliquam, velit tempora ad ab cupiditate? At consequuntur quia unde quibusdam tenetur reprehenderit magni culpa, reiciendis asperiores temporibus deserunt suscipit magnam quidem saepe amet consectetur tempora autem harum doloremque recusandae nulla minus. Ullam!",
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
          }
          this.arcticle_data = data;
          document.title = data["name"];
            this.name = data["name"];
            this.parts = data["parts"];
            this.is_load = false;
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
    CardPC,
    Map,
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.andry-for-u {
  margin: 0;
  margin-left: -5px;
}
.swiper {
  margin-left: 0;
  margin-right: 0;
}
.card_text {
  position: relative;
  top: -60px;
  line-height: 25px;
  font-size: 27px;
  color: #fff;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}

.author-sign {
  padding-top: 20px;
  a {
    font-size: 15px;
    font-family: "Comfortaa";
  }
}
.article-container {
  padding: 20px;
  background-color: azure;
  margin: 0 -15px;
}

.article-label-a {
  font-size: 35px;
  font-family: fantasy;
  text-transform: capitalize;
}
.carousel-img {
  object-fit: cover;
}
.article-label {
}
.article-content {
  text-align: left;
  display: flex;
  text-indent: 25px;
  padding-top: 30px;
  margin-bottom: 30px;
  p {
    color: black;
    font-family: "Oswald", sans-serif;
    font-size: 22px;
    line-height: 26px;
    text-indent: 30px;
    margin: 0;
  }
  img {
    height: fit-content;
    margin: 0 10px;
    width: 40%;
  }
}
.about-school {
  .cards-container {
    display: flex;
    flex-direction: column;
    text-align: right;
    font-size: 20px;
  }

  text-align: left;
  font-family: "Roboto Slab", serif;
  font-size: 30px;
}

.cards-container {
  display: flex;
  flex-direction: column;
  text-align: right;
  font-size: 20px;
  margin: 5vh auto;
}

.container {
  .p {
    font-size: 40px;
    font-family: "Yanone Kaffeesatz", sans-serif;
    margin-top: 10px;
    margin-bottom: 30px;
    .data {
      margin-top: 10px;
      font-size: 15px;
      font-family: "Roboto Slab", serif;
      text-align: left;
    }
  }

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.el-carousel__item h3 {
  color: #ffffff;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #ffffff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #ffffff;
}

.hero-banner {
  position: relative;
  padding: 70px 0;
  background-size: cover;
  margin: 0 -15px 0 -15px;
}

@media (min-width: 768px) {
  .hero-banner {
    padding: 200px 0;
  }
}

@media (min-width: 1200px) {
  .hero-banner {
    padding: 240px 0;
  }
}

.hero-banner-sm {
  padding-top: 80px;
  padding-bottom: 80px;
}

@media (min-width: 992px) {
  .hero-banner-sm {
    padding-top: 170px;
    padding-bottom: 170px;
  }
}

.hero-banner h1 {
  color: #fff;
  margin-bottom: 25px;
  font-size: 28px;
}

@media (min-width: 768px) {
  .hero-banner h1 {
    font-size: 60px;
    margin-bottom: 45px;
  }
}

.hero-banner h2 {
  font-size: 22px;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .hero-banner h2 {
    font-size: 42px;
  }
}

.hero-banner-icon {
  color: #fff;
  display: inline-block;
}

@media (min-width: 768px) {
  .hero-banner-icon {
    margin-bottom: 10px;
  }
}

.hero-banner-icon i,
.hero-banner-icon span {
  font-size: 35px;
}

@media (min-width: 768px) {
  .hero-banner-icon i,
  .hero-banner-icon span {
    font-size: 60px;
  }
}

.hero-banner-icon [class^="flaticon-"]:before,
.hero-banner-icon [class*=" flaticon-"]:before,
.hero-banner-icon [class^="flaticon-"]:after,
.hero-banner-icon [class*=" flaticon-"]:after {
  font-size: 35px;
}

@media (min-width: 768px) {
  .hero-banner-icon [class^="flaticon-"]:before,
  .hero-banner-icon [class*=" flaticon-"]:before,
  .hero-banner-icon [class^="flaticon-"]:after,
  .hero-banner-icon [class*=" flaticon-"]:after {
    font-size: 60px;
  }
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.text-center {
  text-align: center !important;
  font-family: "Roboto", sans-serif;
}
.hero-banner p {
  font-size: 22px;
  color: #fff;
  margin-bottom: 0;
  font-family: "Roboto", sans-serif;
}

.section-padding--small {
  padding: 50px 0;
}

@media (min-width: 992px) {
  .section-padding--small {
    padding: 100px 0;
  }
}
</style>
