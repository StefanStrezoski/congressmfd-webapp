<script setup>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import BannerImage from "@/components/BannerImage.vue";
import SmallCard from "@/components/SmallCard.vue";
import { ref, computed, nextTick } from "vue";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8007';
const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20 MB

const sections = [
  'Pharmaceutical Analysis / Quality Assurance / Pharmaceutical Legislation',
  'Social Pharmacy / Pharmaceutical Law',
  'Pharmacoeconomics / Drug Information',
  'Clinical Biochemistry / Toxicology / Food and Nutrition',
  'Pharmaceutical Technology and Biotechnology / Biopharmaceutics / Cosmetology',
  'Pharmaceutical Chemistry / Biomolecular Sciences',
  'Community and Clinical Pharmacy',
  'Natural Products and Phytotherapy',
  'Student Section'
];

const presentationTypes = [
  'Oral Presentation',
  'Poster Presentation',
  'e-Poster Presentation'
];

const formRef = ref(null);
const wizardRef = ref(null);

const form = ref({
  firstName: '',
  lastName: '',
  institution: '',
  email: '',
  section: null,
  presentationType: null,
});
const presentationFile = ref(null);

const message = ref('');
const success = ref(false);
const loading = ref(false);

const isOral = computed(() => form.value.presentationType === 'Oral Presentation');
const isPoster = computed(() => form.value.presentationType === 'Poster Presentation' || form.value.presentationType === 'e-Poster Presentation');

const rules = {
  required: value => !!value || 'Required.',
  email: value => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || 'Invalid e-mail.';
  },
};

const fileAccept = computed(() => isPoster.value ? 'application/pdf' : '.ppt,.pptx,application/pdf');

const fileRule = [
  () => !!presentationFile.value || 'Please attach your final presentation file.',
  () => !presentationFile.value || presentationFile.value.size <= MAX_FILE_SIZE || `"${presentationFile.value.name}" exceeds 20 MB.`,
];

function formatBytes(bytes) {
  if (!bytes) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  let i = 0;
  let val = bytes;
  while (val >= 1024 && i < units.length - 1) {
    val /= 1024;
    i++;
  }
  return `${val.toFixed(val >= 10 || i === 0 ? 0 : 1)} ${units[i]}`;
}

