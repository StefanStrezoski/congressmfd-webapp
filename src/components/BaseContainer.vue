<script setup>

</script>

<template>
  <div class="home-container">
    <v-container class="base-container">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <slot></slot>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.home-container {
  min-height: 100vh;
  padding: 2rem 0;
}
.base-container {
  margin-bottom: 4rem;
}
</style>
