<template>
  <div class="container">
    <div v-if="is_error == true" class="error-code">404</div>
    <el-skeleton
      v-else-if="is_error == false && arcticle_data.length == 0"
      :rows="25"
    />
    <div
      v-else
      v-for="element in arcticle_data['parts']"
      :key="element"
      class="cards-container"
    >
      <div>
        {{ element }}
      </div>
      <div v-for="el in element['cards']" :key="el" class="cards-container">
        <Main_text
          :text="el['full_text']"
          :img="el['img']"
          :label="el['label']"
          :author_name="el['author']['name']"
          :author_img="el['author']['photo']"
        />
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
</style>
