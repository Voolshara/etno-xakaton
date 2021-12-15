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
        {
          img: "/img/city/chuvash.png",
          text: "Чебоксары",
          link: "/city/cheboksary",
        },
        {
          img: "/img/city/NN.png",
          text: "Нижний Новгород",
          link: "/city/nizhny",
        },
        { img: "/img/city/kazan.png", text: "Казань", link: "/city/kazan" },
        {
          img: "/img/city/saransk.png",
          text: "Саранск",
          link: "/city/Саранск",
        },
        {
          img: "/img/city/ola.png",
          text: "Йошкар-Ола",
          link: "/city/Йошкар-Ола",
        },
        { img: "/img/person.png", text: "О нас", link: "/about" },
        { img: "/img/book.png", text: "Наша школа", link: "/school" },
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
  font-size: 23px;
}

.menu-img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.nav-card {
  /* display: none; */
  position: absolute;
  margin-top: 350px;
  width: 300px;
  right: -10px;

  display: flex;
  flex-direction: column;
}

.nav-card-el {
  --el-card-padding: 0 0 0 10px;
  padding-right: 5px;
}
</style>
