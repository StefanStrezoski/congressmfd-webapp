<script setup>

</script>

<template>
  <p  class="hero-subtitle">
    <slot></slot>
  </p>
</template>

<style scoped>
.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 6px;
  text-align: justify;
}

@media (max-width: 768px) {
  .hero-subtitle {
    font-size: 0.8rem;
    margin-bottom: 6px;
    text-align: justify;
  }
}
</style>
