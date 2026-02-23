<template>
  <v-app-bar flat density="compact" :height="barHeight" class="top-info-bar" elevation="0">
    <div class="d-flex align-center px-4 w-100">
      <v-app-bar-title>
        <div class="d-flex align-center">
          <!-- Step 1: Wrap logo and text in a div to manage space -->
          <div class="d-flex align-center flex-shrink-1">
            <v-img :src="logo" :height="logoHeight" :max-width="logoWidth" :min-width="logoWidth" alt="Logo" class="d-inline-block mr-2" />
            <span class="logo-text"><b>8th Congress of Pharmacy in North Macedonia</b> <br />
              Pharmacy of the new era -
              <br />Innovative solutions for future challenges
            </span>
          </div>
        </div>
      </v-app-bar-title>

      <!-- Step 3: Hide CountdownTimer on small screens in the top bar -->
      <div class="d-none d-md-block mr-5">
        <CountdownTimer />
      </div>

      <div class="text-right pr-5 mr-4 info-section" style="border-right: 1px solid black">
        <p>
          Ohrid, 1-4 October, 2026
        </p>
      </div>

      <a href="https://maps.app.goo.gl/cMzvrKf9S9DRb9cr5" target="_blank"
        class="text-caption text-teal text-decoration-none location-link">
        📍 Location
      </a>
    </div>
  </v-app-bar>
  <v-app-bar elevation="0" class="app-bar" height="60" fixed density="compact">
    <v-container class="d-flex align-center">
      <!-- Desktop Navigation -->
      <v-tabs v-model="activeTab" class="d-none d-md-flex" align-tabs="center" color="accent" slider-color="primary"
        show-arrows @update:model-value="handleTabChange">
        <v-tab v-for="(tab, index) in tabs" :key="index" :value="index" class="nav-tab pa-3" :prepend-icon="tab.icon">
          {{ tab.label }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <!-- Mobile Menu -->
      <CountdownTimer class="d-md-none" />
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" color="teal"></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer v-model="drawer" temporary location="right" class="mobile-nav">
    <v-list>
      <v-list-item v-for="(tab, index) in tabs" :key="index" @click="navigateToTab(tab.route)"
        :class="{ 'active-mobile-item': $route.name === tab.route }">
        <template v-slot:prepend>
          <v-icon>{{ tab.icon }}</v-icon>
        </template>
        <v-list-item-title>{{ tab.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <a href="https://maps.app.goo.gl/cMzvrKf9S9DRb9cr5" target="_blank"
      class="text-caption text-white text-decoration-none pl-5">
      📍 Location
    </a>
  </v-navigation-drawer>

</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from "vue-router";
import logo from '@/assets/logoheader.png'
import { useDisplay } from "vuetify/lib/composables/index.js";
import CountdownTimer from './CountdownTimer.vue';

const router = useRouter()
const route = useRoute()
const { xs, sm } = useDisplay();

const drawer = ref(false)
const activeTab = ref(0)

const tabs = [
  { label: 'Home', icon: 'mdi-home', route: 'SymposiumPage' },
  { label: 'Commitees', icon: 'mdi-account-group', route: 'OrganizationPage' },
  { label: 'Programme', icon: 'mdi-calendar-text', route: 'ProgramPage' },
  { label: 'Short Paper Submissions', icon: 'mdi-file-document-edit', route: 'AbstractPage' },
  { label: 'Registration', icon: 'mdi-account-plus', route: 'FeePage' },
  { label: 'Sponsors', icon: 'mdi-hand-heart', route: 'PresentationPage' },
  { label: 'Accommodation', icon: 'mdi-bed', route: 'HotelPage' },
  { label: 'Contact', icon: 'mdi-email', route: 'ContactPage' },
]

// Watch route changes to update active tab
watch(route, (newRoute) => {
  const tabIndex = tabs.findIndex(tab => tab.route === newRoute.name)
  if (tabIndex !== -1) {
    activeTab.value = tabIndex
  }
}, { immediate: true })



const handleTabChange = (tabIndex) => {
  navigateToTab(tabs[tabIndex].route)
}

const navigateToTab = (routeName) => {
  router.push({ name: routeName })
  drawer.value = false
}

const barHeight = computed(() => {
  return xs.value || sm.value ? 60 : 90;
});

const logoHeight = computed(() => {
  return xs.value || sm.value ? 40 : 90;
});

// Step 1: Ensure logoWidth has a minimum value to prevent it from collapsing
const logoWidth = computed(() => {
  // Set a minimum width (e.g., 40px) to prevent it from disappearing
  return xs.value || sm.value ? 40 : 140;
});
</script>

<style scoped>
.app-bar {
  background: white !important;
  border-top: 2px solid #1c5a6d !important;
}

.logo {
  color: #FFFFFF !important;
}

.v-slide-group {
  color: white !important;
}

.nav-tab {
  color: #1c5a6d !important;
  font-weight: 500 !important;
  text-transform: uppercase !important;
  border-radius: 20px !important;
  margin: 0 10px !important;
  transition: all 0.3s ease !important;
}

.nav-tab:deep(.v-slide-group__prev),
.nav-tab:deep(.v-slide-group__next),
:deep(.v-slide-group__prev),
:deep(.v-slide-group__next) {
  color: #1c5a6d !important;
  opacity: 1 !important;
}

.nav-tab:hover {
  background: rgba(255, 255, 255, 0.1) !important;
}

.main-content {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.mobile-nav {
  background: linear-gradient(135deg, #1c5a6d 0%, #6ba2a3 100%) !important;
}

.mobile-nav :deep(.v-list-item) {
  color: white !important;
}

.active-mobile-item {
  background: rgba(129, 230, 217, 0.2) !important;
  border-left: 4px solid #81e6d9 !important;
}

.top-info-bar {
  background: white !important;
  color: #1c5a6d !important;
  font-size: 0.875rem;
  z-index: 10;
}

.info-section {
  font-size: 1.1rem;
  line-height: 1.2rem;
}

.logo-text {
  font-size: 1.1rem;
  line-height: 1.2rem;
}

.lang-toggle {
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
}

.lang-toggle .v-btn {
  min-width: 60px;
  padding: 0 8px;
  text-transform: none;
}

/* Step 2: Apply responsive font sizing to the CountdownTimer's label */
/* Target the .countdown-label inside the CountdownTimer component */
.top-info-bar :deep(.countdown-label) {
  font-size: 0.9rem; /* Default for larger screens */
  line-height: 1.1; /* Adjust line height for better appearance */
}

@media (max-width: 1200px) {
  .top-info-bar :deep(.countdown-label) {
    font-size: 0.8rem;
  }
}

@media (max-width: 992px) {
  .top-info-bar :deep(.countdown-label) {
    font-size: 0.7rem;
  }
}

@media (max-width: 768px) {
  .logo-text {
    font-size: 0.55rem;
    line-height: 0.7rem;
  }

  .location-link {
    display: none;
  }

  .info-section {
    font-size: 0.5rem;
    line-height: 0.7rem;
    border-right: none !important;
    padding-right: 0 !important;
    margin-right: 0 !important;
  }
}
</style>
