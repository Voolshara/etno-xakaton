<template>
  <div class="nav-card">
    <el-card class="nav-card-el">
      <div v-for="element in menu" :key="element" class="all-items">
        <div class="item">
          <el-image class="menu-img" :src="element['img']"></el-image>
          <div class="menu-text">{{ element["text"] }}</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { img: "/img/house.png", text: "Главная" },
        { img: "/img/map.png", text: "Города" },
        { img: "/img/person.png", text: "О нас" },
        { img: "/img/book.png", text: "Наша школа" },
      ],
    };
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 30px;
  margin-bottom: 5px;
}

.all-items {
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1), 0 0;
}

.all-items:last-child {
  box-shadow: 0 0 0 0;
}

.menu-text {
  position: relative;
  top: -1px;
}

.menu-img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.nav-card {
  /* display: none; */
  position: absolute;
  margin-top: 140px;
  width: 220px;
  right: -10px;

  display: flex;
  flex-direction: column;
}

.nav-card-el {
  --el-card-padding: 0 0 0 10px;
  padding-right: 5px;
}
</style>
