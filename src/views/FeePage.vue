<script setup>
/* eslint-disable */
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import SmallCard from "@/components/SmallCard.vue";
import BaseList from "@/components/BaseList.vue";
import ParagraphNoIndent from "@/components/ParagraphNoIndent.vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import BannerImage from "@/components/BannerImage.vue";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8007';

const route = useRoute();
const TEST_KEY = 'smfd2026';
const isUnlocked = route.query.key === TEST_KEY;
const isTestMode = isUnlocked; // show test package only when unlocked

const { t } = useI18n();

/* ─── Pricing ─── */
const allFees = [
  { category: 'MPA Members', key: 'mpa_member', value: 1, early: 200, regular: 250, onsite: 300, oneday: 150, note: 'Macedonian Pharmaceutical Association' },
  { category: 'Non-MPA Members', key: 'non_mpa_member', value: 2, early: 250, regular: 300, onsite: 350, oneday: 150, note: '' },
  { category: 'Students', key: 'student', value: 3, early: 150, regular: 150, onsite: 200, oneday: 100, note: 'Must upload valid student certificate' },
  { category: 'E-Poster', key: 'e_poster', value: 4, early: 100, regular: 100, onsite: 100, oneday: 100, note: '' },
  { category: 'Test (1 MKD)', key: 'test', value: 99, early: 1, regular: 1, onsite: 1, oneday: 1, note: 'Test payment only', testOnly: true },
];
const fees = isTestMode ? allFees : allFees.filter(f => !f.testOnly);

const EARLY_DEADLINE = new Date('2026-06-01T00:00:00');
const ONSITE_START = new Date('2026-10-01T00:00:00');

function getRegistrationPeriod() {
  const now = new Date();
  if (now < EARLY_DEADLINE) return 'early';
  if (now < ONSITE_START) return 'regular';
  return 'onsite';
}

const period = getRegistrationPeriod();

const periodLabels = {
  early: 'Early Registration',
  regular: 'Regular Registration',
  onsite: 'On-site Registration',
};

const periodDeadlines = {
  early: 'until May 31, 2026',
  regular: 'June 1 – September 30, 2026',
  onsite: 'from October 1, 2026',
};

const stepsList = [
  { num: 1, label: 'Personal Info', icon: 'mdi-account' },
  { num: 2, label: 'Package', icon: 'mdi-package-variant' },
  { num: 3, label: 'Review & Pay', icon: 'mdi-credit-card' },
];

/* ─── Wizard state ─── */
const step = ref(1);
const form = ref({
  name: '',
  email: '',
  phone: '',
  institution: '',
  category: null,
  isOneDay: false,
});
const file = ref(null);
const message = ref('');
const success = ref(false);
const loading = ref(false);
const formRef = ref(null);
const registrationId = ref(null);
const paymentLoading = ref(false);

const validRule = [value => !!value || 'Required field!'];
const phoneRule = [
  value => !!value || 'Required field!',
  value => /^[0-9+()-]{8,}$/.test(value) || 'Phone number is not valid!',
];

const selectedFee = computed(() => fees.find(f => f.value === form.value.category));
const price = computed(() => {
  if (!selectedFee.value) return null;
  if (form.value.isOneDay) return selectedFee.value.oneday;
  return selectedFee.value[period];
});

const feeTypeForApi = computed(() => {
  if (form.value.isOneDay) return 'one_day';
  return period === 'onsite' ? 'on_site' : period;
});

const canProceedStep1 = computed(() => form.value.name && form.value.email && form.value.institution);
const canProceedStep2 = computed(() => form.value.category && (form.value.category !== 3 || file.value));

function goToStep(n) {
  step.value = n;
}

async function handleSubmit() {
  try {
    message.value = '';
    success.value = false;
    loading.value = true;
    registrationId.value = null;

    const data = new FormData();
    data.append('name', form.value.name);
    data.append('email', form.value.email);
    data.append('phone', form.value.phone || '');
    data.append('institution', form.value.institution);
    data.append('category', selectedFee.value.key);
    data.append('fee_type', feeTypeForApi.value);

    if (file.value) {
      data.append('student_certificate', file.value);
    }

    const response = await fetch(`${API_URL}/api/v1/register`, {
      method: 'POST',
      body: data,
    });

    const result = await response.json();

    if (!response.ok) {
      message.value = result.message || 'Registration failed. Please try again.';
      loading.value = false;
      return;
    }

    registrationId.value = result.data?.id;
    message.value = 'Registration submitted successfully!';
    success.value = true;
    loading.value = false;
  } catch (error) {
    message.value = 'An unexpected error occurred. Please try again.';
    loading.value = false;
  }
}

