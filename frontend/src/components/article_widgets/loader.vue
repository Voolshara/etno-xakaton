<template>
  <div class="loader">
    <el-image
      :fit="'fill'"
      src="/img/nac_project.png"
      class="loader-img"
    ></el-image>
  </div>
</template>

<style lang="scss">
.loader {
  @media only screen and (max-device-width: 720px) {
    .loader-img {
      scale: 0.2;
    }
  }
  @media only screen and (min-device-width: 720px) {
    .loader-img {
      width: 30vw;
      height: 40vh;
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 100000;
}
</style>
