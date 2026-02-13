<template>
  <base-container>
    <small-card>
      <base-paragraph class="hero-title text-center">
        <b>
          DISTINGUISHED GUESTS
        </b>
      </base-paragraph>
    </small-card>
    <base-card class="mt-5">
      <base-paragraph>
        On behalf of the Scientific and Organizing Committees, it is our great pleasure to invite scientists,
        researchers, pharmacists and other healthcare and industry professionals to participate in the <b>8th Congress
          of Pharmacy in North Macedonia</b> with international participation, which will be held from October 1–4, in
        Ohrid, jointly organized by the Macedonian Pharmaceutical Association and the Faculty of Pharmacy, Ss. Cyril and
        Methodius University in Skopje.
      </base-paragraph>
      <base-paragraph>
        We are confident that the scientific program, comprising plenary lectures, invited talks, oral and poster
        presentations, will provide a dynamic platform for the exchange of knowledge, ideas and experience. The Congress
        will be focus on current challenges, innovative approaches and future directions in pharmaceutical sciences and
        practice. The Scientific program will highlight the role of cutting-edge research, digital transformation,
        translation of scientific advances into improved therapeutic solutions and interdisciplinary collaboration in
        improving medicinal products and most importantly, patient care and public health.
      </base-paragraph>
      <base-paragraph>
        Special emphasis will be placed on fostering dialogue between academia, healthcare practice, regulatory bodies
        and the pharmaceutical industry.
      </base-paragraph>
      <base-paragraph>
        The Congress will offer an excellent opportunity for young scientists and early-career researchers to present
        their work alongside established experts, encouraging the development of novel ideas, translational research and
        practical solutions for modern pharmacy.
      </base-paragraph>
      <base-paragraph>
        A presentation of pharmaceutical companies and related stakeholders across the medicine supply and development
        chain will be an integral part of the Congress, providing additional opportunities for networking and
        professional exchange.
      </base-paragraph>
      <base-paragraph>
        We look forward to welcoming you to Ohrid, the beautiful Macedonian pearl on the shores of Lake Ohrid and to
        sharing an inspiring and forward-looking congress experience.
      </base-paragraph>
      <v-row>
        <v-col cols="6">
          <div class="d-flex flex-column align-center">
            <base-paragraph class="text-center">
              <b>Chair of Scientific Committee </b> <br />
            </base-paragraph>
            <v-img :width="200" :src="oneSignature"></v-img>
            <base-paragraph class="text-center">
              Prof. Marija Glavas Dodov
            </base-paragraph>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="d-flex flex-column align-center">
            <base-paragraph class="text-center">
              <b>Chair of Organizing Committee </b> <br />
            </base-paragraph>
            <v-img :width="200" :src="twoSignature"></v-img>
            <base-paragraph class="text-center">
              Prof. Rumenka Petkovska
            </base-paragraph>
          </div>
        </v-col>
      </v-row>
    </base-card>
    <small-card class="mt-5">
      <base-paragraph class="hero-title text-center">
        <b>
          CONGRESS HOSTS & SPONSORS
        </b>
      </base-paragraph>
    </small-card>
    <base-card class="mt-5 text-center justify-center">
      <base-paragraph class="text-center">
        <b> Macedonian Pharmaceutical Association </b> <br />
      </base-paragraph>
      <v-divider thickness="3" color="primary" gradient></v-divider>
      <base-paragraph class="text-center">
        <b> Faculty of Pharmacy </b> <br />
        <b> Ss. Cyril and Methodius University in Skopje </b> <br />
      </base-paragraph>
      <base-paragraph class="text-center">
        <b>PLATINUM SPONSOR</b>
      </base-paragraph>
      <v-img :src="platinumSponsor" width="40%" class="d-inline-block"></v-img>
    </base-card>
  </base-container>
</template>

<script setup>
import BaseCard from "@/components/BaseCard.vue";
import BaseContainer from "@/components/BaseContainer.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import SmallCard from "@/components/SmallCard.vue";
import oneSignature from "@/assets/potpis1.png";
import twoSignature from "@/assets/potpis2.png";
import platinumSponsor from "@/assets/alakloid.png";
</script>

<style scoped>
.hero-title {
  font-size: 1.8rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 0.7rem;
  }

  .list-title {
    font-size: 0.7rem !important;
  }
}

.org-items {
  list-style-type: none;
  text-align: left;
}

.title-card {
  background-color: #125280;
  color: white;
}

.list-title {
  font-size: 1.2rem;
}
</style>
