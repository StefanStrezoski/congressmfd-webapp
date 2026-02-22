<template>
  <div class="countdown-timer d-flex align-center" :class="{ 'mobile-style': isMobile }">
    <div class="countdown-label d-none d-sm-block mr-2">
      Countdown to second announcement:
    </div>
    <div class="countdown-values d-flex align-center">
      <div class="countdown-item">
        <span class="value">{{ days }}</span>
        <span class="unit">d</span>
      </div>
      <div class="separator">:</div>
      <div class="countdown-item">
        <span class="value">{{ hours }}</span>
        <span class="unit">h</span>
      </div>
      <div class="separator">:</div>
      <div class="countdown-item">
        <span class="value">{{ minutes }}</span>
        <span class="unit">m</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
});

const targetDate = new Date('2026-03-01T00:00:00');
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
let timer = null;

const updateCountdown = () => {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    if (timer) clearInterval(timer);
    return;
  }

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
};

onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 60000); // Update every minute
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
.countdown-timer {
  font-family: 'Roboto', sans-serif;
  color: #1c5a6d;
}

.countdown-label {
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: #6ba2a3;
}

.countdown-values {
  background: rgba(28, 90, 109, 0.05);
  padding: 4px 12px;
  border-radius: 12px;
  border: 1px solid rgba(28, 90, 109, 0.1);
}

.countdown-item {
  display: flex;
  align-items: baseline;
  gap: 1px;
}

.value {
  font-weight: 700;
  font-size: 1.1rem;
}

.unit {
  font-size: 0.7rem;
  font-weight: 400;
  color: #6ba2a3;
  margin-left: 1px;
}

.separator {
  margin: 0 6px;
  font-weight: 700;
  opacity: 0.5;
}

.mobile-style {
  color: white;
  padding: 16px;
  width: 100%;
  justify-content: center;
}

.mobile-style .countdown-values {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  justify-content: center;
}

.mobile-style .unit {
  color: #81e6d9;
}

.mobile-style .value {
  color: white;
}
</style>
