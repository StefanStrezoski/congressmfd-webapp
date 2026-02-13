<script setup>

</script>

<template>
  <ul class="hero-subtitle">
    <slot></slot>
  </ul>
</template>

<style scoped>
.hero-subtitle {
  font-size: 1.2rem;
  text-align: left;
  list-style-position: inside;
}

@media (max-width: 768px) {
  .hero-subtitle {
    font-size: 0.55rem;
    text-align: left;
    list-style-position: inside;
  }
}
</style>
