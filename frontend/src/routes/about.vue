<template>
  <div>
    <div class="about_head">О НАС</div>
    <div class="members">
      <div v-for="element in members" :key="element">
        <Member :img="element[0]" :name="element[1]" :role="element[2]" />
      </div>
    </div>
  </div>
</template>

<script>
import Member from "@/components/member.vue";
export default {
  components: { Member },
  data() {
    return {
      members: [
        ["/img/members/staaaas.jpg", "Тунгулов СтанисLOVE", "Team Leader"],
        ["/img/members/maxim.jpg", "Паденев Максим", "Frontend developer"],
        ["/img/members/misha.jpg", "Кадилов Михаил", "Frontend developer"],
        ["/img/members/andrey.jpg", "Торгашинов Андрей", "Frontdend developer"],
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
.members {
  display: grid;
  grid-template-columns: 200px 200px;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
}
</style>
