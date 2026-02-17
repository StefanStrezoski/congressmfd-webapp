<script setup>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import SmallCard from "@/components/SmallCard.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import BannerImage from "@/components/BannerImage.vue";
</script>

<template>
  <div>
    <banner-image />
    <base-container>

      <!-- Scientific Program -->
      <small-card>
        <base-paragraph class="hero-title text-center">
          <b>Scientific Program</b>
        </base-paragraph>
      </small-card>
      <base-card class="mt-5">
        <base-paragraph>
          On October 1st, plenary lecturers will give introductory overviews on topics of the Congress. In addition,
          parallel sessions beginning from Friday to Sunday, October 2-4, will provide an exceptional platform for
          enrichment of knowledge and exchange of experience among participants from academia, industry and
          practitioners.
        </base-paragraph>
      </base-card>

      <!-- Important Dates -->
      <small-card class="mt-10">
        <base-paragraph class="hero-title text-center">
          <b>Important dates</b>
        </base-paragraph>
      </small-card>
      <base-card class="mt-5">
        <v-list density="compact" class="date-list">
          <v-list-item>
            <v-list-item-title class="hall-info"><b>March 1st, 2026</b></v-list-item-title>
            <v-list-item-subtitle>Second Announcement, Call for short papers, Early Registration</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="hall-info"><b>May 1st, 2026</b></v-list-item-title>
            <v-list-item-subtitle>Closing of Early Registration</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="hall-info"><b>May 31st, 2026</b></v-list-item-title>
            <v-list-item-subtitle>Closing of Registration and Short paper Submission Deadline</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="hall-info"><b>July 1st, 2026</b></v-list-item-title>
            <v-list-item-subtitle>Short paper Acceptance Notification</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="hall-info"><b>October 1-4, 2026</b></v-list-item-title>
            <v-list-item-subtitle>8th Congress of Pharmacy in North Macedonia with international
              participation</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </base-card>

      <!-- Congress Sessions -->
      <small-card class="mt-10">
        <base-paragraph class="hero-title text-center">
          <b>Congress Sessions</b>
        </base-paragraph>
      </small-card>
      <base-card class="mt-5">
        <v-row>
          <v-col cols="12" md="6">
            <ul class="session-list">
              <li>Plenary Session</li>
              <li>Pharmaceutical Analysis / Quality Assurance / Pharmaceutical Legislation</li>
              <li>Social Pharmacy / Pharmaceutical Law</li>
              <li>Pharmacoeconomics / Drug Information</li>
              <li>Clinical Biochemistry / Toxicology / Food and Nutrition</li>
            </ul>
          </v-col>
          <v-col cols="12" md="6">
            <ul class="session-list">
              <li>Pharmaceutical Technology and Biotechnology / Biopharmaceutics / Cosmetology</li>
              <li>Pharmaceutical Chemistry / Biomolecular Sciences</li>
              <li>Community and Clinical Pharmacy</li>
              <li>Natural Products and Phytotherapy</li>
              <li>Student Section</li>
            </ul>
          </v-col>
        </v-row>
      </base-card>

      <!-- Guiding Keywords -->
      <base-card class="mt-5">
        <base-paragraph class="text-center">
          <b class="text-h5 font-weight-bold">Guiding Keywords for the Congress</b>
        </base-paragraph>
        <v-row class="mt-2">
          <v-col cols="12" md="4">
            <ul class="session-list">
              <li>Pharmaceutical Education and Career Development</li>
              <li>Pharmaceutical Practice, Pharmaceutical Care and Hospital Pharmacy</li>
              <li>Clinical Pharmacy</li>
              <li>Interprofessional Collaboration in Healthcare</li>
              <li>Rational Use of Medicines</li>
              <li>Medication Therapy Management (MTM)</li>
              <li>Molecular, Biomolecular, and Clinical Pharmacology</li>
              <li>Novel Drug Targets and Biomarkers</li>
              <li>Rational Drug Design, Synthesis, and Development</li>
              <li>In silico Design and Computational Modeling in Drug Development</li>
              <li>Biopharmaceutics and Pharmacokinetics</li>
              <li>Toxicology</li>
              <li>Drug Delivery Systems</li>
              <li>Micro/Nanotechnology</li>
              <li>Personalized Medicine</li>
              <li>Advanced Therapies: Gene, Cell, and Tissue Therapy</li>
            </ul>
          </v-col>
          <v-col cols="12" md="4">
            <ul class="session-list">
              <li>Pharmaceutical Biotechnology</li>
              <li>Industrial Pharmacy</li>
              <li>Quality by Design (QbD) and Risk Management</li>
              <li>Pharmaceutical Analysis</li>
              <li>Digital Health (eHealth)</li>
              <li>Artificial Intelligence and Machine Learning in Pharmacy</li>
              <li>Big Data, Real-World Data, Real-World Evidence</li>
              <li>Pharmacoeconomics</li>
              <li>Health Technology Assessment</li>
              <li>Therapeutic Outcomes and Outcomes Research</li>
              <li>Pharmacovigilance</li>
              <li>Pharmacoepidemiology</li>
              <li>Pharmaceutical Legislation</li>
              <li>Pharmaceutical Law and Intellectual Property</li>
              <li>Falsified Pharmaceutical Products</li>
              <li>Regulatory Aspects of Advanced Therapies and Nanomedicines</li>
            </ul>
          </v-col>
          <v-col cols="12" md="4">
            <ul class="session-list">
              <li>Public Health</li>
              <li>Clinical Biochemistry</li>
              <li>Food, Nutrition, and Health</li>
              <li>Diet therapy</li>
              <li>Medical Devices</li>
              <li>Sustainable and Green Pharmacy</li>
              <li>Ethics in Pharmaceutical and Clinical Research</li>
              <li>Pharmacognosy and Natural Medicinal Raw Materials</li>
              <li>Biologically Active Compounds of Natural Origin</li>
              <li>Phytochemical Characterization and Standardization</li>
              <li>Quality, Safety and Efficacy of Herbal Medicinal Products</li>
              <li>New Medicine Service</li>
              <li>Bioanalytical Methods</li>
              <li>Drug metabolism</li>
            </ul>
          </v-col>
        </v-row>
      </base-card>

      <!-- Tentative Program -->
      <small-card class="mt-10">
        <base-paragraph class="hero-title text-center">
          <b>TENTATIVE PROGRAM</b>
        </base-paragraph>
      </small-card>

      <div class="mt-5">
        <!-- Thursday -->
        <base-card class="mb-5">
          <h3 class="program-date mb-2">Thursday, October 1st, 2026</h3>
          <v-list density="compact" class="program-list">
            <v-list-item>
              <div class="d-flex">
                <span class="time-col">10:00 – 17:00</span>
                <span>Registration</span>
              </div>
            </v-list-item>
          </v-list>
          <div class="hall-info mt-2"><b>Hall Biljana (Hall 1)</b></div>
          <v-list density="compact" class="program-list">
            <v-list-item>
              <div class="d-flex">
                <span class="time-col">17:00 – 20:00</span>
                <span>
                  Opening ceremony and welcome address<br />
                  Plenary session
                </span>
              </div>
            </v-list-item>
            <v-list-item>
              <div class="d-flex">
                <span class="time-col">21:00</span>
                <span>Welcome Reception</span>
              </div>
            </v-list-item>
          </v-list>
        </base-card>

        <!-- Friday -->
        <base-card class="mb-5">
          <h3 class="program-date mb-2">Friday, October 2nd, 2026</h3>
          <v-row>
            <v-col cols="12" md="6">
              <div class="hall-info mb-1"><b>Hall Car Samoil (Hall 2)</b></div>
              <v-list density="compact" class="program-list">
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">9:30 – 12:30</span>
                    <span>Session: Pharmaceutical Technology and Biotechnology / Biopharmaceutics / Cosmetology</span>
                  </div>
                </v-list-item>
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">16:00 – 18:00</span>
                    <span>Workshops and interactive sessions</span>
                  </div>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="6">
              <div class="hall-info mb-1"><b>Hall Ohrid (Hall 3)</b></div>
              <v-list density="compact" class="program-list">
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">9:30 – 12:30</span>
                    <span>Session: Pharmaceutical Chemistry / Biomolecular Sciences</span>
                  </div>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="6">
              <div class="hall-info mb-1"><b>Hall Kaneo (Hall 4)</b></div>
              <v-list density="compact" class="program-list">
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">9:30 – 12:30</span>
                    <span>Session: Social Pharmacy / Pharmaceutical Law</span>
                  </div>
                </v-list-item>
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">16:00 – 18:00</span>
                    <span>Workshops and interactive sessions</span>
                  </div>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="6">
              <div class="hall-info mb-1"><b>Business Hall (Hall 4)</b></div>
              <v-list density="compact" class="program-list">
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">12:30 – 14:30</span>
                    <span>Poster sessions/Exhibition</span>
                  </div>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </base-card>

        <!-- Saturday -->
        <base-card class="mb-5">
          <h3 class="program-date mb-2">Saturday, October 3rd, 2026</h3>
          <v-row>
            <v-col cols="12" md="6">
              <div class="hall-info mb-1"><b>Hall Car Samoil (Hall 2)</b></div>
              <v-list density="compact" class="program-list">
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">9:30 – 12:30</span>
                    <span>Session: Pharmaceutical Analysis / Quality Assurance / Pharmaceutical Legislation</span>
                  </div>
                </v-list-item>
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">16:00 – 18:00</span>
                    <span>Student Session</span>
                  </div>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="6">
              <div class="hall-info mb-1"><b>Hall Ohrid (Hall 3)</b></div>
              <v-list density="compact" class="program-list">
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">9:30 – 12:30</span>
                    <span>Session: Community and Clinical Pharmacy</span>
                  </div>
                </v-list-item>
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">16:00 – 18:00</span>
                    <span>Workshops and interactive sessions</span>
                  </div>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="6">
              <div class="hall-info mb-1"><b>Hall Kaneo (Hall 4)</b></div>
              <v-list density="compact" class="program-list">
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">9:30 – 12:30</span>
                    <span>Session: Clinical Biochemistry / Toxicology / Food and Nutrition</span>
                  </div>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="6">
              <div class="hall-info mb-1"><b>Business Hall (Hall 4)</b></div>
              <v-list density="compact" class="program-list">
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">12:30 – 14:30</span>
                    <span>Poster sessions/Exhibition</span>
                  </div>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </base-card>

        <!-- Sunday -->
        <base-card class="mb-5">
          <h3 class="program-date mb-2">Sunday, October 4th, 2026</h3>
          <v-row>
            <v-col cols="12" md="6">
              <div class="hall-info mb-1"><b>Hall Car Samoil (Hall 2)</b></div>
              <v-list density="compact" class="program-list">
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">9:30 – 12:30</span>
                    <span>Session: Natural Products and Phytotherapy</span>
                  </div>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="6">
              <div class="hall-info mb-1"><b>Hall Ohrid (Hall 3)</b></div>
              <v-list density="compact" class="program-list">
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">9:30 – 12:30</span>
                    <span>Session: Pharmacoeconomics / Drug Information</span>
                  </div>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="6">
              <div class="hall-info mb-1"><b>Business Hall (Hall 4)</b></div>
              <v-list density="compact" class="program-list">
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">12:30 – 14:30</span>
                    <span>Poster sessions/Exhibition</span>
                  </div>
                </v-list-item>
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">16:00</span>
                    <span>Closing ceremony</span>
                  </div>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </base-card>
      </div>
    </base-container>
  </div>
</template>

<style scoped>
.hero-title {
  font-size: 1.8rem;
}

.program-date {
  color: #1c5a6d;
  border-bottom: 2px solid #1c5a6d;
  padding-bottom: 5px;
  text-align: left;
}

.hall-info {
  color: #d37315;
  font-size: 1.1rem;
  text-align: left;
}

.time-col {
  min-width: 120px;
  font-weight: bold;
  color: #125280;
}

.date-list,
.program-list {
  background: transparent !important;
  text-align: left;
}

.session-list {
  list-style-type: disc;
  padding-left: 20px;
  color: #1c5a6d;
  text-align: left;
}

.session-list li {
  margin-bottom: 8px;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 1.2rem;
  }

  .session-list li {
    font-size: 0.9rem;
  }
}
</style>
