<script setup>
/* eslint-disable */
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import SmallCard from "@/components/SmallCard.vue";
import BaseList from "@/components/BaseList.vue";
import ParagraphNoIndent from "@/components/ParagraphNoIndent.vue";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import BaseParagraph from "@/components/BaseParagraph.vue";
import BannerImage from "@/components/BannerImage.vue";
import { supabase } from "@/supabase/supabase.js";

const { t } = useI18n();

const formRef = ref(null);
const form = ref({
  name: '',
  email: '',
  phone: '',
  institution: '',
  category: null,
});
const file = ref(null);
const message = ref('');
const success = ref(false);
const loading = ref(false);
const hide = ref(false);

const categoryOptions = [
  { title: '1. ⭐MPA members ', value: 1 },
  { title: '2. Non-MPA members', value: 2 },
  { title: '3. ⭐⭐Students', value: 3 },
  { title: '4. E-Poster', value: 4 },
];

const validRule = [value => !!value || 'Required field!'];
const phoneRule = [
  value => !!value || 'Required field!',
  value => /^[0-9+()-]{8,}$/.test(value) || 'Phone number is not valid!',
];
const fileRule = [
  () => form.value.category !== 4 || !!file.value || 'Select a document!',
];

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
      message.value = 'An unexpected error occurred';
      loading.value = false;
      return;
    }

    let fileName = null;

    if (form.value.category === 3) {
      if (!file.value) {
        message.value = 'Select a document';
        loading.value = false;
        return;
      }

      const fileExtension = file.value.name.match(/\.[^.]+$/)[0].toLowerCase();
      fileName = `congressmfd-documents/${Date.now()}_${uuidv4()}${fileExtension}`;

      const { error: uploadError } = await supabase.storage
        .from('projects')
        .upload(fileName, file.value);

      if (uploadError) {
        message.value = `File upload failed: ${uploadError.message}`;
        loading.value = false;
        return;
      }

    }

    const { error: dbError } = await supabase.from('document_submissions_congressmfd').insert({
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      institution: form.value.institution,
      category: form.value.category,
      file_name: fileName,
    });

    if (dbError) {
      message.value = `Failed to save submission: ${dbError.message}`;
      loading.value = false;
      return;
    }

    message.value = 'Successfully submitted!';
    success.value = true;
    loading.value = false;

    form.value = { name: '', email: '', phone: '', institution: '', category: null };
    file.value = null;

    formRef.value?.resetValidation();
    formRef.value?.reset();
  } catch (error) {
    message.value = 'An unexpected error occurred';
    loading.value = false;
  }
}
</script>

