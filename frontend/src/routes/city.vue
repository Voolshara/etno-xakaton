<template>
  <div class="container">
    <div v-if="is_error == true" class="error-code">404</div>
    <el-skeleton
      v-else-if="is_error == false && arcticle_data.length == 0"
      :rows="25"
    />
    <div
      v-else
      v-for="element in arcticle_data"
      :key="element"
      class="cards-container"
    >
      <text_img_left
        :text="element['full_text']"
        :img="element['img']"
        :label="element['label']"
      />
    </div>
  </div>
</template>

<script>
import text_img_left from "@/components/arcticle_widgets/text_img.vue";

export default {
  data() {
    return {
      arcticle_data: [],
      is_error: false,
    };
  },
  methods: {
    get_data_for_article: function (router) {
      fetch("http://engine.etno-xakaton.ru/arcticle_data", {
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
          this.arcticle_data = data["data"];
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
    text_img_left,
  },
};
</script>

<style lang="scss">
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
  flex-direction: column;
  justify-content: center;
}
</style>
