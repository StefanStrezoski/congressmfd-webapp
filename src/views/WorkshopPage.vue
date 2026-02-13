<script setup>

import BaseContainer from "@/components/BaseContainer.vue";
import SmallCard from "@/components/SmallCard.vue";
import {ref} from "vue";
import {supabase} from "@/supabase/supabase.js";

const formRef = ref(null);

const form = ref({
  name: '',
});

const message = ref('');
const success = ref(false);
const loading = ref(false);
const hide = ref(false);

const validRule = [value => !!value || 'Задолжително поле'];

async function handleSubmit() {
  try {
    message.value = '';
    success.value = false;
    loading.value = true;

    if (!formRef.value) {
      message.value = 'Form reference is not available.';
      loading.value = false;
      return;
    }

    const isValid = await formRef.value.validate();
    if (!isValid.valid) {
      message.value = 'Се појави неочекувана грешка!';
      loading.value = false;
      return;
    }


    const {error: dbError} = await supabase.from('workshop_registration').insert({
      name: form.value.name,
      workshop_number: 7,
    });

    if (dbError) {
      message.value = 'Неуспешна регистрација! ' + dbError.message;
      loading.value = false;
      return;
    }

    message.value = 'Успешна регистрација!'
    success.value = true;
    loading.value = false;

    form.value = {name: ''};

    formRef.value?.resetValidation();
    formRef.value?.reset();
  } catch (error) {
    message.value = 'Се појави неочекувана грешка!';
    loading.value = false;
  }
}

</script>

<template>
  <base-container>
    <v-card v-if="hide" rounded="xl" class="mb-2 pa-1 text-center title-card">
      <v-card-text v-if="hide"><h3>Регистрирајте го вашето присуство на сателитскиот симпозиум</h3></v-card-text>
      <v-card-text class="text-red"><h2>Во моментов нема активни сателитски симпозиуми!</h2></v-card-text>
    </v-card>
    <small-card v-if="hide" class="text-center">
      <v-list-item title="ВИТАБИОТИКС" subtitle="Недела 02.11.2025 10:00-10:30" class="mb-5"></v-list-item>
      <v-form @submit.prevent="handleSubmit" ref="formRef">
        <v-text-field variant="outlined" density="comfortable" v-model="form.name" label="Име и презиме" required :rules="validRule"/>

        <v-btn type="submit" color="primary" class="mt-4" :loading="loading" :disabled="loading">
          Регистрирај се
        </v-btn>
        <v-alert
          v-if="message"
          class="mt-4"
          :type="success ? 'success' : 'error'"
          border="start"
          variant="tonal"
        >
          {{ message }}
        </v-alert>
      </v-form>
    </small-card>
  </base-container>
</template>

<style scoped>

</style>
