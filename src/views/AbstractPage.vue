<script setup>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import BannerImage from "@/components/BannerImage.vue";
import { ref } from "vue";
import { supabase } from "@/supabase/supabase.js";

const formRef = ref(null);
const loading = ref(false);
const message = ref('');
const success = ref(false);

const formData = ref({
  abstractTitle: '',
  firstName: '',
  lastName: '',
  institution: '',
  country: '',
  email: '',
  phone: '',
  category: null,
  presentationType: null,
  abstractFile: null,
  consent: null
});

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

const rules = {
  required: value => !!value || 'Required.',
  email: value => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || 'Invalid e-mail.';
  },
};

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
      message.value = 'There was an error filling out the form!';
      loading.value = false;
      return;
    }

    const { error: dbError } = await supabase.from('abstract_submissions_congressmfd').insert({
      name: `${formData.value.firstName} ${formData.value.lastName}`,
      email: formData.value.email,
      institution: formData.value.institution,
      country: formData.value.country,
      phone_number: formData.value.phone,
      category: formData.value.category,
      presentation_type: formData.value.presentationType,
      abstract_title: formData.value.abstractTitle,
      consent: formData.value.consent
    });

    if (dbError) {
      message.value = 'Failed to save submission: ' + dbError.message;
      loading.value = false;
      return;
    }

    message.value = 'Your paper has been successfully submitted!';
    success.value = true;
    loading.value = false;

    formData.value = {
      abstractTitle: '',
      firstName: '',
      lastName: '',
      institution: '',
      country: '',
      email: '',
      phone: '',
      category: null,
      presentationType: null,
      consent: null
    };

    formRef.value?.resetValidation();
    formRef.value?.reset();
  } catch (error) {
    message.value = 'An unexpected error occurred!';
    loading.value = false;
    console.error(error);
  }
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

      <v-card rounded="xl" class="mt-10 mb-5 pa-1 text-center title-card-secondary">
        <v-card-text class="text-h6 font-weight-bold">Short paper submission</v-card-text>
      </v-card>

      <base-card class="mb-10">
        <v-form ref="formRef" @submit.prevent="handleSubmit">
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="formData.abstractTitle" clearable placeholder="Enter the title of your paper"
                variant="outlined" density="comfortable" :rules="[rules.required]" required>
                <template v-slot:label>
                  Title <span class="text-orange">*</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="formData.firstName" variant="outlined" density="comfortable" clearable
                :rules="[rules.required]" required>
                <template v-slot:label>
                  First Name <span class="text-orange">*</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="formData.lastName" variant="outlined" density="comfortable" clearable
                :rules="[rules.required]" required>
                <template v-slot:label>
                  Last Name <span class="text-orange">*</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field v-model="formData.institution" clearable placeholder="Enter your affiliated institution"
                variant="outlined" density="comfortable" :rules="[rules.required]" required>
                <template v-slot:label>
                  Institution <span class="text-orange">*</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="formData.country" variant="outlined" density="comfortable" clearable
                :rules="[rules.required]" required>
                <template v-slot:label>
                  Country <span class="text-orange">*</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="formData.email" type="email" variant="outlined" clearable density="comfortable"
                :rules="[rules.required, rules.email]" required>
                <template v-slot:label>
                  Author's E-mail <span class="text-orange">*</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="formData.phone" variant="outlined" density="comfortable" clearable
                :rules="[rules.required]" required>
                <template v-slot:label>
                  Phone number <span class="text-orange">*</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-select v-model="formData.category" :items="categories" variant="outlined" density="comfortable"
                :rules="[rules.required]" required>
                <template v-slot:label>
                  Select Category <span class="text-orange">*</span>
                </template>
              </v-select>
            </v-col>

            <v-col cols="12">
              <v-select v-model="formData.presentationType" :items="presentationTypes" variant="outlined"
                density="comfortable" :rules="[rules.required]" required>
                <template v-slot:label>
                  Preference of presentation type <span class="text-orange">*</span>
                </template>
              </v-select>
            </v-col>

            <v-col cols="12">
              <p class="mb-4 text-md-body-1">
                Attach your PAPER in .doc or docx (Word) format.
                <a href="mailto:8CPM.secretary@ff.ukim.edu.mk" class="submission-link">LINK</a>
              </p>
              <p class="mb-2 text-md-body-1">Statement of Consent for Publication:<span class="text-orange">*</span></p>
              <v-radio-group v-model="formData.consent" :rules="[rules.required]" required>
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
            </v-col>

            <v-col cols="12" class="text-center">
              <v-btn type="submit" color="primary" size="large" class="px-10" :loading="loading" :disabled="loading">
                Submit Paper
              </v-btn>
            </v-col>
          </v-row>
        </v-form>

        <v-alert v-if="message" :type="success ? 'success' : 'error'" variant="tonal" class="mt-6" closable>
          {{ message }}
        </v-alert>
      </base-card>
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

@media (max-width: 768px) {
  .text-h5 {
    font-size: 1.25rem !important;
  }

  .text-h6 {
    font-size: 1.1rem !important;
  }
}
</style>
