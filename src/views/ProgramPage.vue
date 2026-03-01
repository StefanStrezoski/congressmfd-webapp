<script setup>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import homeimg from "@/assets/dates.png";
</script>

<template>
  <div>
    <v-img :src="homeimg" cover alt="Banner Image" width="100%" />
    <base-container>

      <!-- Scientific Program -->
      <v-card rounded="xl" class="mt-10 mb-5 pa-1 text-center hero-title">
        <v-card-text class="text-h6 font-weight-bold">Scientific Program</v-card-text>
      </v-card>
      <base-card class="mt-5">
        <base-paragraph>
          On October 1st, plenary lecturers will give introductory overviews on topics of the Congress. In addition,
          parallel sessions beginning from Friday to Sunday, October 2-4, will provide an exceptional platform for
          enrichment of knowledge and exchange of experience among participants from academia, industry and
          practitioners.
        </base-paragraph>
      </base-card>

      <!-- Congress Sessions -->
      <v-card rounded="xl" class="mt-10 mb-5 pa-1 text-center hero-title">
        <v-card-text class="text-h6 font-weight-bold">Congress Sessions</v-card-text>
      </v-card>
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
      <v-card rounded="xl" class="mt-10 mb-5 pa-1 text-center hero-title">
        <v-card-text class="text-h6 font-weight-bold">Guiding Keywords for the Congress</v-card-text>
      </v-card>
      <base-card class="mt-5">
        <v-row class="mt-2">
          <v-col cols="12" md="4">
            <ul class="session-list reduce-text">
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
            </ul>
          </v-col>
          <v-col cols="12" md="4">
            <ul class="session-list reduce-text">
              <li>Personalized Medicine</li>
              <li>Advanced Therapies: Gene, Cell, and Tissue Therapy</li>
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
            </ul>
          </v-col>
          <v-col cols="12" md="4">
            <ul class="session-list reduce-text">
              <li>Regulatory Aspects of Advanced Therapies and Nanomedicines</li>
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
      <v-card rounded="xl" class="mt-10 mb-5 pa-1 text-center hero-title">
        <v-card-text class="text-h6 font-weight-bold">TENTATIVE PROGRAM</v-card-text>
      </v-card>

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
              <div class="hall-info mb-1"><b>Business Hall</b></div>
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
              <div class="hall-info mb-1"><b>Business Hall</b></div>
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
              <div class="hall-info mb-1"><b>Business Hall</b></div>
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

      <!-- Invited Lecturers -->
      <v-card rounded="xl" class="mt-10 mb-5 pa-1 text-center hero-title">
        <v-card-text class="text-h6 font-weight-bold">INVITED LECTURERS</v-card-text>
      </v-card>

      <base-card class="mt-5 mb-10">
        <h3 class="program-date mb-4">Plenary speakers</h3>
        <div class="speaker-item mb-4">
          <div class="speaker-name">Prof. Zaneta Nikolovska-Coleska, USA</div>
          <div class="speaker-affiliation">University of Michigan Medical School</div>
        </div>
        <div class="speaker-item mb-6">
          <div class="speaker-name">Prof. Borut Božič, Slovenia</div>
          <div class="speaker-affiliation">Faculty of Pharmacy, University of Ljubljana</div>
        </div>

        <h3 class="program-date mb-4">Session speakers</h3>

        <div class="session-group mb-6">
          <div class="session-name">Session: Pharmaceutical Technology and Biotechnology / Biopharmaceutics /
            Cosmetology</div>
          <div class="speaker-item mt-2">
            <div class="speaker-name">Prof. Mario Jug, Croatia</div>
            <div class="speaker-affiliation">Department of Pharmaceutical Technology, Faculty of Pharmacy and
              Biochemistry, University of Zagreb</div>
          </div>
          <div class="speaker-item mt-2">
            <div class="speaker-name">Prof. Rita Ambrus, Hungary</div>
            <div class="speaker-affiliation">Institute of Pharmaceutical Technology and Regulatory Affairs, Faculty of
              Pharmacy, University of Szeged</div>
          </div>
        </div>

        <div class="session-group mb-6">
          <div class="session-name">Session: Clinical Biochemistry / Toxicology / Food and Nutrition</div>
          <div class="speaker-item mt-2">
            <div class="speaker-name">Prof. Dusan Misic, Poland</div>
            <div class="speaker-affiliation">Department of Functional Food Products Development, Faculty of
              Biotechnology and Food Science, Wrocław University of Environmental and Life Sciences</div>
          </div>
          <div class="speaker-item mt-2">
            <div class="speaker-name">Assoc. Prof. Marijana Curcic, Serbia</div>
            <div class="speaker-affiliation">Department of Toxicology "Akademik Danilo Soldatovic", Centre for
              Toxicological Risk Assessment, University of Belgrade</div>
          </div>
        </div>

        <div class="session-group mb-6">
          <div class="session-name">Session: Community and Clinical Pharmacy</div>
          <div class="speaker-item mt-2">
            <div class="speaker-name">Anita Hogg, Northern Ireland</div>
            <div class="speaker-affiliation">Lead for Medicines Optimisation Resource Efficiency, Medicines Optimisation
              Innovation Centre (MOIC) Northern Health and Social Care Trust (NHSCT)</div>
          </div>
          <div class="speaker-item mt-2">
            <div class="speaker-name">Assoc. Prof. Maja Ortner Hadziabdic, Croatia</div>
            <div class="speaker-affiliation">Centre of Applied Pharmacy, Faculty of Pharmacy and Biochemistry,
              University of Zagreb</div>
          </div>
        </div>

        <div class="session-group mb-6">
          <div class="session-name">Session: Pharmaceutical Chemistry / Biomolecular Sciences</div>
          <div class="speaker-item mt-2">
            <div class="speaker-name">Prof. Ing. Vladimír Wsól, Czech Republic</div>
            <div class="speaker-affiliation">Department of Biochemical Sciences, Faculty of Pharmacy, Charles University
            </div>
          </div>
          <div class="speaker-item mt-2">
            <div class="speaker-name">Prof. Vladimir Dobričić, Serbia</div>
            <div class="speaker-affiliation">Department of Pharmaceutical Chemistry, Faculty of Pharmacy, University of
              Belgrade</div>
          </div>
        </div>

        <div class="session-group mb-6">
          <div class="session-name">Session: Natural Products and Phytotherapy</div>
          <div class="speaker-item mt-2">
            <div class="speaker-name">Dr. Danijela Mišić, Serbia</div>
            <div class="speaker-affiliation">Department of Plant Physiology, Institute for Biological Research "Siniša
              Stanković"- National Institute of the Republic of Serbia, University of Belgrade</div>
          </div>
        </div>

        <div class="session-group mb-6">
          <div class="session-name">Session: Pharmaceutical Analysis / Quality Assurance / Pharmaceutical Legislation
          </div>
          <div class="speaker-item mt-2">
            <div class="speaker-affiliation">The names will be announced shortly</div>
          </div>
        </div>

        <div class="session-group mb-6">
          <div class="session-name">Session: Social Pharmacy / Pharmaceutical Law</div>
          <div class="speaker-item mt-2">
            <div class="speaker-affiliation">The names will be announced shortly</div>
          </div>
        </div>

        <div class="session-group mb-6">
          <div class="session-name">Session: Pharmacoeconomics / Drug Information</div>
          <div class="speaker-item mt-2">
            <div class="speaker-affiliation">The names will be announced shortly</div>
          </div>
        </div>

        <div class="session-group mb-6">
          <div class="session-name">Session: Student Section</div>
        </div>
      </base-card>
    </base-container>
  </div>
</template>

<style scoped>
.hero-title {
  font-size: 1.8rem;
  background-color: #1c5a6d;
  color: white;
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

.reduce-text li {
  font-size: 0.95rem
}

.speaker-item {
  text-align: left;
}

.speaker-name {
  font-weight: bold;
  color: #125280;
  font-size: 1.15rem;
}

.speaker-affiliation {
  color: #1c5a6d;
  font-size: 1rem;
  font-style: italic;
}

.session-name {
  font-weight: bold;
  color: #d37315;
  font-size: 1.2rem;
  margin-top: 15px;
  border-left: 4px solid #d37315;
  padding-left: 10px;
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
