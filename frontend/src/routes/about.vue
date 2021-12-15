<template>
  <div>
    <div class="about_head">О НАС</div>
    <div class="members">
      <div v-for="element in members" :key="element">
        <div class="one_member">
          <img :src="element[0]" class="img" />
          <div class="member_name">{{ element[1] }}</div>
          <div class="member_role">{{ element[2] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        ["/img/members/staaaas.jpg", "Тунгулов Станислав", "Team Leader"],
        ["/img/members/maxim.jpg", "Паденев Максим", "Frontend developer"],
        ["/img/members/misha.jpg", "Кадилов Михаил", "Frontend developer"],
        ["/img/members/andrey.jpg", "Торгашинов Андрей", "Frontend developer"],
        ["/img/members/d0nil.jpg", "Карпов Даниил", "Data engineer"],
        ["/img/members/liza.jpg", "Герасимова Елизавета", "Data engineer"],
        ["/img/members/timofey.jpg", "Алексеев Тимофей", "Data engineer"],
        ["/img/members/katya.jpg", "Белова Екатерина", "Data engineer"],
      ],
    };
  },
};
</script>

<style>
@media screen and (min-width: 1280px) {
  .members {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    position: relative;
    gap: 20px;
  }
  .member_name {
    font-size: 40px;
  }
  .one_member {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 30px;
    position: relative;
  }
}
@media screen and (max-width: 720px) {
  .members {
    display: grid;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    position: relative;
  }
  .member_name {
    font-size: 25px;
  }
  .one_member {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    position: relative;
  }
  .img {
    width: 100%;
    object-fit: cover;
  }
}
.about_head {
  margin-top: 20px;
  font-size: 40px;
}
</style>
