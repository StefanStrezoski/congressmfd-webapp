<script setup>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import BannerImage from "@/components/BannerImage.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const status = computed(() => route.query.status);
const isSuccess = computed(() => status.value === 'success');
</script>

<template>
  <div>
    <banner-image />
    <base-container>
      <base-card class="text-center">
        <!-- Success -->
        <div v-if="isSuccess">
          <v-icon size="80" color="green" class="mb-4">mdi-check-circle</v-icon>
          <h2 class="text-h5 font-weight-bold mb-2" style="color: #1c5a6d;">Payment Successful!</h2>
          <p class="text-body-1 text-grey-darken-1 mb-2">
            Your registration payment has been received and confirmed.
          </p>
          <p class="text-body-2 text-grey mb-6">
            You will receive a confirmation email shortly with your registration details.
          </p>
          <v-btn color="primary" to="/" size="large">
            <v-icon start>mdi-home</v-icon> Back to Home
          </v-btn>
        </div>

        <!-- Failure -->
        <div v-else>
          <v-icon size="80" color="red" class="mb-4">mdi-close-circle</v-icon>
          <h2 class="text-h5 font-weight-bold mb-2" style="color: #c62828;">Payment Failed</h2>
          <p class="text-body-1 text-grey-darken-1 mb-2">
            Unfortunately, your payment could not be processed.
          </p>
          <p class="text-body-2 text-grey mb-6">
            Please try again or contact us for assistance.
          </p>
          <div class="d-flex justify-center ga-3">
            <v-btn color="primary" to="/registration" size="large">
              <v-icon start>mdi-refresh</v-icon> Try Again
            </v-btn>
            <v-btn variant="outlined" to="/" size="large">
              <v-icon start>mdi-home</v-icon> Back to Home
            </v-btn>
          </div>
        </div>
      </base-card>
    </base-container>
  </div>
</template>
