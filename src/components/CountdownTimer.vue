<template>
  <div class="countdown-timer d-flex align-center">
    <div class="countdown-label d-sm-block mr-2">
      Countdown to <br /> Short paper acceptance:
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

const targetDate = new Date('2026-07-01T00:00:00+02:00');
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
  color: #d37315;
}

.countdown-label {
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: #d37315;
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
  color: #d37315;
  margin-left: 1px;
}

.separator {
  margin: 0 6px;
  font-weight: 700;
  opacity: 0.5;
}

@media (max-width: 768px) {
  .countdown-label {
    font-size: 0.7rem;
    margin-right: 0;
    text-align: right;
  }
}
</style>
