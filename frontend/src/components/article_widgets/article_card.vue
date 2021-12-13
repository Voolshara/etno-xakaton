<template>
  <el-popover
    v-model:visible="is_show"
    :title="name"
    :width="300"
    :content="full_text[0]"
  >
    <template #reference>
      <div class="card" v-on:click="is_show = !is_show">
        <el-image :src="img" :fit="'cover'" class="card_img"></el-image>
        <span class="card_text">{{ name }}</span>
      </div>
    </template>
  </el-popover>
</template>

<style lang="scss">
.card {
  .card_text {
    position: relative;
    top: -60px;
    line-height: 25px;
    font-size: 27px;
    color: #fff;
  }

  .card_img {
    width: 30vw;
    height: 200px;
    border-radius: 20px;
  }

  width: 30vw;
  height: 200px;
}
</style>

<script>
export default {
  data() {
    return {
      img: "/img/tower.jpg",
      is_show: false,
    };
  },
  props: {
    author: JSON,
    full_text: Array,
    name: String,
    // img: String
  },
  mounted() {},
};
</script>
