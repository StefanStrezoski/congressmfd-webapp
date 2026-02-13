<script setup lang="ts">

import BaseContainer from "@/components/BaseContainer.vue";
import desktopImg from "@/assets/Maticni lekari Za Nastanot.jpg"
import { onMounted, onUnmounted, ref } from "vue";

const currentImage = ref(desktopImg);

// const updateImage = () => {
//   const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
//   currentImage.value = isMobile ? mobileImg : desktopImg;
// };
//
// onMounted(() => {
//   updateImage(); // Set initial image
//   window.addEventListener('resize', updateImage); // Update on resize
// });
//
// onUnmounted(() => {
//   window.removeEventListener('resize', updateImage);
// });
</script>

<template>
  <base-container>
    <v-img :src="desktopImg" alt="About" :class="{ 'desktop-image': currentImage === desktopImg }"></v-img>
  </base-container>
</template>

<style scoped>
.v-img {
  width: 100%;
}


@media (min-width: 768px) {
  .desktop-image {
    max-height: 750px;
    object-fit: cover;
  }
}
</style>
