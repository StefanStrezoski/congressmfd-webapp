<script setup>

</script>

<template>
  <v-card
    class="base-card"
    :elevation="8"
    rounded="xl"
  >
    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.base-card {
  padding: 0;
}
</style>
