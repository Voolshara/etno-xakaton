<template>
  <div>
    <el-card
      :body-style="{ padding: '7px' }"
      v-on:click="click_button"
      class="ti_element"
    >
      <div class="main-container">
        <div style="width: -webkit-fill-available">
          <div class="element_text_header">{{ this.label }}</div>
          <div class="element_text">{{ this.text }}</div>
          <div class="author">
            <img src="/img/obser_decks.jpg" />
            <a>~MILORD</a>
          </div>
        </div>
        <el-image :src="img" :fit="'cover'" class="element_image"></el-image>
      </div>
      <Down_arrow :class="arrow_button" />
    </el-card>
  </div>
</template>

<script>
import Down_arrow from "@/components/double_arrow.vue";
export default {
  data() {
    return {
      text_var: this.label,
      is_close: true,
      arrow_button: "no-rotate-arrow",
      active_class: "element_text_header",
    };
  },
  props: {
    label: String,
    text: String,
    img: String,
  },
  components: {
    Down_arrow,
  },
  methods: {
    click_button: function () {
      if (this.is_close) {
        this.text_var = this.text;
        this.is_close = false;
        this.arrow_button = "rotate-arrow";
        this.active_class = "element_text";
        //pass
      } else {
        this.text_var = this.label;
        this.is_close = true;
        this.arrow_button = "no-rotate-arrow";
        this.active_class = "element_text_header";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.author img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 209px;
  margin-right: 20px;
}
.main-container {
  display: flex;
}
.author {
  display: flex;
  margin: 200px 0 0 20px;
}
.author a {
  font-style: italic;
  font-family: "Times New Roman";
  margin-top: 3vh;
}
.ti_element {
  background-color: #faf4f0;
  .element_text {
    text-align: left;
    padding-left: 10px;
    padding-right: 10px;
    font-family: "Comfortaa", cursive;
    margin-bottom: 10px;
    margin-top: 10px;
    // 1px solid var(--el-border-color-base);
    width: -webkit-fill-available;
  }

  .element_text_header {
    text-align: left;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 30px;
    font-family: Fantasy, cursive;
    margin-bottom: 2px;
    margin-top: 15px;
    // 1px solid var(--el-border-color-base);
  }

  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
}

.rotate-arrow {
  transform: rotate(180deg);
  border-top: 0px;
}

.no-rotate-arrow {
  transform: rotate(0deg);
  border-top: 0px;
}
@media screen and (min-width: 650px) {
  .element_image {
    width: 50%;
    height: min-content;
    border-radius: 60px;
  }
  .el-card__body {
    margin: 10px 0;
  }
  .element_text {
    width: -webkit-fill-available;
  }

  .element_text_header {
    width: -webkit-fill-available;
  }
}
</style>
