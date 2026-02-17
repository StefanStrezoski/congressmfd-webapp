<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";
import banner from "@/assets/Farm26.jpg";

const { xs, sm } = useDisplay();

const bannerHeight = computed(() => {
  return xs.value || sm.value ? 40 : 160;
});
</script>
<template>
  <v-img :src="banner" width="100%" cover :height="bannerHeight" alt="Farm Banner"></v-img>
</template>

<style scoped></style>