<template>
  <div>
    <banner-image />
    <base-container>
      <base-card>
        <paragraph-no-indent class="text-center">
          <span style="color: #1c5a6d" class="text-h5 font-weight-bold">REGISTRATION & PAYMENT
          </span>
        </paragraph-no-indent>
        <v-card outlined class="mt-5 mb-5">
          <v-responsive>
            <v-table class="elevation-1">
              <thead>
                <tr>
                  <th class="text-center bg-teal-lighten-2 border">
                    Category
                  </th>
                  <th class="text-center bg-teal-lighten-2 border">
                    Registration fee for:
                  </th>
                  <th class="text-center bg-teal-lighten-2 border">
                    Early registration fee <br />
                    (up to May 31st 2026)
                  </th>
                  <th class="text-center bg-teal-lighten-2 border">
                    Registration fee <br />
                    (after June 1st 2026)
                  </th>
                  <th class="text-center bg-teal-lighten-2 border">
                    On-site registration fee
                  </th>
                  <th class="text-center bg-teal-lighten-2 border">
                    One day registration fee
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="cell-bg border">
                    1
                  </td>
                  <td class="cell-bg border">
                    &#11088;MPA members
                  </td>
                  <td class="cell-bg border">
                    200 €
                  </td>
                  <td class="cell-bg border">
                    250 €
                  </td>
                  <td class="cell-bg border">
                    300 €
                  </td>
                  <td class="cell-bg border">
                    150 €
                  </td>
                </tr>
                <tr>
                  <td class="cell-bg border">
                    2
                  </td>
                  <td class="cell-bg border">
                    Non-MPA members
                  </td>
                  <td class="cell-bg border">
                    250 €
                  </td>
                  <td class="cell-bg border">
                    300 €
                  </td>
                  <td class="cell-bg border">
                    350 €
                  </td>
                  <td class="cell-bg border">
                    150 €
                  </td>
                </tr>
                <tr>
                  <td class="cell-bg border">
                    3
                  </td>
                  <td class="cell-bg border">
                    &#11088;&#11088;Students
                  </td>
                  <td class="cell-bg border">
                    150 €
                  </td>
                  <td class="cell-bg border">
                    150 €
                  </td>
                  <td class="cell-bg border">
                    200 €
                  </td>
                  <td class="cell-bg border">
                    100 €
                  </td>
                </tr>
                <tr>
                  <td class="cell-bg border">
                    4
                  </td>
                  <td class="cell-bg border">
                    E-Poster
                  </td>
                  <td class="cell-bg border">
                    100 €
                  </td>
                  <td class="cell-bg border">
                    100 €
                  </td>
                  <td class="cell-bg border">
                    100 €
                  </td>
                  <td class="cell-bg border">
                    100 €
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-responsive>
        </v-card>
        <base-paragraph>
          &#11088;MPA – Macedonian Pharmaceutical Association <br />
          &#11088;&#11088;Students (under and post-graduated) must upload a valid student certificate to qualify for the
          reduced registration fee.
        </base-paragraph>
        <!-- Payment Details -->
        <v-card rounded="xl" class="mt-10 mb-5 pa-1 text-center title-card">
          <v-card-text class="text-h6 font-weight-bold">PAYMENT INFORMATION</v-card-text>
        </v-card>

        <v-row>
          <v-col cols="12" md="6">
            <small-card class="h-100">
              <h3 class="payment-header mb-3">Bank Transfer from Abroad (EUR)</h3>
              <div class="payment-info text-left">
                <p><b>Recipient:</b> Macedonian Pharmaceutical Association</p>
                <p><b>Bank:</b> Komercijalna banka</p>
                <p><b>SWIFT:</b> KOBSMK2X</p>
                <p><b>Account:</b> 02-701-00181360</p>
                <p><b>IBAN no.:</b> MK07300701001813673</p>
              </div>
            </small-card>
          </v-col>
          <v-col cols="12" md="6">
            <small-card class="h-100">
              <h3 class="payment-header mb-3">Bank Transfer Domestic (MKD)</h3>
              <div class="payment-info text-left">
                <p><b>Recipient:</b> Macedonian Pharmaceutical Association</p>
                <p><b>Bank:</b> Komercijalna banka</p>
                <p><b>EDBS:</b> 4030985340642</p>
                <p><b>Account:</b> 300000004297621</p>
              </div>
            </small-card>
          </v-col>
        </v-row>

        <base-card class="mt-5">
          <h3 class="payment-header mb-3">On-line payment</h3>
          <base-paragraph class="text-left">
            You just need to log into the pay module of your on-line account and choose the on-line payment method.
            The system will automatically file you with an invoice and redirect you to the <b>CaSys Secure Payment
              Terminal</b>.
          </base-paragraph>
          <base-paragraph class="text-left">
            For more information, please visit the link: <a href="#" class="payment-link">link</a>
          </base-paragraph>
        </base-card>

        <!-- Note about VAT -->
        <paragraph-no-indent class="text-center mt-10" style="color: #d37315;">
          <b>All payments must be completed before the start of the event!</b>
        </paragraph-no-indent>
      </base-card>
      <v-card rounded="xl" class="mt-10 mb-5 pa-1 text-center title-card">
        <v-card-text class="text-h6 font-weight-bold">REGISTRATION</v-card-text>
      </v-card>
      <small-card class="mt-5" v-if="!hide">
        <v-form @submit.prevent="handleSubmit" ref="formRef">
          <v-text-field variant="outlined" density="comfortable" v-model="form.name" label="Name and surname" required
            :rules="validRule" />
          <v-text-field variant="outlined" density="comfortable" v-model="form.email" label="Email" required
            type="email" :rules="validRule" />
          <v-text-field variant="outlined" density="comfortable" v-model="form.phone" label="Phone" required
            :rules="phoneRule" />
          <v-text-field variant="outlined" density="comfortable" v-model="form.institution" label="Institution" required
            :rules="validRule" />
          <v-select variant="outlined" density="comfortable" v-model="form.category" label="Category"
            :items="categoryOptions" item-title="title" item-value="value" required :rules="validRule" />
          <v-file-input v-if="form.category === 3" v-model="file" label="Upload document (JPG, JPEG, PNG, PDF)"
            accept="image/jpeg,image/png,image/heic,application/pdf" :rules="fileRule" variant="outlined"
            density="comfortable" show-size />
          <v-btn type="submit" color="primary" class="mt-4" :loading="loading">
            Submit
          </v-btn>
          <v-alert v-if="message" class="mt-4" :type="success ? 'success' : 'error'" border="start" variant="tonal">
            {{ message }}
          </v-alert>
        </v-form>
      </small-card>
    </base-container>
  </div>
</template>

<style scoped>
.cell-bg {
  background-color: #d0ece9;
  font-size: 1rem;
}

.title-card {
  background-color: #1c5a6d;
  color: white;
}

.payment-header {
  color: #1c5a6d;
  border-bottom: 2px solid #1c5a6d;
  padding-bottom: 4px;
}

.payment-info p {
  margin-bottom: 4px;
  font-size: 1rem;
  color: #125280;
}

.payment-link {
  color: #d37315;
  text-decoration: none;
  font-weight: bold;
}

.payment-link:hover {
  text-decoration: underline;
}
</style>
