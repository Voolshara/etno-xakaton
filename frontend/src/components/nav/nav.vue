<template>
  <el-row class="nav">
    <el-col :span="6">
      <el-image
        style="width: 50px; height: 50px"
        :src="'/img/horse.jpg'"
      ></el-image
    ></el-col>
    <el-col :span="12"><div class="etno-name">Этно-Xakaton</div></el-col>
    <el-col :span="3" :push="2">
      <el-button class="nav-button" @click="open">
        <el-icon :size="40" :color="'#409eff'"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            data-v-394d1fd8=""
          >
            <path
              fill="currentColor"
              d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
            ></path></svg
        ></el-icon>
      </el-button>
    </el-col>
    <Card :class="cardClass" />
  </el-row>
</template>

<script>
import Card from "@/components/nav/card-nav.vue";
export default {
  components: { Card },
  data() {
    return {
      cardClass: "card-closed",
    };
  },
  methods: {
    open() {
      this.cardClass = "card-open animate__animated animate__bounceInRight";
      setTimeout(() => {
        this.cardClass = "card-close animate__animated animate__bounceOutRight";
      }, 3000);
    },
  },
};
</script>

<style scoped>
.card-closed {
  display: none;
}

.card-close {
  animation-duration: 0.8s;
}

.card-open {
  display: block;
  animation-duration: 0.8s;
}

.nav-button {
  border: 0;
  --el-button-hover-bg-color: rgba(0, 0, 0, 0);
}
.nav {
  margin: 0px auto;
  margin-top: 7px;
  align-items: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1), 0 0;
  margin-bottom: 7px;
}
.etno-name {
  font-size: 35px;
}
</style>
