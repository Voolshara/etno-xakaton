<template>
  <div class="one_member">
    <img :src="img" class="img" />
    <div class="member_name">{{ name }}</div>
    <div class="member_role">{{ role }}</div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    role: String,
    name: String,
  },
};
</script>

<style>
.member_name {
  font-size: 40px;
}
.one_member {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 30px;
}
</style>
