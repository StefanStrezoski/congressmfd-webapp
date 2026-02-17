<script setup>

</script>

<template>
  <p class="hero-subtitle">
    <slot></slot>
  </p>
</template>

<style scoped>
.hero-subtitle {
  text-indent: 10px;
  font-size: 0.95rem;
  margin-bottom: 6px;
  color: #1c5a6d;
  text-align: left;
}

@media (max-width: 768px) {
  .hero-subtitle {
    font-size: 0.8rem;
    text-indent: 10px;
    margin-bottom: 6px;
    text-align: left;
  }
}
</style>
