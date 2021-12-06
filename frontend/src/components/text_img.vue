<template>
  <div class="ti_el">
    <el-card :body-style="{ padding: '0px' }" v-on:click="click_button">
      <el-image :src="img" :fit="'scale-down'" class="i_el"></el-image>
      <div class="t_el">{{ text_var }}</div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text_var: this.label,
      is_close: true,
    };
  },
  props: {
    label: String,
    text: String,
    img: String,
  },

  methods: {
    click_button: function () {
      if (this.is_close) {
        this.text_var = this.text;
        this.is_close = false;
      } else {
        this.text_var = this.label;
        this.is_close = true;
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
  }

  display: flex;
  flex-direction: row;
}
</style>
