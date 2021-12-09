<template>
  <div>
    <div v-if="isMobile()"><mobile /></div>
    <div v-else><pc /></div>
  </div>
</template>

<script>
import pc from "@/components/arcticle_widgets/arcticle_card_pc.vue";
import mobile from "@/components/arcticle_widgets/arcticle_card_mobile.vue";
export default {
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  components: {
    pc,
    mobile,
  },
};
</script>
