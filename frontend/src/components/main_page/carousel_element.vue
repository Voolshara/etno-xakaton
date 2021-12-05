<template>
  <router-link :to="'/city/' + link" style="text-decoration: none">
    <div class="carousel_element">
      <el-image
        style="width: 130px; height: 220px"
        :src="img"
        :fit="'cover'"
        class="car_img"
      ></el-image>
      <span class="car_el">{{ name }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    img: String,
    name: String,
    link: String,
  },
};
</script>

<style lang="scss">
.carousel_element {
  .car_img {
    border-radius: 15px;
  }

  .car_el {
    position: relative;
    top: -50px;
    text-align: center;
    font-size: 27px;
    color: #fff;
    line-height: 15px;
  }

  width: 130px;
  height: 230px;
}
</style>