function scrollToForm() {
  nextTick(() => {
    if (wizardRef.value) {
      const top = wizardRef.value.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
}

async function handleSubmit() {
  if (formRef.value) {
    const { valid } = await formRef.value.validate();
    if (!valid) return;
  }

  try {
    message.value = '';
    success.value = false;
    loading.value = true;

    const data = new FormData();
    data.append('first_name', form.value.firstName);
    data.append('last_name', form.value.lastName);
    data.append('institution', form.value.institution);
    data.append('email', form.value.email);
    data.append('section', form.value.section);
    data.append('presentation_type', form.value.presentationType);
    data.append('presentation_file', presentationFile.value);

    const response = await fetch(`${API_URL}/api/v1/presentations`, {
      method: 'POST',
      body: data,
    });

    const result = await response.json();

    if (!response.ok) {
      const firstError = result.errors ? Object.values(result.errors).flat()[0] : null;
      message.value = firstError || result.message || 'Submission failed. Please try again.';
      loading.value = false;
      return;
    }

    success.value = true;
    message.value = 'Your presentation has been successfully submitted!';
    loading.value = false;
  } catch (error) {
    console.error(error);
    message.value = 'An unexpected error occurred. Please try again.';
    loading.value = false;
  }
}

function resetForm() {
  form.value = {
    firstName: '',
    lastName: '',
    institution: '',
    email: '',
    section: null,
    presentationType: null,
  };
  presentationFile.value = null;
  message.value = '';
  success.value = false;
  scrollToForm();
}
</script>

<template>
  <div>
    <banner-image />
    <base-container>
      <!-- Page Title -->
      <v-card rounded="xl" class="mb-5 pa-2 text-center title-card">
        <v-card-text class="text-h5 font-weight-bold">ORAL/POSTER PRESENTATION SUBMISSION</v-card-text>
      </v-card>

      <!-- Introduction -->
      <base-card>
        <base-paragraph>
          Authors of accepted short papers with a completed registration and paid Congress fee are kindly requested to
          upload their final presentation files using the form below. Only presentations of registered participants
          with a paid registration fee will be included in the final Congress programme.
        </base-paragraph>
        <base-paragraph>
          During the submission process, please select the scientific section in which your short paper has been
          accepted, as well as the confirmed presentation type (Oral Presentation, Poster Presentation, or e-Poster
          Presentation).
        </base-paragraph>
        <base-paragraph class="mt-4">
          Please submit your final presentation according to the following instructions:
        </base-paragraph>
      </base-card>

      <!-- Oral Presentations -->
      <v-card rounded="xl" class="mt-10 mb-3 pa-1 text-center title-card-secondary">
        <v-card-text class="text-h6 font-weight-bold">Oral Presentations</v-card-text>
      </v-card>
      <base-card>
        <ul class="instructions-list">
          <li>Submit your presentation in Microsoft PowerPoint (.ppt or .pptx) format.</li>
          <li>Authors are kindly requested to prepare their presentation using the official Congress PowerPoint
            template, available for download here (Official Congress PowerPoint Template: <a
              href="/files/Official-Congress-PowerPoint-Template.potx" class="submission-link">.potx</a> /
            <a href="/files/Official-Congress-PowerPoint-Template.pot" class="submission-link">.pot</a>).</li>
          <li>Deadline for oral presentation submission: <b>September 27, 2026</b>.</li>
          <li>Please ensure that the uploaded file is the final version to be used during the Congress.</li>
        </ul>
      </base-card>

      <!-- Poster and e-Poster Presentations -->
      <v-card rounded="xl" class="mt-10 mb-3 pa-1 text-center title-card-secondary">
        <v-card-text class="text-h6 font-weight-bold">Poster and e-Poster Presentations</v-card-text>
      </v-card>
      <base-card>
        <ul class="instructions-list">
          <li>Submit your poster in Portable Document Format (.pdf).</li>
          <li>Poster orientation: Landscape.</li>
          <li>Poster aspect ratio: 16:9.</li>
          <li>Recommended resolution: 3440 × 2160 pixels.</li>
          <li>The same technical requirements apply to both Poster and e-Poster presentations.</li>
          <li>Deadline for poster and e-poster submission: <b>September 1, 2026</b>.</li>
        </ul>
      </base-card>

      <!-- General Instructions -->
      <v-card rounded="xl" class="mt-10 mb-3 pa-1 text-center title-card-secondary">
        <v-card-text class="text-h6 font-weight-bold">General Instructions</v-card-text>
      </v-card>
      <base-card>
        <ul class="instructions-list">
          <li>Only authors of accepted short papers may upload presentation files.</li>
          <li>Please include the presenting author's surname in the file name (e.g., Nastev_Oral.pptx or
            Nastev_Smith_Poster.pdf).</li>
          <li>Please ensure that the uploaded file is the final version to be used during the Congress.</li>
          <li>If you need to replace a previously submitted file, please contact the Congress Secretariat
            (<a href="mailto:8CPM.secretary@ff.ukim.edu.mk" class="submission-link">8CPM.secretary@ff.ukim.edu.mk</a>)
            before the applicable submission deadline.</li>
        </ul>
      </base-card>

      <!-- Submission Form -->
      <div ref="wizardRef">
        <v-card rounded="xl" class="mt-10 mb-5 pa-1 text-center title-card-secondary">
          <v-card-text class="text-h6 font-weight-bold">Presentation Submission Form</v-card-text>
        </v-card>
      </div>

      <small-card v-if="!success" class="form-card mb-10">
        <v-form ref="formRef">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.firstName" variant="outlined" density="comfortable" clearable
                :rules="[rules.required]">
                <template v-slot:label>First Name <span class="text-orange">*</span></template>
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.lastName" variant="outlined" density="comfortable" clearable
                :rules="[rules.required]">
                <template v-slot:label>Last Name <span class="text-orange">*</span></template>
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.institution" clearable placeholder="Enter your affiliated institution"
                variant="outlined" density="comfortable" :rules="[rules.required]">
                <template v-slot:label>Institution <span class="text-orange">*</span></template>
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.email" type="email" variant="outlined" clearable density="comfortable"
                :rules="[rules.required, rules.email]">
                <template v-slot:label>E-mail <span class="text-orange">*</span></template>
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-select v-model="form.section" :items="sections" variant="outlined" density="comfortable"
                :rules="[rules.required]">
                <template v-slot:label>Scientific Section <span class="text-orange">*</span></template>
              </v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-select v-model="form.presentationType" :items="presentationTypes" variant="outlined"
                density="comfortable" :rules="[rules.required]">
                <template v-slot:label>Confirmed Presentation Type <span class="text-orange">*</span></template>
              </v-select>
            </v-col>
          </v-row>

          <v-card class="mb-4 pa-4" color="amber-lighten-5" variant="flat" rounded="lg">
            <div class="d-flex align-center ga-1 mb-2">
              <v-icon size="14" color="amber-darken-3">mdi-upload</v-icon>
              <span class="text-body-2 font-weight-medium" style="color: #795548;">
                Final Presentation File <span class="text-orange">*</span>
              </span>
            </div>
            <p class="text-caption mb-2" style="color: #795548;">
              <span v-if="isOral">Attach your presentation in <b>.ppt</b> or <b>.pptx</b> format</span>
              <span v-else-if="isPoster">Attach your poster in <b>.pdf</b> format</span>
              <span v-else>Attach your file in <b>.ppt</b>, <b>.pptx</b> or <b>.pdf</b> format, depending on your
                confirmed presentation type</span> — max <b>20 MB</b>.
            </p>
            <v-file-input v-model="presentationFile" :accept="fileAccept" chips variant="outlined" density="compact"
              show-size hide-details="auto" label="Choose file" prepend-icon="mdi-paperclip" :rules="fileRule" />
            <p v-if="presentationFile" class="mt-2 text-caption text-green d-flex align-center ga-1">
              <v-icon size="12" color="green">mdi-check-circle</v-icon>
              {{ presentationFile.name }} ({{ formatBytes(presentationFile.size) }})
            </p>
          </v-card>

          <v-btn color="orange-darken-2" block size="large" class="text-white" :loading="loading" :disabled="loading"
            @click="handleSubmit">
            <v-icon start>mdi-send</v-icon> Submit Presentation
          </v-btn>
        </v-form>

        <v-alert v-if="message && !success" type="error" variant="tonal" class="mt-6" closable>
          {{ message }}
        </v-alert>
      </small-card>

      <!-- Success state -->
      <div v-if="success" class="mb-10">
        <v-alert type="success" variant="tonal" border="start" class="mb-4" prominent>
          <div>
            <h3 class="text-h6 font-weight-bold text-green-darken-2">Submission Received!</h3>
            <p class="mt-1 text-body-2 text-green-darken-1">{{ message }}</p>
            <v-btn color="primary" class="mt-4" size="large" @click="resetForm">
              <v-icon start>mdi-plus</v-icon> Submit another presentation
            </v-btn>
          </div>
        </v-alert>
      </div>
    </base-container>
  </div>
</template>

<style scoped>
.title-card {
  background-color: #1c5a6d;
  color: white;
}

.title-card-secondary {
  background-color: #1c5a6d;
  color: white;
}

.instructions-list {
  padding-left: 20px;
  margin: 0;
  text-align: left;
  color: #1c5a6d;
}

.instructions-list li {
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.submission-link {
  color: #d37315;
  text-decoration: none;
  border-bottom: 1px dashed #d37315;
}

.submission-link:hover {
  text-decoration: underline;
}

.text-orange {
  color: #d37315 !important;
  font-weight: bold;
}

.form-card {
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

@media (max-width: 768px) {
  .text-h5 {
    font-size: 1.25rem !important;
  }

  .text-h6 {
    font-size: 1.1rem !important;
  }

  .instructions-list li {
    font-size: 0.85rem;
  }
}
</style>
