<template>
  <div class="nav-card">
    <el-card class="nav-card-el" :body-style="{ display: 'block' }">
      <div v-for="element in menu" :key="element" class="all-items">
        <router-link
          :to="element['link']"
          style="text-decoration: none; color: black"
        >
          <div class="item">
            <el-image class="menu-img" :src="element['img']"></el-image>
            <div class="menu-text">{{ element["text"] }}</div>
          </div>
        </router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { img: "/img/house.png", text: "Главная", link: "/" },
        { img: "/img/map.png", text: "Города", link: "/" },
        { img: "/img/person.png", text: "О нас", link: "/" },
        { img: "/img/book.png", text: "Наша школа", link: "/" },
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
