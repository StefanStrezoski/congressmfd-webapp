<script setup>
import BaseCard from '@/components/BaseCard.vue';
import BaseContainer from '@/components/BaseContainer.vue';

const embededCode = `
<iframe style="width:100%;height:550px;border-radius:12px;" src="https://online.anyflip.com/ujmxk/elxt/index.html" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true"></iframe>`;
</script>
<template>
  <base-container>
    <base-card>
      <div class="iframe-container" v-html="embededCode"></div>
      <div class="d-flex justify-center mt-4">
        <v-btn color="orange-darken-1" prepend-icon="mdi-file-pdf-box"
          href="/files/8%20Kongres%20MFD%20Programa%20Final.pdf" target="_blank" download="8 Kongres MFD Programa Final.pdf"
          variant="elevated" rounded="pill" size="large" class="text-white font-weight-bold">
          Download PDF Programme
        </v-btn>
      </div>
    </base-card>
  </base-container>
</template>
<style scoped></style>
