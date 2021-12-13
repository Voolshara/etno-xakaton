<template>
  <div class="container">
    <el-image
      style="width: 100%; height: 250px"
      :src="'https://eus-www.sway-cdn.com/s/54lzzxjScIvCKMEh/images/1nIaX_Iu2YxgCL?quality=1600&allowAnimation=true'"
      :fit="'scale-down'"
      class="about-img"
    ></el-image>
    <div class="preview">
      Наша команда
      <div class="additional_information">Самые умные люди!!!</div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.container {
  .preview {
    .additional_information {
      font-size: 15px;
    }

    font-size: 30px;
    text-align: left;
    font-family: "Yanone Kaffeesatz", sans-serif;
  }
  display: flex;
  flex-direction: column;
}
</style>
