<template>
  <div class="ti_el">
    <el-card :body-style="{ padding: '0px' }" v-on:click="click_button">
      <el-image :src="img" :fit="'scale-down'" class="i_el"></el-image>
      <div class="t_el">{{ text_var }}</div>
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
      } else {
        this.text_var = this.label;
        this.is_close = true;
        this.arrow_button = "no-rotate-arrow";
      }
    },
  },
};
</script>

<style lang="scss">
.ti_el {
  .t_el {
    font-size: 15px;
    line-height: 17px;
    font-family: "Roboto Slab", serif;
    margin-bottom: 10px;
  }

  display: flex;
  flex-direction: row;
  margin: 10px 0;
}

.rotate-arrow {
  transform: rotate(180deg);
}

.no-rotate-arrow {
  transform: rotate(0deg);
}
</style>
