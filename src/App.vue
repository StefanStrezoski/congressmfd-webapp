<template>
  <v-app>
    <NavBar />
    <!-- Main Content -->
    <v-main class="main-content">
      <v-img :src="banner" width="100%" cover :height="bannerHeight" alt="Farm Banner"></v-img>
      <v-container fluid class="pa-0">
        <router-view v-slot="slotProps">
          <transition name="route" mode="out-in">
            <component :is="slotProps.Component"></component>
          </transition>
        </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { computed } from "vue";
import NavBar from "@/components/NavBar.vue";
import banner from "@/assets/Farm26.jpg";
import { useDisplay } from "vuetify";

const { xs, sm } = useDisplay();

const bannerHeight = computed(() => {
  return xs.value || sm.value ? 40 : 160;
});
</script>

<style scoped>
.main-content {
  background-color: white;
  min-height: 100vh;
}


.mobile-nav :deep(.v-list-item) {
  color: white !important;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-enter-active {
  transition: all 0.4s ease-out;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.route-leave-active {
  transition: all 0.4s ease-in;
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
