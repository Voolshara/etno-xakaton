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
        :style="{
          backgroundImage: `url('/img/nizhny-pre.jpeg')`,
        }"
      >
        <div class="text-center">
          <span class="hero-banner-icon"
            ><img src="/img/nizhny-gerb.png"
          /></span>
          <h1>{{ arcticle_data['name']}}</h1>
        </div>
      </section>
      <section class="section-padding--small bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 align-self-center mb-5 mb-lg-0">
              <div class="innovative-wrapper">
                <h3 class="primary-text">
                  Innovative With Experience <br class="d-none d-xl-block" />
                  UX Design 2019
                </h3>
                <p class="h4 primary-text2 mb-3">
                  Where The business World Meets
                </p>
                <p>
                  Mornin steas great earths for divide our good sixth called
                  abunda itseld appear fisrd seaton upon above may bearing all
                  moveth morning make subdue stars they are a goreat eart divide
                  our good sixth one of that
                </p>
              </div>
            </div>
            <div class="col-lg-6 pl-xl-5">
              <ul class="clockdiv text-center" id="clockdiv">
                <li class="clockdiv-single clockdiv-day">
                  <h1 class="days">320</h1>
                  <span class="smalltext">Days</span>
                </li>
                <li class="clockdiv-single clockdiv-hour">
                  <h1 class="hours">30</h1>
                  <span class="smalltext">Hours</span>
                </li>
                <li class="clockdiv-single clockdiv-minute">
                  <h1 class="minutes">30</h1>
                  <span class="smalltext">Mins</span>
                </li>
              </ul>

              <div class="clockdiv-content text-center">
                <p class="h4 primary-text2 mb-2">
                  January 20 -22, 2019 in Buffelo City
                </p>
                <a class="button button-link" href="#">Get Ticket</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <el-carousel indicator-position="none" height="50vw">
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
</template>

<script>
import Main_text from "@/components/article_widgets/main_text.vue";
export default {
  data() {
    return {
      arcticle_data: [],
      is_error: false,
      lorem200:
        "lorem ipsum dolor sit amet onsectetur adipisicing elit. Nisi odio molestias nemo nostrum sit dolorem blanditiis sed, voluptas eaque dolor veritatis sapiente, consectetur veniam reiciendis ea nobis velit molestiae, amet iste ab modi debitis adipisci corrupti corporis. Repellat, possimus hic adipisci eum tempora neque. Iusto assumenda iure mollitia sint vero laudantium repudiandae numquam consequuntur repellendus accusamus voluptate ex ullam molestiae temporibus minus, pariatur neque impedit. Impedit sed amet, temporibus saepe consectetur magni corrupti facere provident at pariatur, officiis laborum porro enim labore nemo molestias necessitatibus, perspiciatis quod aut ex. Fugiat obcaecati est vel vitae deserunt! Sunt ipsum deleniti eos! Recusandae numquam voluptatem deserunt ducimus dolorem harum esse reiciendis sequi ut beatae rerum sunt molestiae ipsum nihil ab nesciunt magnam nemo ea totam obcaecati assumenda praesentium, saepe, molestias illum! Nihil corporis quae, quisquam obcaecati architecto similique. Dolor impedit itaque minus veniam animi? Quibusdam ea recusandae velit non autem? Impedit, ipsa? Illo, impedit. Qui, perspiciatis vero iste accusamus assumenda nobis fuga nihil voluptate dolor distinctio! Saepe qui sequi ut aliquam, velit tempora ad ab cupiditate? At consequuntur quia unde quibusdam tenetur reprehenderit magni culpa, reiciendis asperiores temporibus deserunt suscipit magnam quidem saepe amet consectetur tempora autem harum doloremque recusandae nulla minus. Ullam!",
    };
  },
  methods: {
    get_data_for_article: function (router) {
      fetch("https://engine.etno-xakaton.ru/arcticle_data", {
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
          if (data["meta"]["status"] == "error") {
            this.is_error = true;
          }
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