async function handlePayOnline() {
  if (!registrationId.value) return;
  paymentLoading.value = true;
  try {
    const response = await fetch(`${API_URL}/api/v1/payments/initiate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ registration_id: registrationId.value }),
    });

    const data = await response.json();

    if (data.payment_url && data.form_params) {
      const hiddenForm = document.createElement('form');
      hiddenForm.method = 'POST';
      hiddenForm.action = data.payment_url;
      hiddenForm.style.display = 'none';

      Object.entries(data.form_params).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        hiddenForm.appendChild(input);
      });

      document.body.appendChild(hiddenForm);
      hiddenForm.submit();
    }
  } catch (error) {
    message.value = 'Could not initiate payment. Please try again later.';
    paymentLoading.value = false;
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
        </base-card>

        <!-- Note about VAT -->
        <paragraph-no-indent class="text-center mt-10" style="color: #d37315;">
          <b>All payments must be completed before the start of the event!</b>
        </paragraph-no-indent>
      </base-card>
      <!-- Registration coming soon (locked) -->
      <v-card v-if="!isUnlocked" rounded="xl" class="mt-10 mb-10 pa-8 text-center" elevation="2">
        <v-icon size="64" color="grey-lighten-1" class="mb-4">mdi-lock-outline</v-icon>
        <h3 class="text-h5 font-weight-bold mb-2">Online Registration Opening Soon</h3>
        <p class="text-body-1 text-grey">The registration form will be available shortly. Please check back later.</p>
      </v-card>

      <v-card v-if="isUnlocked" rounded="xl" class="mt-10 mb-5 pa-1 text-center title-card">
        <v-card-text class="text-h6 font-weight-bold">REGISTER NOW</v-card-text>
      </v-card>

      <!-- Step Indicator -->
      <div v-if="isUnlocked" class="step-indicator d-flex align-center justify-center ga-2 ga-sm-4 mb-6">
        <div v-for="(s, i) in stepsList" :key="s.num" class="d-flex align-center ga-2 ga-sm-4">
          <div class="d-flex align-center ga-2">
            <div class="step-circle" :class="{ active: step === s.num, done: step > s.num }">
              <v-icon v-if="step > s.num" size="18">mdi-check-circle</v-icon>
              <v-icon v-else size="18">{{ s.icon }}</v-icon>
            </div>
            <span class="step-label d-none d-sm-block" :class="{ 'text-primary': step === s.num, 'text-green': step > s.num, 'text-grey': step < s.num }">
              {{ s.label }}
            </span>
          </div>
          <v-icon v-if="i < stepsList.length - 1" size="16" :color="step > s.num ? 'green' : 'grey-lighten-1'">mdi-chevron-right</v-icon>
        </div>
      </div>

      <template v-if="isUnlocked">
      <!-- Step 1: Personal Information -->
      <small-card v-if="step === 1" class="wizard-step">
        <h3 class="text-h6 font-weight-bold mb-1">Personal Information</h3>
        <p class="text-body-2 text-grey mb-6">Please fill in your details below.</p>
        <v-form ref="formRef">
          <v-text-field variant="outlined" density="comfortable" v-model="form.name" label="Full Name *"
            placeholder="e.g. Dr. Ana Petrovska" :rules="validRule" />
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field variant="outlined" density="comfortable" v-model="form.email" label="Email *"
                type="email" placeholder="ana@example.com" :rules="validRule" />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field variant="outlined" density="comfortable" v-model="form.phone" label="Phone"
                placeholder="+389 7X XXX XXX" />
            </v-col>
          </v-row>
          <v-text-field variant="outlined" density="comfortable" v-model="form.institution" label="Institution *"
            placeholder="e.g. Faculty of Pharmacy, UKIM" :rules="validRule" />
          <v-btn color="primary" block size="large" :disabled="!canProceedStep1" @click="goToStep(2)">
            Choose Your Package <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </v-form>
      </small-card>

      <!-- Step 2: Package Selection -->
      <small-card v-if="step === 2" class="wizard-step">
        <h3 class="text-h6 font-weight-bold mb-1">Choose Your Registration Package</h3>
        <p class="text-body-2 text-grey mb-2">
          Current period: <strong class="text-primary">{{ periodLabels[period] }}</strong>
          <span class="text-grey"> ({{ periodDeadlines[period] }})</span>
        </p>

        <!-- One Day toggle -->
        <div class="mb-6 mt-4">
          <v-switch v-model="form.isOneDay" color="primary" hide-details density="compact">
            <template #label>
              <div>
                <span class="text-body-2 font-weight-medium">One Day Pass</span>
                <span class="d-block text-caption text-grey">Attend a single day of the congress at a reduced rate</span>
              </div>
            </template>
          </v-switch>
        </div>

        <!-- Category cards -->
        <v-row class="mb-6">
          <v-col v-for="fee in fees" :key="fee.key" cols="12" sm="6">
            <v-card
              :class="['category-card', { 'category-card--active': form.category === fee.value }]"
              @click="form.category = fee.value"
              variant="outlined"
              rounded="xl"
            >
              <div v-if="form.category === fee.value" class="category-check">
                <v-icon size="14" color="white">mdi-check-circle</v-icon>
              </div>
              <v-card-text class="pa-5">
                <h4 class="text-subtitle-1 font-weight-bold" :class="form.category === fee.value ? 'text-primary' : ''">
                  {{ fee.category }}
                </h4>
                <p v-if="fee.note" class="text-caption text-grey mt-1">{{ fee.note }}</p>
                <div class="mt-3 d-flex align-baseline ga-1">
                  <span class="text-h5 font-weight-black" :class="form.category === fee.value ? 'text-primary' : ''">
                    {{ form.isOneDay ? fee.oneday : fee[period] }} &euro;
                  </span>
                  <span v-if="form.isOneDay && fee[period] !== fee.oneday" class="text-body-2 text-grey text-decoration-line-through ml-2">
                    {{ fee[period] }} &euro;
                  </span>
                </div>
                <p class="text-caption text-grey mt-1">
                  {{ form.isOneDay ? 'One Day Pass' : periodLabels[period] }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Student certificate upload -->
        <v-card v-if="form.category === 3" class="mb-6 pa-4" color="amber-lighten-5" variant="flat" rounded="lg">
          <div class="d-flex align-center ga-1 mb-2">
            <v-icon size="14" color="amber-darken-3">mdi-upload</v-icon>
            <span class="text-body-2 font-weight-medium" style="color: #795548;">Student Certificate Required *</span>
          </div>
          <p class="text-caption mb-2" style="color: #795548;">Upload a valid student ID or enrollment certificate (PDF, JPG, PNG - max 5MB)</p>
          <v-file-input v-model="file" accept="image/jpeg,image/png,image/heic,application/pdf"
            variant="outlined" density="compact" show-size hide-details
            label="Choose file" />
          <p v-if="file" class="mt-2 text-caption text-green d-flex align-center ga-1">
            <v-icon size="12" color="green">mdi-check-circle</v-icon> {{ file.name }}
          </p>
        </v-card>

        <!-- Navigation -->
        <div class="d-flex ga-3">
          <v-btn variant="outlined" size="large" @click="goToStep(1)">
            <v-icon start>mdi-arrow-left</v-icon> Back
          </v-btn>
          <v-btn color="primary" size="large" class="flex-grow-1" :disabled="!canProceedStep2" @click="goToStep(3)">
            Review & Pay <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </small-card>

      <!-- Step 3: Review & Pay -->
      <div v-if="step === 3 && !success">
        <!-- Order Summary -->
        <small-card class="wizard-step mb-4">
          <div class="summary-header pa-4 mb-4">
            <h3 class="text-h6 font-weight-bold d-flex align-center ga-2">
              <v-icon color="primary">mdi-file-check</v-icon> Registration Summary
            </h3>
          </div>
          <v-row class="text-body-2 mb-4">
            <v-col cols="12" sm="6">
              <span class="text-grey">Name:</span>
              <span class="ml-2 font-weight-medium">{{ form.name }}</span>
            </v-col>
            <v-col cols="12" sm="6">
              <span class="text-grey">Email:</span>
              <span class="ml-2 font-weight-medium">{{ form.email }}</span>
            </v-col>
            <v-col v-if="form.phone" cols="12" sm="6">
              <span class="text-grey">Phone:</span>
              <span class="ml-2 font-weight-medium">{{ form.phone }}</span>
            </v-col>
            <v-col cols="12" sm="6">
              <span class="text-grey">Institution:</span>
              <span class="ml-2 font-weight-medium">{{ form.institution }}</span>
            </v-col>
          </v-row>
          <v-divider class="mb-4" />
          <div class="d-flex align-center justify-space-between">
            <div>
              <p class="font-weight-bold">{{ selectedFee?.category }}</p>
              <p class="text-body-2 text-grey">
                {{ form.isOneDay ? 'One Day Pass' : periodLabels[period] }}
                <span v-if="form.category === 3 && file" class="ml-2 text-green text-caption">
                  <v-icon size="11" color="green">mdi-check-circle</v-icon> Certificate attached
                </span>
              </p>
            </div>
            <span class="text-h4 font-weight-black text-primary">{{ price }} &euro;</span>
          </div>
        </small-card>

        <!-- Payment notice -->
        <v-alert type="info" variant="tonal" class="mb-4" border="start">
          After submitting your registration, your details will be saved. Please complete payment via bank transfer or online payment to confirm your registration.
        </v-alert>

        <!-- Actions -->
        <div class="d-flex ga-3">
          <v-btn variant="outlined" size="large" @click="goToStep(2)">
            <v-icon start>mdi-arrow-left</v-icon> Back
          </v-btn>
          <v-btn color="orange-darken-2" size="large" class="flex-grow-1 text-white" :loading="loading" @click="handleSubmit">
            <v-icon start>mdi-credit-card</v-icon>
            Register & Pay {{ price }} &euro;
          </v-btn>
        </div>
      </div>

      <!-- Result after submission -->
      <div v-if="step === 3 && success">
        <v-alert type="success" variant="tonal" border="start" class="mb-4" prominent>
          <div>
            <h3 class="text-h6 font-weight-bold text-green-darken-2">Registration Submitted!</h3>
            <p class="mt-1 text-body-2 text-green-darken-1">{{ message }}</p>
            <p class="mt-3 text-body-2 text-green-darken-1">
              Click below to proceed to the secure payment page to complete your payment.
            </p>
            <v-btn
              color="orange-darken-2"
              class="mt-4 text-white"
              size="large"
              :loading="paymentLoading"
              @click="handlePayOnline"
            >
              <v-icon start>mdi-credit-card</v-icon>
              {{ paymentLoading ? 'Redirecting to payment...' : `Proceed to Payment — ${price} €` }}
            </v-btn>
          </div>
        </v-alert>

        <!-- Bank transfer alternative -->
        <small-card>
          <p class="text-body-2 text-grey mb-4 d-flex align-center ga-2">
            <v-icon size="14">mdi-information</v-icon> Alternatively, you can pay via bank transfer:
          </p>
          <v-row>
            <v-col cols="12" sm="6">
              <v-card variant="flat" color="grey-lighten-4" rounded="lg" class="pa-3">
                <div class="d-flex align-center ga-2 mb-2">
                  <v-icon size="16" color="primary">mdi-bank</v-icon>
                  <span class="font-weight-bold">EUR Transfer</span>
                </div>
                <p class="text-body-2 text-grey">Komercijalna banka</p>
                <p class="text-caption font-weight-medium mt-1">IBAN: MK07300701001813673</p>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card variant="flat" color="grey-lighten-4" rounded="lg" class="pa-3">
                <div class="d-flex align-center ga-2 mb-2">
                  <v-icon size="16" color="primary">mdi-bank</v-icon>
                  <span class="font-weight-bold">MKD Transfer</span>
                </div>
                <p class="text-body-2 text-grey">Komercijalna banka</p>
                <p class="text-caption font-weight-medium mt-1">Acc: 300000004297621</p>
              </v-card>
            </v-col>
          </v-row>
        </small-card>
      </div>

      <!-- Error result -->
      <v-alert v-if="step === 3 && message && !success" type="error" variant="tonal" border="start" class="mt-4" prominent>
        <div>
          <h3 class="text-h6 font-weight-bold text-red-darken-2">Registration Failed</h3>
          <p class="mt-1 text-body-2 text-red-darken-1">{{ message }}</p>
          <v-btn color="primary" class="mt-3" size="small" @click="message = ''">Try Again</v-btn>
        </div>
      </v-alert>
      </template>
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

/* Step Indicator */
.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  background-color: #e0e0e0;
  color: #9e9e9e;
  transition: all 0.3s;
}

.step-circle.active {
  background-color: #1c5a6d;
  color: white;
  box-shadow: 0 4px 12px rgba(28, 90, 109, 0.3);
  transform: scale(1.1);
}

.step-circle.done {
  background-color: #4caf50;
  color: white;
}

.step-label {
  font-size: 14px;
  font-weight: 500;
}

/* Category Cards */
.category-card {
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  border: 2px solid #e0e0e0 !important;
  height: 100%;
}

.category-card:hover {
  border-color: rgba(28, 90, 109, 0.4) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.category-card--active {
  border-color: #1c5a6d !important;
  background-color: rgba(28, 90, 109, 0.05);
  box-shadow: 0 4px 16px rgba(28, 90, 109, 0.1);
}

.category-check {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 24px;
  height: 24px;
  background-color: #1c5a6d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

/* Summary */
.summary-header {
  background-color: rgba(28, 90, 109, 0.05);
  border-bottom: 1px solid rgba(28, 90, 109, 0.1);
  border-radius: 12px 12px 0 0;
  margin: -16px -16px 0 -16px;
}

.wizard-step {
  animation: fadeInUp 0.3s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.text-primary {
  color: #1c5a6d !important;
}
</style>
