<script setup>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import BannerImage from "@/components/BannerImage.vue";
import SmallCard from "@/components/SmallCard.vue";
import { ref, computed, nextTick } from "vue";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8007';
const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20 MB
const STUDENT_CATEGORY = 'Student Section';

const categories = [
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
  'Oral presentation',
  'Poster presentation',
  'E-poster presentation'
];

const stepsList = [
  { num: 1, label: 'Personal Info', icon: 'mdi-account' },
  { num: 2, label: 'Paper Details', icon: 'mdi-file-document' },
  { num: 3, label: 'Review & Submit', icon: 'mdi-check-circle' },
];

const step = ref(1);
const formRef1 = ref(null);
const formRef2 = ref(null);
const formRef3 = ref(null);
const wizardRef = ref(null);

const form = ref({
  abstractTitle: '',
  firstName: '',
  lastName: '',
  institution: '',
  country: '',
  email: '',
  phone: '',
  category: null,
  presentationType: null,
  consent: null,
});
const paperFiles = ref([]);
const studentCertificate = ref(null);

const message = ref('');
const success = ref(false);
const loading = ref(false);

const isStudentCategory = computed(() => form.value.category === STUDENT_CATEGORY);

const rules = {
  required: value => !!value || 'Required.',
  email: value => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || 'Invalid e-mail.';
  },
};

const paperFilesRule = [
  () => (paperFiles.value && paperFiles.value.length > 0) || 'Please attach at least one paper file (.doc, .docx or .pdf).',
  () => {
    if (!paperFiles.value) return true;
    const tooBig = paperFiles.value.find(f => f.size > MAX_FILE_SIZE);
    return !tooBig || `"${tooBig.name}" exceeds 20 MB.`;
  },
];

const certificateRule = [
  () => !isStudentCategory.value || !!studentCertificate.value || 'Student Section requires a valid student certificate.',
  () => !studentCertificate.value || studentCertificate.value.size <= MAX_FILE_SIZE || 'Certificate must be 20 MB or smaller.',
];

const canProceedStep1 = computed(() =>
  form.value.firstName && form.value.lastName && form.value.email &&
  form.value.institution && form.value.country && form.value.phone
);
const canProceedStep2 = computed(() =>
  form.value.abstractTitle && form.value.category && form.value.presentationType &&
  paperFiles.value.length > 0 && (!isStudentCategory.value || !!studentCertificate.value)
);

