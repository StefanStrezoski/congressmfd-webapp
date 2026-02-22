<script setup>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import SmallCard from "@/components/SmallCard.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import platinumSponsor from "@/assets/alakloid.png";
import BannerImage from "@/components/BannerImage.vue";
</script>

<template>
  <div>
    <banner-image />
    <base-container>
      <v-card rounded="xl" class="mb-5 pa-2 mt-5 text-center title-card">
        <v-card-text class="text-h5 font-weight-bold uppercase">Sponsors</v-card-text>
      </v-card>
      <base-card class="mt-5">
        <base-paragraph class="text-center">
          <b class="text-h6 font-weight-bold">PLATINUM SPONSOR</b>
        </base-paragraph>
        <v-img :src="platinumSponsor" width="30%" class="d-inline-block"></v-img>
      </base-card>
      <!-- Page Title -->
      <v-card rounded="xl" class="mb-5 pa-2 mt-5 text-center title-card">
        <v-card-text class="text-h5 font-weight-bold uppercase">Exhibition & Presentation</v-card-text>
      </v-card>

      <!-- General Information -->
      <base-card>
        <h3 class="section-header mb-3">Presentation of pharmaceutical companies and related stakeholders</h3>
        <base-paragraph>
          The <b>8th Congress of Pharmacy in North Macedonia with international participation</b> is a respectable
          gathering of scientists, researchers and practitioners in the field of pharmacy and other related fields. It
          offers an excellent opportunity for networking and professional exchange, providing a unique platform for the
          sharing of scientific, professional and business insights among leading experts, companies, and stakeholders.
        </base-paragraph>
        <base-paragraph>
          The Congress serves as a unique platform to raise the scientific, professional and public awareness of the
          value
          of pharmaceutical products and services in the health sector.
        </base-paragraph>

        <base-paragraph class="mt-6 text-center text-primary font-weight-bold">
          All information on how to be an exhibitor and to present your pharmaceutical company can be obtained from:
        </base-paragraph>
      </base-card>

      <!-- Contact Information Blocks -->
      <v-row class="mt-5">
        <v-col cols="12" md="6">
          <small-card class="h-100">
            <h3 class="contact-header mb-3">Global Net Adv</h3>
            <p class="subtitle mb-4">Professional Congress Organizer</p>
            <div class="contact-info text-left">
              <p><b>Marjan Dimeski</b></p>
              <p class="caption">General Manager</p>
              <v-divider class="my-2"></v-divider>
              <p><v-icon size="small" class="mr-2">mdi-phone</v-icon> +389(0) 71 317 377</p>
              <p><v-icon size="small" class="mr-2">mdi-email</v-icon> globalnetadv@globalnetadv.mk</p>
              <p><v-icon size="small" class="mr-2">mdi-email</v-icon> globalneta@gmail.com</p>
            </div>
          </small-card>
        </v-col>
        <v-col cols="12" md="6">
          <small-card class="h-100">
            <h3 class="contact-header mb-3">Macedonian Pharmaceutical Association</h3>
            <p class="subtitle mb-4">Macedonia Pharmaceutical Association (MPA)</p>
            <div class="contact-info text-left">
              <p><b>Ivana Ceshmedjievska</b></p>
              <p class="caption">Secretary</p>
              <v-divider class="my-2"></v-divider>
              <p><v-icon size="small" class="mr-2">mdi-phone</v-icon> +389(0) 70 302 392</p>
              <p><v-icon size="small" class="mr-2">mdi-email</v-icon> mfd.mpa.mk@gmail.com</p>
              <p><v-icon size="small" class="mr-2">mdi-email</v-icon> mfd_mpa@yahoo.com</p>
            </div>
          </small-card>
        </v-col>
      </v-row>


    </base-container>
  </div>
</template>

<style scoped>
.title-card {
  background-color: #1c5a6d;
  color: white;
}

.section-header {
  color: #1c5a6d;
  border-bottom: 2px solid #1c5a6d;
  padding-bottom: 5px;
  font-size: 1.4rem;
  text-align: left;
}

.contact-header {
  color: #1c5a6d;
  font-size: 1.3rem;
  text-align: left;
}

.subtitle {
  color: #d37315;
  font-weight: bold;
  font-size: 0.9rem;
  text-align: left;
}

.contact-info p {
  margin-bottom: 5px;
  font-size: 1rem;
  color: #125280;
}

.caption {
  font-style: italic;
  font-size: 0.85rem !important;
  color: #6ba2a3 !important;
}

.text-primary {
  color: #1c5a6d !important;
}

@media (max-width: 768px) {
  .text-h5 {
    font-size: 1.25rem !important;
  }

  .section-header {
    font-size: 1.1rem;
  }

  .contact-header {
    font-size: 1.1rem;
  }
}
</style>
