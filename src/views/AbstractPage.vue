<script setup>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import SmallCard from "@/components/SmallCard.vue";
</script>

<template>
  <base-container>
    <!-- Page Title -->
    <v-card rounded="xl" class="mb-5 pa-2 text-center title-card">
      <v-card-text class="text-h5 font-weight-bold">ON-LINE SHORT PAPER SUBMISSION</v-card-text>
    </v-card>

    <!-- Introduction and Submission Overview -->
    <base-card>
      <base-paragraph>
        The Scientific committee of <b>8th Congress of Pharmacy in North Macedonia</b> with international participation
        decided that submitted scientific works should be in form of short communications (papers) as they will be
        published in a special issue of Macedonian Pharmaceutical Bulletin, vol. 72 (Suppl 1), 2026. Short papers will
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
        <li><a href="#" class="submission-link">Short paper submission section</a></li>
        <li><a href="#" class="submission-link">TEMPLATE submission document</a></li>
        <li><a href="#" class="submission-link">How to Prepare a Short paper – Examples</a></li>
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
          <v-list-item-subtitle class="text-red">May 31st, 2026</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-title><b>Acceptance of the short paper</b></v-list-item-title>
          <v-list-item-subtitle class="text-red">July 1st, 2026</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-title><b>Presentation Dates</b></v-list-item-title>
          <v-list-item-subtitle>October 2-4, 2026 (Oral or Poster form)</v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <base-paragraph class="pa-2 text-center" style="font-size: 0.9rem;">
        <i>*Publication is dependent upon payment of registration fee.</i>
      </base-paragraph>
    </small-card>

    <!-- Student Session -->
    <v-card rounded="xl" class="mt-10 mb-5 pa-1 text-center title-card-secondary">
      <v-card-text class="text-h6 font-weight-bold">Student Session</v-card-text>
    </v-card>
    <base-card>
      <base-paragraph>
        Students of five-years integrated studies of Pharmacy are invited to present results of their graduate thesis or
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
            The time limit for oral contributions will be exactly <b>20 minutes</b>, including 5 minutes discussion. The
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
            <b>A4 landscape format (4:3)</b>.
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
        First of all, authors should submit their short paper by <b>May 31st, 2026</b> (<a href="#"
          class="submission-link">Call for short papers</a>). During the short paper submission process, please select
        the option <b>Poster type of presentation</b>. Short papers will be published in a special issue of the
        Macedonian Pharmaceutical Bulletin, vol. 72 (Suppl 1), 2026.
      </base-paragraph>
      <base-paragraph>
        E-Posters should be in form of a Power point slide, <b>A4 landscape format (4:3)</b> and be sent on mail, by
        <b>July 15th, 2026</b> at the latest.
      </base-paragraph>
      <base-paragraph class="mt-4 text-center">
        <b>Publication of short papers and presentation of E-Posters is dependent upon payment of registration fee.</b>
      </base-paragraph>
    </base-card>
  </base-container>
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

.text-red {
  color: #e53935 !important;
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