function scrollToWizard() {
  nextTick(() => {
    if (wizardRef.value) {
      const top = wizardRef.value.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
}

async function nextStep(target) {
  const formToValidate = target === 2 ? formRef1.value : formRef2.value;
  if (formToValidate) {
    const { valid } = await formToValidate.validate();
    if (!valid) return;
  }
  step.value = target;
  message.value = '';
  scrollToWizard();
}

function goToStep(n) {
  step.value = n;
  message.value = '';
  scrollToWizard();
}

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

async function handleSubmit() {
  if (formRef3.value) {
    const { valid } = await formRef3.value.validate();
    if (!valid) return;
  }

  try {
    message.value = '';
    success.value = false;
    loading.value = true;

    const data = new FormData();
    data.append('abstract_title', form.value.abstractTitle);
    data.append('first_name', form.value.firstName);
    data.append('last_name', form.value.lastName);
    data.append('institution', form.value.institution);
    data.append('country', form.value.country);
    data.append('email', form.value.email);
    data.append('phone', form.value.phone);
    data.append('category', form.value.category);
    data.append('presentation_type', form.value.presentationType);
    data.append('consent', form.value.consent);
    paperFiles.value.forEach(f => data.append('paper_files[]', f));
    if (studentCertificate.value) {
      data.append('student_certificate', studentCertificate.value);
    }

    const response = await fetch(`${API_URL}/api/v1/abstracts`, {
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
    message.value = 'Your paper has been successfully submitted!';
    loading.value = false;
  } catch (error) {
    console.error(error);
    message.value = 'An unexpected error occurred. Please try again.';
    loading.value = false;
  }
}

function resetForm() {
  form.value = {
    abstractTitle: '',
    firstName: '',
    lastName: '',
    institution: '',
    country: '',
    email: '',
    phone: '',
    category: null,
    presentationType: null,
    consent: null,
  };
  paperFiles.value = [];
  studentCertificate.value = null;
  step.value = 1;
  message.value = '';
  success.value = false;
  scrollToWizard();
}
</script>

<template>
  <div>
    <banner-image />
    <base-container>
      <!-- Page Title -->
      <v-card rounded="xl" class="mb-5 pa-2 text-center title-card">
        <v-card-text class="text-h5 font-weight-bold">ON-LINE SHORT PAPER SUBMISSION</v-card-text>
      </v-card>

      <!-- Introduction and Submission Overview -->
      <base-card>
        <base-paragraph>
          The Scientific committee of <b>8th Congress of Pharmacy in North Macedonia</b> with international
          participation
          decided that submitted scientific works should be in form of short communications (papers) as they will be
          published in a special issue of <i>Macedonian Pharmaceutical Bulletin</i>, vol. 72 (Suppl 1), 2026. Short
          papers will
          be labelled with a Digital Object Identification Number (DOI).
        </base-paragraph>
        <base-paragraph>
          All submitted short papers will undergo a peer-review by the members of the Scientific Committee and will be
          published upon their acceptance and payment of registration fee.
        </base-paragraph>
        <base-paragraph class="mt-4">
          For successful on-line submission of your paper, we kindly ask you to complete the instructions given in:
        </base-paragraph>
        <ul class="submission-links-list">
          <li><a href="/files/Template-8CPM-Ohrid.doc" class="submission-link">TEMPLATE submission document</a></li>
          <li><a href="/files/ShortPaperExamples.zip" class="submission-link">How to Prepare a Short paper –
              Examples</a></li>
        </ul>
        <base-paragraph class="mt-4">
          For submission of your short papers, use only the prepared <b>TEMPLATE document</b>, fulfilled with your
          manuscript text and upload it as a <b>Word document</b>.
        </base-paragraph>
      </base-card>

      <!-- Deadlines and Notifications -->
      <small-card class="mt-5">
        <v-list density="compact" class="info-list">
          <v-list-item>
            <v-list-item-title><b>Deadline for short paper submission and registration</b></v-list-item-title>
            <v-list-item-subtitle opacity="100" class="text-orange">May 31st, 2026</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><b>Acceptance of the short paper</b></v-list-item-title>
            <v-list-item-subtitle opacity="100" class="text-orange">July 1st, 2026</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><b>Presentation Dates</b></v-list-item-title>
            <v-list-item-subtitle opacity="100" class="text-orange">October 2-4, 2026 (Oral or Poster
              form)</v-list-item-subtitle>
          </v-list-item>
        </v-list>
        <base-paragraph class="pa-2 text-center" style="font-size: 0.9rem;">
          <i><b>The fee for the accepted short paper will be charged at the early registration rate.</b><br />
            *Publication is dependent upon payment of registration fee.</i>
        </base-paragraph>
      </small-card>

      <!-- Student Session -->
      <v-card rounded="xl" class="mt-10 mb-5 pa-1 text-center title-card-secondary">
        <v-card-text class="text-h6 font-weight-bold">Student Session</v-card-text>
      </v-card>
      <base-card>
        <base-paragraph>
          Students of five-years integrated studies of Pharmacy are invited to present results of their graduate thesis
          or
          any research activity they participated in during their studies, as an oral or a poster presentation. The
          presentations will be evaluated by an international expert jury, with the best oral and poster presentations
          being awarded. During the short paper submission process students should select the option <b>Student
            session</b>.
        </base-paragraph>
      </base-card>

      <!-- Presentation Formats -->
      <v-row class="mt-5">
        <v-col cols="12" md="6">
          <v-card rounded="xl" class="mb-3 pa-1 text-center title-card-secondary">
            <v-card-text class="text-h6 font-weight-bold">Oral presentations</v-card-text>
          </v-card>
          <base-card>
            <base-paragraph>
              The time limit for oral contributions will be exactly <b>20 minutes</b>, including 5 minutes discussion.
              The
              time for oral presentation in the Student session is <b>10 minutes</b>.
            </base-paragraph>
          </base-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card rounded="xl" class="mb-3 pa-1 text-center title-card-secondary">
            <v-card-text class="text-h6 font-weight-bold">Poster presentations</v-card-text>
          </v-card>
          <base-card>
            <base-paragraph>
              Posters will be presented during poster sessions. The posters should be in form of a Power point slide,
              <b>A4 landscape format (4:3)</b> and be uploaded on the Congress web-page (upon receiving submission
              details in the acceptance e-mail) by September 1st, 2026 at the latest.
            </base-paragraph>
          </base-card>
        </v-col>
      </v-row>

      <!-- E-Posters -->
      <v-card rounded="xl" class="mt-10 mb-5 pa-1 text-center title-card-secondary">
        <v-card-text class="text-h6 font-weight-bold">E-Posters</v-card-text>
      </v-card>
      <base-card>
        <base-paragraph>
          Those who are not attending the event physically but willing to publish their research work in the Congress
          proceedings can register under this category. E-Posters will be on display throughout the Congress poster
          sessions on multi-media screens situated in the poster area.
        </base-paragraph>
        <base-paragraph>
          First of all, authors should submit their short paper by <b>May 31st, 2026</b> (<a
            href="/files/Template-8CPM-Ohrid.doc" class="submission-link">TEMPLATE submission document</a>). During the
          short paper submission process, please select
          the option <b>Poster type of presentation</b>. Short papers will be published in a special issue of the
          <i>Macedonian Pharmaceutical Bulletin</i>, vol. 72 (Suppl 1), 2026.
        </base-paragraph>
        <base-paragraph>
          E-Posters should be in form of a Power point slide, <b>A4 landscape format (4:3)</b> and be uploaded on the
          Congress web-page (upon receiving submission details in the acceptance e-mail) by <b>September 1st, 2026</b>
          at the latest.
        </base-paragraph>
        <base-paragraph class="mt-4 text-center">
          <b>Publication of short papers and presentation of E-Posters is dependent upon payment of registration
            fee.</b>
        </base-paragraph>
      </base-card>

      <!-- Submission wizard -->
      <div ref="wizardRef">
        <v-card rounded="xl" class="mt-10 mb-5 pa-1 text-center title-card-secondary">
          <v-card-text class="text-h6 font-weight-bold">Short paper submission</v-card-text>
        </v-card>
      </div>

      <!-- Step Indicator -->
      <div v-if="!success" class="step-indicator d-flex align-center justify-center ga-2 ga-sm-4 mb-6">
        <div v-for="(s, i) in stepsList" :key="s.num" class="d-flex align-center ga-2 ga-sm-4">
          <div class="d-flex align-center ga-2">
            <div class="step-circle" :class="{ active: step === s.num, done: step > s.num }">
              <v-icon v-if="step > s.num" size="18">mdi-check-circle</v-icon>
              <v-icon v-else size="18">{{ s.icon }}</v-icon>
            </div>
            <span class="step-label d-none d-sm-block"
              :class="{ 'text-primary': step === s.num, 'text-green': step > s.num, 'text-grey': step < s.num }">
              {{ s.label }}
            </span>
          </div>
          <v-icon v-if="i < stepsList.length - 1" size="16"
            :color="step > s.num ? 'green' : 'grey-lighten-1'">mdi-chevron-right</v-icon>
        </div>
      </div>

      <!-- Step 1: Personal Information -->
      <small-card v-if="step === 1 && !success" class="wizard-step mb-10">
        <h3 class="text-h6 font-weight-bold mb-1">Personal Information</h3>
        <p class="text-body-2 text-grey mb-6">Please fill in the author's contact details.</p>
        <v-form ref="formRef1">
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
            <v-col cols="12">
              <v-text-field v-model="form.institution" clearable placeholder="Enter your affiliated institution"
                variant="outlined" density="comfortable" :rules="[rules.required]">
                <template v-slot:label>Institution <span class="text-orange">*</span></template>
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.country" variant="outlined" density="comfortable" clearable
                :rules="[rules.required]">
                <template v-slot:label>Country <span class="text-orange">*</span></template>
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.email" type="email" variant="outlined" clearable density="comfortable"
                :rules="[rules.required, rules.email]">
                <template v-slot:label>Author's E-mail <span class="text-orange">*</span></template>
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.phone" variant="outlined" density="comfortable" clearable
                :rules="[rules.required]">
                <template v-slot:label>Phone number <span class="text-orange">*</span></template>
              </v-text-field>
            </v-col>
          </v-row>
          <v-btn color="primary" block size="large" :disabled="!canProceedStep1" @click="nextStep(2)">
            Continue to Paper Details <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </v-form>
      </small-card>

      <!-- Step 2: Paper Details -->
      <small-card v-if="step === 2 && !success" class="wizard-step mb-10">
        <h3 class="text-h6 font-weight-bold mb-1">Paper Details</h3>
        <p class="text-body-2 text-grey mb-6">Tell us about your paper and upload the document.</p>
        <v-form ref="formRef2">
          <v-text-field v-model="form.abstractTitle" clearable placeholder="Enter the title of your paper"
            variant="outlined" density="comfortable" :rules="[rules.required]">
            <template v-slot:label>Title <span class="text-orange">*</span></template>
          </v-text-field>

          <v-select v-model="form.category" :items="categories" variant="outlined" density="comfortable"
            :rules="[rules.required]">
            <template v-slot:label>Select Category <span class="text-orange">*</span></template>
          </v-select>

          <v-select v-model="form.presentationType" :items="presentationTypes" variant="outlined"
            density="comfortable" :rules="[rules.required]">
            <template v-slot:label>Preference of presentation type <span class="text-orange">*</span></template>
          </v-select>

          <v-card class="mb-4 pa-4" color="amber-lighten-5" variant="flat" rounded="lg">
            <div class="d-flex align-center ga-1 mb-2">
              <v-icon size="14" color="amber-darken-3">mdi-upload</v-icon>
              <span class="text-body-2 font-weight-medium" style="color: #795548;">
                Paper File(s) Required <span class="text-orange">*</span>
              </span>
            </div>
            <p class="text-caption mb-2" style="color: #795548;">
              Attach one or more files in <b>.doc</b>, <b>.docx</b> (Word) or <b>.pdf</b> format — max <b>20 MB</b> per file.
            </p>
            <v-file-input v-model="paperFiles" accept=".doc,.docx,application/pdf" multiple chips
              variant="outlined" density="compact" show-size hide-details="auto"
              label="Choose file(s)" prepend-icon="mdi-paperclip" :rules="paperFilesRule" />
            <ul v-if="paperFiles.length" class="mt-3 file-list">
              <li v-for="(f, i) in paperFiles" :key="i" class="text-caption d-flex align-center ga-1">
                <v-icon size="12" color="green">mdi-check-circle</v-icon>
                <span class="text-green">{{ f.name }}</span>
                <span class="text-grey">({{ formatBytes(f.size) }})</span>
              </li>
            </ul>
          </v-card>

          <!-- Student Certificate (only for Student Section) -->
          <v-card v-if="isStudentCategory" class="mb-4 pa-4" color="blue-lighten-5" variant="flat" rounded="lg">
            <div class="d-flex align-center ga-1 mb-2">
              <v-icon size="14" color="blue-darken-3">mdi-school</v-icon>
              <span class="text-body-2 font-weight-medium" style="color: #1c5a6d;">
                Student Certificate Required <span class="text-orange">*</span>
              </span>
            </div>
            <p class="text-caption mb-2" style="color: #1c5a6d;">
              Upload a valid student ID or enrollment certificate (PDF, JPG or PNG — max 20 MB).
            </p>
            <v-file-input v-model="studentCertificate"
              accept="image/jpeg,image/png,image/heic,application/pdf"
              variant="outlined" density="compact" show-size hide-details="auto"
              label="Choose certificate" prepend-icon="mdi-school" :rules="certificateRule" />
            <p v-if="studentCertificate" class="mt-2 text-caption text-green d-flex align-center ga-1">
              <v-icon size="12" color="green">mdi-check-circle</v-icon>
              {{ studentCertificate.name }} ({{ formatBytes(studentCertificate.size) }})
            </p>
          </v-card>

          <div class="d-flex ga-3">
            <v-btn variant="outlined" size="large" @click="goToStep(1)">
              <v-icon start>mdi-arrow-left</v-icon> Back
            </v-btn>
            <v-btn color="primary" size="large" class="flex-grow-1" :disabled="!canProceedStep2" @click="nextStep(3)">
              Review & Submit <v-icon end>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </v-form>
      </small-card>

      <!-- Step 3: Review & Submit -->
      <small-card v-if="step === 3 && !success" class="wizard-step mb-10">
        <h3 class="text-h6 font-weight-bold mb-1 d-flex align-center ga-2">
          <v-icon color="primary">mdi-file-check</v-icon> Submission Summary
        </h3>
        <p class="text-body-2 text-grey mb-4">Review your submission and confirm consent before submitting.</p>

        <v-row class="text-body-2 mb-2">
          <v-col cols="12">
            <span class="text-grey">Title:</span>
            <span class="ml-2 font-weight-medium">{{ form.abstractTitle }}</span>
          </v-col>
          <v-col cols="12" sm="6">
            <span class="text-grey">Author:</span>
            <span class="ml-2 font-weight-medium">{{ form.firstName }} {{ form.lastName }}</span>
          </v-col>
          <v-col cols="12" sm="6">
            <span class="text-grey">Email:</span>
            <span class="ml-2 font-weight-medium">{{ form.email }}</span>
          </v-col>
          <v-col cols="12" sm="6">
            <span class="text-grey">Phone:</span>
            <span class="ml-2 font-weight-medium">{{ form.phone }}</span>
          </v-col>
          <v-col cols="12" sm="6">
            <span class="text-grey">Country:</span>
            <span class="ml-2 font-weight-medium">{{ form.country }}</span>
          </v-col>
          <v-col cols="12">
            <span class="text-grey">Institution:</span>
            <span class="ml-2 font-weight-medium">{{ form.institution }}</span>
          </v-col>
          <v-col cols="12">
            <span class="text-grey">Category:</span>
            <span class="ml-2 font-weight-medium">{{ form.category }}</span>
          </v-col>
          <v-col cols="12" sm="6">
            <span class="text-grey">Presentation:</span>
            <span class="ml-2 font-weight-medium">{{ form.presentationType }}</span>
          </v-col>
          <v-col cols="12">
            <span class="text-grey">Paper File(s):</span>
            <ul class="ml-4 mt-1">
              <li v-for="(f, i) in paperFiles" :key="i" class="font-weight-medium text-green d-flex align-center ga-1">
                <v-icon size="14" color="green">mdi-paperclip</v-icon>
                {{ f.name }}
                <span class="text-grey text-caption ml-1">({{ formatBytes(f.size) }})</span>
              </li>
            </ul>
          </v-col>
          <v-col v-if="studentCertificate" cols="12">
            <span class="text-grey">Student Certificate:</span>
            <span class="ml-2 font-weight-medium text-green">
              <v-icon size="14" color="green">mdi-school</v-icon>
              {{ studentCertificate.name }}
              <span class="text-grey text-caption ml-1">({{ formatBytes(studentCertificate.size) }})</span>
            </span>
          </v-col>
        </v-row>

        <v-divider class="my-4" />

        <v-form ref="formRef3">
          <p class="mb-2 text-md-body-1">
            Statement of Consent for Publication: <span class="text-orange">*</span>
          </p>
          <v-radio-group v-model="form.consent" :rules="[rules.required]">
            <v-radio value="agree">
              <template v-slot:label>
                I agree to the publication of my short paper in the&nbsp;<i>Macedonian Pharmaceutical Bulletin</i>
              </template>
            </v-radio>
            <v-radio value="disagree">
              <template v-slot:label>
                I do not agree to the publication of my short paper in the&nbsp;<i>Macedonian Pharmaceutical
                  Bulletin</i>
              </template>
            </v-radio>
          </v-radio-group>
        </v-form>

        <div class="d-flex ga-3 mt-4">
          <v-btn variant="outlined" size="large" @click="goToStep(2)">
            <v-icon start>mdi-arrow-left</v-icon> Back
          </v-btn>
          <v-btn color="orange-darken-2" size="large" class="flex-grow-1 text-white" :loading="loading"
            :disabled="loading" @click="handleSubmit">
            <v-icon start>mdi-send</v-icon> Submit Paper
          </v-btn>
        </div>

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
            <p class="mt-2 text-body-2 text-green-darken-1">
              Our Scientific Committee will review your paper and contact you on the e-mail you provided.
            </p>
            <v-btn color="primary" class="mt-4" size="large" @click="resetForm">
              <v-icon start>mdi-plus</v-icon> Submit another paper
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

.submission-links-list {
  list-style-type: none;
  padding-left: 0;
  margin-top: 10px;
}

.submission-links-list li {
  margin-bottom: 8px;
  font-weight: bold;
}

.submission-link {
  color: #d37315;
  text-decoration: none;
  border-bottom: 1px dashed #d37315;
}

.submission-link:hover {
  text-decoration: underline;
}

.info-list {
  background: transparent !important;
  text-align: left;
}

.text-orange {
  color: #d37315 !important;
  font-weight: bold;
}

.text-primary {
  color: #1c5a6d !important;
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

.wizard-step {
  animation: fadeInUp 0.3s ease-out;
}

.file-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.file-list li {
  margin-bottom: 4px;
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
}
</style>
