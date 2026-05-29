<script setup>
import { ref } from 'vue';
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import homeimg from "@/assets/dates.webp";

// Import Lecturer Images
import zanetaImg from "@/assets/ZanetaNikolovskaColeska.webp";
import marioImg from "@/assets/MarioJug.webp";
import ritaImg from "@/assets/RitaAmbrus.webp";
import dusanImg from "@/assets/DusanMisic.webp";
import marijanaImg from "@/assets/MarijanaCurcic.webp";
import anitaImg from "@/assets/AnitaHogg.webp";
import majaImg from "@/assets/MajaOrtnerHadziabdic.webp";
import vladimirWImg from "@/assets/VladimirWsol.webp";
import vladimirDImg from "@/assets/VladimirDobricic.webp";
import danijelaImg from "@/assets/DanijelaMisic.webp";
import simoneImg from "@/assets/SimoneMoser.webp";
import slaveykoImg from "@/assets/SlaveykoDjambazov.webp";
import andzelijaImg from "@/assets/AndzelinaMalenovic.webp";
import ericImg from "@/assets/EricDeconinck.webp";
import borutImg from "@/assets/BorutBozic.PNG.webp";
import bertalanImg from "@/assets/BertalanNemeth.webp";
import teaImg from "@/assets/TeaPemovska.webp";

const expandedBios = ref({});

const toggleBio = (id) => {
  expandedBios.value[id] = !expandedBios.value[id];
};

const expandIcon = (isExpanded) => {
  return isExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down';
}
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
              <li>Pharmaceutical Technology and Biotechnology / Biopharmaceutics / Cosmetology</li>
              <li>Pharmaceutical Chemistry / Biomolecular Sciences</li>
              <li>Social Pharmacy / Pharmaceutical Law</li>
              <li>Pharmaceutical Analysis / Quality Assurance / Pharmaceutical Legislation</li>
            </ul>
          </v-col>
          <v-col cols="12" md="6">
            <ul class="session-list">
              <li>Community and Clinical Pharmacy</li>
              <li>Clinical Biochemistry / Toxicology / Food and Nutrition</li>
              <li>Natural Products and Phytotherapy</li>
              <li>Pharmacoeconomics / Drug Information</li>
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
          <div class="hall-info mb-1"><b>HOTEL METROPOL</b></div>
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
                <span class="time-col">17:00 – 18:00</span>
                <span>Opening ceremony</span>
              </div>
            </v-list-item>
            <v-list-item>
              <div class="d-flex">
                <span class="time-col">18:00 – 19:30</span>
                <span>Plenary session</span>
              </div>
            </v-list-item>
            <v-list-item>
              <div class="d-flex">
                <span class="time-col">19:30 – 20:00</span>
                <span>Discussion</span>
              </div>
            </v-list-item>
          </v-list>
        </base-card>

        <!-- Friday -->
        <base-card class="mb-5">
          <h3 class="program-date mb-2">Friday, October 2nd, 2026</h3>
          <v-row>
            <v-col cols="12" md="6">
              <div class="hall-info mb-1"><b>Hall Biljana (Hall 1)</b></div>
              <v-list density="compact" class="program-list">
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">9:00 – 12:00</span>
                    <span>Session: Pharmaceutical Chemistry / Biomolecular Sciences</span>
                  </div>
                </v-list-item>
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">12:00 – 12:30</span>
                    <span>Break</span>
                  </div>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="6">
              <div class="hall-info mb-1"><b>Hall Car Samoil (Hall 2)</b></div>
              <v-list density="compact" class="program-list">
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">9:00 – 12:00</span>
                    <span>Session: Pharmaceutical Technology / Biotechnology / Biopharmacy and Cosmetology</span>
                  </div>
                </v-list-item>
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">16:00 – 19:00</span>
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
                    <span class="time-col">9:00 – 12:00</span>
                    <span>Session: Social Pharmacy / Pharmaceutical Law</span>
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
              <div class="hall-info mb-1"><b>Hall Biljana (Hall 1)</b></div>
              <v-list density="compact" class="program-list">
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">9:00 – 12:00</span>
                    <span>Session: Pharmaceutical analysis / Quality Assurance / Pharmaceutical Legislation</span>
                  </div>
                </v-list-item>
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">12:00 – 12:15</span>
                    <span>Break</span>
                  </div>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="6">
              <div class="hall-info mb-1"><b>Hall Car Samoil (Hall 2)</b></div>
              <v-list density="compact" class="program-list">
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">9:00 – 12:00</span>
                    <span>Session: Clinical Biochemistry / Toxicology / Food and Nutrition</span>
                  </div>
                </v-list-item>
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">14:30 – 17:30</span>
                    <span>Session: phytotherapy and Natural Products</span>
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
              <div class="hall-info mb-1"><b>Hall Biljana (Hall 1)</b></div>
              <v-list density="compact" class="program-list">
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">09:00 – 11:30</span>
                    <span>Session: Pharmacoeconomy / Drug Information</span>
                  </div>
                </v-list-item>
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">11:30 – 12:00</span>
                    <span>Break</span>
                  </div>
                </v-list-item>
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">13:30 – 16:30</span>
                    <span>Session: Community Pharmacy and Clinical Pharmacy</span>
                  </div>
                </v-list-item>
                <v-list-item>
                  <div class="d-flex">
                    <span class="time-col">16:30 – 17:00</span>
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

      <base-card class="mt-5 mb-10 pa-6">
        <h3 class="program-date mb-6">Plenary speakers</h3>

        <!-- Zaneta Nikolovska-Coleska -->
        <v-row class="mb-8 align-center">
          <v-col cols="12" sm="3" md="2" class="d-flex justify-center">
            <v-avatar size="140" class="elevation-4 speaker-avatar">
              <v-img :src="zanetaImg" alt="Prof. Zaneta Nikolovska-Coleska"></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="12" sm="9" md="10">
            <div class="speaker-name text-h6 font-weight-bold mb-1">Prof. Zaneta Nikolovska-Coleska, USA</div>
            <div class="speaker-affiliation mb-4">University of Michigan Medical School</div>
            <v-btn variant="outlined" color="#1c5a6d" size="small" class="text-none"
              :append-icon="expandIcon(expandedBios['zaneta'])" :active="expandedBios['zaneta']"
              @click="toggleBio('zaneta')">
              {{ expandedBios['zaneta'] ? 'Short Biography' : 'Short Biography' }}
            </v-btn>

            <v-expand-transition>
              <div v-show="expandedBios['zaneta']" class="mt-4 bio-content">
                <p class="mb-3">
                  Dr. Zaneta Nikolovska-Coleska is Associate Dean of Graduate & Postdoctoral Studies and Professor of
                  Pathology at the University of Michigan Medical School. She is also affiliated with the
                  interdepartmental graduate programs in Medicinal Chemistry and Chemical Biology at the University of
                  Michigan, Ann Arbor. From 2021 to 2023, Prof. Nikolovska-Coleska served as President of the
                  International Chemical Biology Society (ICBS) and currently continues to serve on its Board of
                  Directors. She is also an Associate Editor for RSC Chemical Biology.
                </p>
                <p>
                  Prof. Nikolovska-Coleska is an internationally recognized expert in chemical genomics, focusing on the
                  discovery and development of potent, selective chemical probes that target cancer-related
                  protein-protein interactions (PPIs). Her pioneering research advances the understanding of crucial
                  PPIs involved in cancer progression, accelerates drug target validation, and lays the foundation for
                  translating these discoveries into clinical therapeutics. Dr. Nikolovska-Coleska has received numerous
                  prestigious awards, including the Chemical Structure Association Trust (CSA Trust) Award, the New
                  Investigator Award from the Leukemia Research Foundation, the Innovator Award from the Harrington
                  Discovery Institute, and the AACR-Bayer Innovation and Discovery Award.
                </p>
              </div>
            </v-expand-transition>
          </v-col>
        </v-row>

        <!-- Borut Božič -->
        <v-row class="mb-8 align-center">
          <v-col cols="12" sm="3" md="2" class="d-flex justify-center">
            <v-avatar size="140" class="elevation-4 speaker-avatar">
              <v-img :src="borutImg" alt="Prof. Borut Božič"></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="12" sm="9" md="10">
            <div class="speaker-name text-h6 font-weight-bold mb-1">Prof. Borut Božič, Slovenia</div>
            <div class="speaker-affiliation mb-4">Faculty of Pharmacy, University of Ljubljana</div>
            <v-btn variant="outlined" color="#1c5a6d" size="small" class="text-none"
              :append-icon="expandIcon(expandedBios['borut'])" :active="expandedBios['borut']"
              @click="toggleBio('borut')">
              {{ expandedBios['borut'] ? 'Short Biography' : 'Short Biography' }}
            </v-btn>

            <v-expand-transition>
              <div v-show="expandedBios['borut']" class="mt-4 bio-content">
                <p class="mb-3">
                  Borut Božič, MSc in Pharmacy, PhD in Clinical Immunology, and European Specialist in Laboratory
                  Medicine, is a Full Professor of Clinical Biochemistry and Laboratory Biomedicine at the Faculty of
                  Pharmacy, University of Ljubljana, Slovenia. He also serves as a specialist consultant at the
                  University Medical Centre Ljubljana. He has experience in industry, public pharmacy, research in
                  autoimmunity, laboratory diagnostic analysis, and university teaching. He has held visiting positions
                  in the Netherlands, Germany, Russia, the UK, Israel, Croatia, and the USA.
                </p>
                <p class="mb-3">
                  He is a co-author of a patent, research papers published in peer-reviewed scientific journals, and
                  chapters in several books and encyclopedias on autoimmunity, rheumatology, atherogenesis, respiratory
                  medicine, analytical sciences, membrane biophysics and quality of pharmaceutical education.
                </p>
                <p>
                  He has held numerous leadership roles, including President of the Governing Board of the University,
                  member of the University Senate, Dean of the Faculty of Pharmacy, President of the Slovenian Chamber
                  of Laboratory Medicine, regional director of European project on quality assurance of education of
                  pharmacists. He is coordinator of Doctoral program Biomedicine at University and Chair of the
                  Department of clinical biochemistry at the Faculty of Pharmacy. He is a member of the European
                  Federation on Clinical Chemistry and Laboratory Medicine Working Group on Ethics and serves as the
                  President of European Association Faculties of Pharmacy.
                </p>
              </div>
            </v-expand-transition>
          </v-col>
        </v-row>

        <!-- Simone Moser -->
        <v-row class="mb-8 align-center">
          <v-col cols="12" sm="3" md="2" class="d-flex justify-center">
            <v-avatar size="140" class="elevation-4 speaker-avatar">
              <v-img :src="simoneImg" alt="Prof. Dr. Simone Moser"></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="12" sm="9" md="10">
            <div class="speaker-name text-h6 font-weight-bold mb-1">Prof. Simone Moser, Austria</div>
            <div class="speaker-affiliation mb-4">University of Innsbruck</div>
            <v-btn variant="outlined" color="#1c5a6d" size="small" class="text-none"
              :append-icon="expandIcon(expandedBios['simone'])" :active="expandedBios['simone']"
              @click="toggleBio('simone')">
              {{ expandedBios['simone'] ? 'Short Biography' : 'Short Biography' }}
            </v-btn>

            <v-expand-transition>
              <div v-show="expandedBios['simone']" class="mt-4 bio-content">
                <p class="mb-3">
                  Prof. Dr. Simone Moser holds a degree in Chemistry from the University of Innsbruck, where she
                  completed her PhD focusing on the isolation and structural characterization of natural compounds.
                  Her postdoctoral research at the École Polytechnique Fédérale de Lausanne (EPFL) and the
                  Massachusetts Institute of Technology (MIT) centered on elucidating the modes of action of small
                  molecules.
                </p>
                <p class="mb-3">
                  Following her postdoctoral studies, Dr. Moser joined the Analytical Development team at Novartis in
                  Austria. She later returned to academia, establishing her research group within the Chair of
                  Pharmaceutical Biology at the Ludwig Maximilian University of Munich (LMU), where she completed her
                  habilitation in 2022.
                </p>
                <p>
                  In September 2023, Dr. Moser was appointed Head of the Department of Pharmacognosy at the University
                  of Innsbruck, Austria. Her research on the pharmaceutical properties of newly discovered natural
                  products has earned her several prestigious awards, including the Blair-Curtius-Pfleiderer-Wachter
                  Prize for Pteridinology (2020) and the Dr. Willmar Schwabe Prize from the Society for Medicinal
                  Plant and Natural Product Research (2022).
                </p>
              </div>
            </v-expand-transition>
          </v-col>
        </v-row>

        <h3 class="program-date mb-6">Session speakers</h3>

        <!-- Session group -->
        <div class="session-group mb-8">
          <div class="session-name mb-4">Session: Pharmaceutical Technology and Biotechnology / Biopharmaceutics /
            Cosmetology</div>

          <v-row class="mb-6 align-center">
            <v-col cols="12" sm="3" md="2" class="d-flex justify-center">
              <v-avatar size="140" class="elevation-2 speaker-avatar">
                <v-img :src="marioImg" alt="Prof. Mario Jug"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="9" md="10">
              <div class="speaker-name font-weight-bold mb-1">Prof. Mario Jug, Croatia</div>
              <div class="speaker-affiliation mb-4">Faculty of Pharmacy and Biochemistry, University of Zagreb</div>
              <v-btn variant="outlined" color="#1c5a6d" size="small" class="text-none"
                :append-icon="expandIcon(expandedBios['mario'])" :active="expandedBios['mario']"
                @click="toggleBio('mario')">
                {{ expandedBios['mario'] ? 'Short Biography' : 'Short Biography' }}
              </v-btn>

              <v-expand-transition>
                <div v-show="expandedBios['mario']" class="mt-4 bio-content">
                  <p class="mb-3">
                    Dr. Mario Jug is a tenured full professor in the Department of Pharmaceutical Technology at the
                    University of Zagreb Faculty of Pharmacy and Biochemistry. He teaches Drug Formulation 2 and
                    Industrial Pharmacy at the graduate (diploma) level and coordinates several modules at the
                    postgraduate doctoral level.
                  </p>
                  <p>
                    He has authored 55 scientific papers in WoSCC‑indexed international journals, 16 professional
                    publications, and has presented his work at numerous scientific conferences. In his research, he
                    collaborates extensively with academic and industrial partners in Croatia and abroad. His scientific
                    work focuses on developing advanced drug delivery systems for mucosal and dermal applications, with
                    a particular emphasis on cyclodextrin‑based supramolecular carriers and their mechanochemical
                    synthesis, polymeric hydrogels, and green extraction methodologies.
                  </p>
                </div>
              </v-expand-transition>
            </v-col>
          </v-row>

          <v-row class="mb-6 align-center">
            <v-col cols="12" sm="3" md="2" class="d-flex justify-center">
              <v-avatar size="140" class="elevation-2 speaker-avatar">
                <v-img :src="ritaImg" alt="Prof. Rita Ambrus"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="9" md="10">
              <div class="speaker-name font-weight-bold mb-1">Prof. Rita Ambrus, Hungary</div>
              <div class="speaker-affiliation mb-4">Faculty of Pharmacy, University of Szeged</div>
              <v-btn variant="outlined" color="#1c5a6d" size="small" class="text-none"
                :append-icon="expandIcon(expandedBios['rita'])" :active="expandedBios['rita']"
                @click="toggleBio('rita')">
                {{ expandedBios['rita'] ? 'Short Biography' : 'Short Biography' }}
              </v-btn>

              <v-expand-transition>
                <div v-show="expandedBios['rita']" class="mt-4 bio-content">
                  <p class="mb-3">
                    Dr. Rita Ambrus, is a Full Professor in Institute of Pharmaceutical Technology and Regulatory
                    Affairs, and she is a vice dean for Sciences and Economy at Faculty of Pharmacy University of
                    Szeged. Professor Ambrus is also an experimental leader of Nanotechnological and Pulmonary Research
                    group of Interdisciplinary Excellence Centre University of Szeged. Her research interest is
                    development of technological procedures (nano- and microparticle production) and alternative drug
                    administration (pulmonary and intranasal) to reach improved bioavailability of poorly water-soluble
                    drugs. She published more than 210 research articles with almost 3000 independent citations and her
                    H index is 38.
                  </p>
                  <p>
                    She has active cooperation with national and international (9 active cooperation in Europe) higher
                    education institutions and pharmaceutical industry partners. She is active member of the Spanish PhD
                    Program Academic Commission (PPAC) in "Drug Research and Development" of the University of Santiago
                    de Compostela and also a leading researcher of the Bulgarian "Strategic research and innovation
                    program "Biomaterials and Nanostructure Drug Delivery" working group. She was a PI by Serbian,
                    Slovenian and Croatian bilateral projects.
                  </p>
                </div>
              </v-expand-transition>
            </v-col>
          </v-row>
        </div>

        <!-- Session group -->
        <div class="session-group mb-8">
          <div class="session-name mb-4">Session: Pharmaceutical Chemistry / Biomolecular Sciences</div>

          <v-row class="mb-6 align-center">
            <v-col cols="12" sm="3" md="2" class="d-flex justify-center">
              <v-avatar size="140" class="elevation-2 speaker-avatar">
                <v-img :src="vladimirWImg" alt="Prof. Ing. Vladimír Wsól"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="9" md="10">
              <div class="speaker-name font-weight-bold mb-1">Prof. Ing. Vladimír Wsól, Czech Republic</div>
              <div class="speaker-affiliation mb-4">Faculty of Pharmacy, Charles University</div>
              <v-btn variant="outlined" color="#1c5a6d" size="small" class="text-none"
                :append-icon="expandIcon(expandedBios['vladimirW'])" :active="expandedBios['vladimirW']"
                @click="toggleBio('vladimirW')">
                {{ expandedBios['vladimirW'] ? 'Short Biography' : 'Short Biography' }}
              </v-btn>

              <v-expand-transition>
                <div v-show="expandedBios['vladimirW']" class="mt-4 bio-content">
                  <p>
                    Dr. Vladimír Wsól is a Professor at the Faculty of Pharmacy in Hradec Králové, Charles University,
                    Czech Republic, where he also serves as Head of the Department of Biochemical Sciences. His research
                    focuses on xenobiotic metabolism, drug metabolism, drug–drug interactions, and mechanisms of
                    resistance in anticancer therapy. Prof. Wsól has authored more than 125 peer-reviewed publications
                    with over 2,000 citations (h-index 25, WoS). He has led and participated in several national and
                    international research projects related to innovative medicines and biomedical technologies. He is
                    an active member of several international scientific societies, including the International Society
                    for the Study of Xenobiotics and the American Association of Pharmaceutical Scientists.
                  </p>
                </div>
              </v-expand-transition>
            </v-col>
          </v-row>

          <v-row class="mb-6 align-center">
            <v-col cols="12" sm="3" md="2" class="d-flex justify-center">
              <v-avatar size="140" class="elevation-2 speaker-avatar">
                <v-img :src="vladimirDImg" alt="Prof. Vladimir Dobričić"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="9" md="10">
              <div class="speaker-name font-weight-bold mb-1">Prof. Vladimir Dobričić, Serbia</div>
              <div class="speaker-affiliation mb-4">Faculty of Pharmacy, University of Belgrade</div>
              <v-btn variant="outlined" color="#1c5a6d" size="small" class="text-none"
                :append-icon="expandIcon(expandedBios['vladimirD'])" :active="expandedBios['vladimirD']"
                @click="toggleBio('vladimirD')">
                {{ expandedBios['vladimirD'] ? 'Short Biography' : 'Short Biography' }}
              </v-btn>

              <v-expand-transition>
                <div v-show="expandedBios['vladimirD']" class="mt-4 bio-content">
                  <p class="mb-3">
                    Dr. Vladimir Dobričić is an associate professor at the Department of Pharmaceutical Chemistry,
                    University of Belgrade – Faculty of Pharmacy.
                  </p>
                  <p>
                    Dr. Dobričić’s research focuses on the design, synthesis, and evaluation of physicochemical and
                    pharmacokinetic properties of pharmacologically active compounds. He leads a research group at the
                    Department of Pharmaceutical Chemistry and serves as the University of Belgrade’s coordinator for
                    the Paul Ehrlich MedChem Euro PhD Network. He has completed advanced training in in silico design
                    and modeling of pharmacologically active compounds in Slovenia and Poland. He has led and
                    participated in several national and international research projects. He authored over 60
                    publications in international journals (h-index 19), has presented more than 100 communications at
                    scientific conferences, and has served as a reviewer for numerous scientific journals.
                  </p>
                </div>
              </v-expand-transition>
            </v-col>
          </v-row>

          <v-row class="mb-6 align-center">
            <v-col cols="12" sm="3" md="2" class="d-flex justify-center">
              <v-avatar size="140" class="elevation-2 speaker-avatar">
                <v-img :src="teaImg" alt="Dr Tea Pemovska"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="9" md="10">
              <div class="speaker-name font-weight-bold mb-1">Dr Tea Pemovska, Austria</div>
              <div class="speaker-affiliation mb-2">Medical University of Vienna</div>
              <div class="speaker-affiliation mb-4">
                Beyond Genomics: Functional Precision Medicine for Real-World Therapeutic Decisions
              </div>
              <v-btn variant="outlined" color="#1c5a6d" size="small" class="text-none"
                :append-icon="expandIcon(expandedBios['tea'])" :active="expandedBios['tea']" @click="toggleBio('tea')">
                {{ expandedBios['tea'] ? 'Short Biography' : 'Short Biography' }}
              </v-btn>

              <v-expand-transition>
                <div v-show="expandedBios['tea']" class="mt-4 bio-content">
                  <p class="mb-3">
                    Dr. Tea Pemovska is a translational cancer systems biologist specializing in functional precision
                    medicine, with expertise in drug screening assays and analytical pipelines for hematological
                    malignancies. She obtained her PhD in Personalized Cancer Medicine / Chemical Systems Biology from
                    the University of Helsinki and completed postdoctoral training at the CeMM Research Center for
                    Molecular Medicine of the Austrian Academy of Sciences in Vienna as an EMBO fellow. Since 2020, she
                    has been a Senior Researcher at the Medical University of Vienna in the Functional Precision
                    Hematology Group. Her research focuses on integrating functional drug sensitivity profiling with
                    molecular data to develop personalized therapeutic strategies for cancer patients.
                  </p>
                  <p>
                    Dr. Pemovska is also co-founder and Chief Scientific Officer of Exalt, a spin-off company from the
                    Medical University of Vienna, developing in vitro diagnostic tests for therapy optimization in
                    precision oncology.
                  </p>
                </div>
              </v-expand-transition>
            </v-col>
          </v-row>
        </div>
        <div class="session-group mb-8">
          <div class="session-name mb-4">Session: Social Pharmacy / Pharmaceutical Law</div>

          <v-row class="mb-6 align-center">
            <v-col cols="12" sm="3" md="2" class="d-flex justify-center">
              <v-avatar size="140" class="elevation-2 speaker-avatar">
                <v-img :src="slaveykoImg" alt="Dr. Slaveyko Djambazov"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="9" md="10">
              <div class="speaker-name font-weight-bold mb-1">Dr. Slaveyko Djambazov, Bulgaria</div>
              <div class="speaker-affiliation mb-4">Founder and Managing Director | HTA Ltd.</div>
              <v-btn variant="outlined" color="#1c5a6d" size="small" class="text-none"
                :append-icon="expandIcon(expandedBios['slaveyko'])" :active="expandedBios['slaveyko']"
                @click="toggleBio('slaveyko')">
                {{ expandedBios['slaveyko'] ? 'Short Biography' : 'Short Biography' }}
              </v-btn>

              <v-expand-transition>
                <div v-show="expandedBios['slaveyko']" class="mt-4 bio-content">
                  <p class="mb-3">
                    Dr. Slaveyko Djambazov brings over a decade of experience at the intersection of health technology
                    assessment (HTA), value-based healthcare (VBHC), and health policy. A medical doctor with an MPH,
                    MBA, and PhD in HTA, he combines academic rigor with hands-on implementation and executive
                    leadership experience.
                  </p>
                  <p class="mb-3">
                    As founder and managing director of HTA Ltd., Dr. Djambazov has led more than 1,200 health economic
                    and policy analyses informing reimbursement, investment, and strategic healthcare decisions across
                    Europe, sub-Saharan Africa, and Central and Southeast Asia—translating evidence into policy and
                    practice. Beyond advisory work, Dr. Djambazov brings deep provider-side insight. He has co-founded
                    and managed more than 15 hospitals and over 50 medical centers, giving him firsthand understanding
                    of operational realities, financial pressures, and care delivery transformation.
                  </p>
                  <p>
                    Since completing the VBHC program at Harvard Business School, he has led over 50 VBHC implementation
                    projects in hospitals and medical centers across Europe, bridging strategic frameworks with
                    frontline execution. Dr. Djambazov teaches VBHC and HTA at the American University in Bulgaria, the
                    University of St Andrews, and executive education programs internationally. He has authored and
                    co-authored more than 25 books and 150 peer-reviewed publications, contributing to the global
                    dialogue on value, outcomes measurement, and sustainable health system reform.
                  </p>
                </div>
              </v-expand-transition>
            </v-col>
          </v-row>
        </div>

        <!-- Other groups -->
        <div class="session-group mb-8">
          <div class="session-name mb-4">Session: Pharmaceutical Analysis / Quality Assurance / Pharmaceutical
            Legislation</div>

          <v-row class="mb-6 align-center">
            <v-col cols="12" sm="3" md="2" class="d-flex justify-center">
              <v-avatar size="140" class="elevation-2 speaker-avatar">
                <v-img :src="andzelijaImg" alt="Dr Anđelija Malenović"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="9" md="10">
              <div class="speaker-name font-weight-bold mb-1">Prof. Anđelija Malenović, Serbia</div>
              <div class="speaker-affiliation mb-4">Faculty of Pharmacy, University of Belgrade</div>
              <v-btn variant="outlined" color="#1c5a6d" size="small" class="text-none"
                :append-icon="expandIcon(expandedBios['andzelija'])" :active="expandedBios['andzelija']"
                @click="toggleBio('andzelija')">
                {{ expandedBios['andzelija'] ? 'Short Biography' : 'Short Biography' }}
              </v-btn>

              <v-expand-transition>
                <div v-show="expandedBios['andzelija']" class="mt-4 bio-content">
                  <p class="mb-3">
                    Dr Anđelija Malenović, full professor at the Department of Drug Analytics at the Faculty of
                    Pharmacy, University of Belgrade and specialist in drug testing and control.
                  </p>
                  <p class="mb-3">
                    Expert appointed by Medicines and Medical Devices Agency of Montenegro and Medicines and Medical
                    Devices Agency of Serbia. Technical expert appointed by Accreditation Body of Serbia. Speaker at the
                    two course of continuing education held at the Faculty of Pharmacy and four professional seminars
                    organized by Chamber of Commerce and Industry of Serbia. Member of Scientific Committee at three
                    international and national conferences.
                  </p>
                  <p>
                    Nowadays, her research interests head in several directions of pharmaceutical analysis: (i)
                    fundamental examination of the RP-HPLC systems employing eluents with chaotropic agents or
                    microemulsions and micellar mobile phases, (ii) experimental design applied to the development of
                    chromatographic methods for the impurity profiling of pharmaceutical substances and (iii)
                    bioanalysis which employs LC-MS/MS and the dried matrix spots as a sample collection technique. The
                    research output of Dr Anđelija Malenović consists in over 120 original research papers published in
                    the journals covered by the Science Citation Index She has over 1700 citations without self-citation
                    and her h-index is 24.
                  </p>
                </div>
              </v-expand-transition>
            </v-col>
          </v-row>

          <v-row class="mb-6 align-center">
            <v-col cols="12" sm="3" md="2" class="d-flex justify-center">
              <v-avatar size="140" class="elevation-2 speaker-avatar">
                <v-img :src="ericImg" alt="Dr Eric Deconinck"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="9" md="10">
              <div class="speaker-name font-weight-bold mb-1">Dr Eric Deconinck, Belgium</div>
              <div class="speaker-affiliation mb-4">Head of Scientific Service Medicines and Health Products,
                Sciensano
              </div>
              <v-btn variant="outlined" color="#1c5a6d" size="small" class="text-none"
                :append-icon="expandIcon(expandedBios['eric'])" :active="expandedBios['eric']"
                @click="toggleBio('eric')">
                {{ expandedBios['eric'] ? 'Short Biography' : 'Short Biography' }}
              </v-btn>

              <v-expand-transition>
                <div v-show="expandedBios['eric']" class="mt-4 bio-content">
                  <p class="mb-3">
                    Dr. Eric Deconinck graduated as a pharmacist at the Vrije Universiteit Brussel in 2002 and obtained
                    a Phd in pharmaceutical sciences at that same university in 2007. His doctoral research was situated
                    in the domain of analytical chemistry and chemometrics. After his Phd he worked in the R&D
                    departments of some small pharamceutical companies, after which he joined the Sciensano to work in
                    the Official Medicine Control Laboratory. Before becoming head of the OMCL in 2016, he was
                    responsible for the analysis of falsified medicines and illegal preparations for the Belgian and the
                    European authorities, as well as for different research projects in collaboration with universities.
                  </p>
                  <p>
                    Today, as head of the Belgian OMCL, he is a member of the GEON advisory group and active in
                    different activities and workgroups of the European network. Still active in research projects, his
                    main domains of interest are the analysis and risk evaluation of illegal medicines and health
                    products, mapping and follow up of the illicit drug market and the use of spectroscopy and
                    chemometrics within the daily work of an OMCL.
                  </p>
                </div>
              </v-expand-transition>
            </v-col>
          </v-row>
        </div>

        <!-- Session group -->
        <div class="session-group mb-8">
          <div class="session-name mb-4">Session: Community and Clinical Pharmacy</div>

          <v-row class="mb-6 align-center">
            <v-col cols="12" sm="3" md="2" class="d-flex justify-center">
              <v-avatar size="140" class="elevation-2 speaker-avatar">
                <v-img :src="anitaImg" alt="Anita Hogg"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="9" md="10">
              <div class="speaker-name font-weight-bold mb-1">Anita Hogg, Northern Ireland</div>
              <div class="speaker-affiliation mb-4">Medicines Optimisation Innovation Centre (MOIC) Northern Health and
                Social Care Trust</div>
              <v-btn variant="outlined" color="#1c5a6d" size="small" class="text-none"
                :append-icon="expandIcon(expandedBios['anita'])" :active="expandedBios['anita']"
                @click="toggleBio('anita')">
                {{ expandedBios['anita'] ? 'Short Biography' : 'Short Biography' }}
              </v-btn>

              <v-expand-transition>
                <div v-show="expandedBios['anita']" class="mt-4 bio-content">
                  <p>
                    Anita is Lead in the Regional Medicines Optimisation Innovation Centre (MOIC) in Northern Ireland.
                    She is a registered Pharmacist, holds an MSc in Clinical Pharmacy and has developed, delivered and
                    evaluated innovative medicines optimisation services for over 20 years. This multi-award winning
                    work has contributed to the transformation of clinical pharmacy services in Northern Ireland and
                    extensive collaboration across Europe, including participation in large European projects. Anita has
                    disseminated widely, including conference presentations and workshops across Europe and
                    internationally. She is passionate about making a difference to patients, empowering pharmacists and
                    driving change through informing the delivery of best practice in medicines use. Anita completed the
                    Independent Prescriber course in 2009 and is a recipient of the Northern Ireland Hospital Pharmacist
                    of the Year Award.
                  </p>
                </div>
              </v-expand-transition>
            </v-col>
          </v-row>

          <v-row class="mb-6 align-center">
            <v-col cols="12" sm="3" md="2" class="d-flex justify-center">
              <v-avatar size="140" class="elevation-2 speaker-avatar">
                <v-img :src="majaImg" alt="Assoc. Prof. Maja Ortner Hadziabdic"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="9" md="10">
              <div class="speaker-name font-weight-bold mb-1">Assoc. Prof. Maja Ortner Hadžiabdić, Croatia</div>
              <div class="speaker-affiliation mb-4">Faculty of Pharmacy and Biochemistry, University of Zagreb</div>
              <v-btn variant="outlined" color="#1c5a6d" size="small" class="text-none"
                :append-icon="expandIcon(expandedBios['maja'])" :active="expandedBios['maja']"
                @click="toggleBio('maja')">
                {{ expandedBios['maja'] ? 'Short Biography' : 'Short Biography' }}
              </v-btn>

              <v-expand-transition>
                <div v-show="expandedBios['maja']" class="mt-4 bio-content">
                  <p class="mb-3">
                    Dr. Maja Ortner Hadžiabdić is an Associate Professor and Vice Dean for Lifelong Learning at the
                    University of Zagreb Faculty of Pharmacy and Biochemistry. She is passionate about teaching and is
                    actively involved in courses such as Clinical Pharmacy and Pharmacotherapy, Consultation Skills, and
                    Pharmaceutical Care as well as several postgraduate courses within the Clinical Pharmacy
                    postgraduate specialist program. Additionally, she organises and oversees the Pre-registration
                    Training program for pharmacy students. Dedicated to advancing pharmacy education, Maja has played a
                    role in several major curriculum development projects and initiatives at her institution, (TEMPUS
                    JOINT 18028-2003 (New Pharmacy Curricula – Development and Implementation, 2005–2007); Development
                    and Implementation of Pre-registration Training for Pharmacy Students (2015–2025); Application of
                    the Croatian Qualification Framework in Improving Study Programs in Pharmacy and Medical
                    Biochemistry (PharMedQ) (2019–2022))
                  </p>
                  <p>
                    Maja is deeply committed to the development of clinical pharmacy in Croatia, where the field is
                    still evolving. Her clinical pharmacy expertise was enhanced through a visiting pharmacist position
                    at Guy’s and St. Thomas’ Hospital NHS Trust in London, UK (2005) and completed specialisation in
                    Clinical Pharmacy in Croatia in 2022. Maja’s research interests focus on drug optimization,
                    pharmaceutical care, and pharmacy education. Currently, Maja serves as the principal investigator of
                    the DEP2OLD project, funded by the Croatian Science Foundation, which aims to develop a
                    pharmacotherapy optimization model focused on deprescribing for nursing home residents. She has
                    published over 50 scientific and professional papers and has presented nearly 100 oral and poster
                    presentations at scientific conferences.
                  </p>
                </div>
              </v-expand-transition>
            </v-col>
          </v-row>
        </div>

        <div class="session-group mb-8">
          <div class="session-name mb-4">Session: Clinical Biochemistry / Toxicology / Food and Nutrition</div>

          <v-row class="mb-6 align-center">
            <v-col cols="12" sm="3" md="2" class="d-flex justify-center">
              <v-avatar size="140" class="elevation-2 speaker-avatar">
                <v-img :src="dusanImg" alt="Prof. Dusan Misic"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="9" md="10">
              <div class="speaker-name font-weight-bold mb-1">Prof. Dušan Mišić, Poland</div>
              <div class="speaker-affiliation mb-4">Faculty of Biotechnology and Food Science, Wrocław University of
                Environmental and Life Sciences</div>
              <v-btn variant="outlined" color="#1c5a6d" size="small" class="text-none"
                :append-icon="expandIcon(expandedBios['dusan'])" :active="expandedBios['dusan']"
                @click="toggleBio('dusan')">
                {{ expandedBios['dusan'] ? 'Short Biography' : 'Short Biography' }}
              </v-btn>

              <v-expand-transition>
                <div v-show="expandedBios['dusan']" class="mt-4 bio-content">
                  <p class="mb-3">
                    Dr. Dušan Mišić is a University Professor at the Department of Functional Food Products Development,
                    Faculty of Biotechnology and Food Science, Wrocław University of Environmental and Life Sciences,
                    Poland. His research focuses on antimicrobial bioactive compounds, mechanisms of antibacterial
                    activity, antimicrobial resistance, biofilms, and the development of biodegradable antibacterial
                    materials for applications in food packaging and medicine.
                  </p>
                  <p>
                    Prof. Mišić has authored more than 65 peer-reviewed publications, with over 1300 citations (h-index
                    23). He has led and participated in several international research projects and collaborates widely
                    in interdisciplinary research related to food safety, microbiology, and functional bioactive
                    materials.
                  </p>
                </div>
              </v-expand-transition>
            </v-col>
          </v-row>

          <v-row class="mb-6 align-center">
            <v-col cols="12" sm="3" md="2" class="d-flex justify-center">
              <v-avatar size="140" class="elevation-2 speaker-avatar">
                <v-img :src="marijanaImg" alt="Assoc. Prof. Marijana Curcic"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="9" md="10">
              <div class="speaker-name font-weight-bold mb-1">Assoc. Prof. Marijana Ćurčić, Serbia</div>
              <div class="speaker-affiliation mb-4">Centre for Toxicological Risk Assessment, University of Belgrade
              </div>
              <v-btn variant="outlined" color="#1c5a6d" size="small" class="text-none"
                :append-icon="expandIcon(expandedBios['marijana'])" :active="expandedBios['marijana']"
                @click="toggleBio('marijana')">
                {{ expandedBios['marijana'] ? 'Short Biography' : 'Short Biography' }}
              </v-btn>

              <v-expand-transition>
                <div v-show="expandedBios['marijana']" class="mt-4 bio-content">
                  <p class="mb-3">
                    Dr. Marijana Ćurčić is an Associate Professor at the University of Belgrade – Faculty of Pharmacy,
                    Department of Toxicology “Akademik Danilo Soldatović” and a European Registered Toxicologist (ERT).
                    Her expertise includes toxicological risk assessment, toxicological chemistry, and regulatory
                    toxicology.
                  </p>
                  <p class="mb-3">
                    She serves as a national evaluator of plant protection products for the Ministry of Agriculture,
                    Forestry and Water Management of the Republic of Serbia and has contributed to the evaluation of
                    genotoxic impurities in medicines at the Agency for Drugs and Medical Devices of Serbia. She has
                    also participated in international initiatives related to chemical safety, including the UNIDO
                    project for the implementation of the Stockholm Convention.
                  </p>
                  <p>
                    Dr. Ćurčić is involved in several national and international research projects focusing on
                    environmental health, chemical exposure, and risk communication. She is the co-author of university
                    textbooks in toxicology and has published numerous scientific papers in leading international
                    journals in toxicology and environmental health.
                  </p>
                </div>
              </v-expand-transition>
            </v-col>
          </v-row>
        </div>

        <!-- Session group -->
        <div class="session-group mb-8">
          <div class="session-name mb-4">Session: Natural Products and Phytotherapy</div>

          <v-row class="mb-6 align-center">
            <v-col cols="12" sm="3" md="2" class="d-flex justify-center">
              <v-avatar size="140" class="elevation-2 speaker-avatar">
                <v-img :src="danijelaImg" alt="Dr. Danijela Mišić"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="9" md="10">
              <div class="speaker-name font-weight-bold mb-1">Dr. Danijela Mišić, Serbia</div>
              <div class="speaker-affiliation mb-4">Institute for Biological Research "Siniša Stanković"- National
                Institute of the Republic of Serbia, University of Belgrade</div>
              <v-btn variant="outlined" color="#1c5a6d" size="small" class="text-none"
                :append-icon="expandIcon(expandedBios['danijela'])" :active="expandedBios['danijela']"
                @click="toggleBio('danijela')">
                {{ expandedBios['danijela'] ? 'Short Biography' : 'Short Biography' }}
              </v-btn>

              <v-expand-transition>
                <div v-show="expandedBios['danijela']" class="mt-4 bio-content">
                  <p>
                    Dr. Danijela Mišić is the Principal Research Fellow at the Department. of Plant Physiology of the
                    Institute for Biological Research “Siniša Stanković”- National Institute of the Republic of Serbia,
                    University of Belgrade. After earning the PhD degree (2009) at the University of Belgrade- Faculty
                    of Biology, she was a postdoctorate fellow at the Wageningen University, The Netherlands
                    (2011-2012). She was a fellow of "Norman Borlaug Fellowship" sponsored by U.S. Department of State
                    (USDA) (2005), and a PIFI fellow of the Chinese Academy of Sciences (CAS) (2019 and 2024). Danijela
                    is a PI of the multidisciplinary research group working in the area of plant sciences, and covering
                    fields of plant physiology, plant specialized metabolism, natural products chemistry, plant stress
                    physiology, plant molecular biology, functional genomics, metabolic engineering, biodiversity and
                    conservation, plant-biotic interactions, and plant genetics. The group currently numbers 17
                    permanent members, and is especially devoted to the investigation of biology, chemistry, ecology,
                    and biotechnology of iridoids- and phenolics-rich plant species.
                  </p>
                </div>
              </v-expand-transition>
            </v-col>
          </v-row>
        </div>


        <div class="session-group mb-8">
          <div class="session-name mb-4">Session: Pharmacoeconomics / Drug Information</div>
          <v-row class="mb-6 align-center">
            <v-col cols="12" sm="3" md="2" class="d-flex justify-center">
              <v-avatar size="140" class="elevation-2 speaker-avatar">
                <v-img :src="bertalanImg" alt="Bertalan Németh"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="9" md="10">
              <div class="speaker-name font-weight-bold mb-1">Bertalan Németh PhD, Hungary</div>
              <div class="speaker-affiliation mb-4">Syreon Research Institute</div>
              <v-btn variant="outlined" color="#1c5a6d" size="small" class="text-none"
                :append-icon="expandIcon(expandedBios['bertalan'])" :active="expandedBios['bertalan']"
                @click="toggleBio('bertalan')">
                {{ expandedBios['bertalan'] ? 'Short Biography' : 'Short Biography' }}
              </v-btn>

              <v-expand-transition>
                <div v-show="expandedBios['bertalan']" class="mt-4 bio-content">
                  <p class="mb-3">
                    Bertalan Németh PhD graduated from the Corvinus University of Budapest (MSc in Quantitative
                    economics and Operation research), the Eötvös Loránd University (Pharmaceutical economics and drug
                    policies), and the Semmelweis University School of PhD Studies. Between 2010 and 2015 he was a
                    health economist at the Hungarian HTA office. Since August 2015 Bertalan has been a Senior Health
                    Economist, and since 2019 a Principal Researcher at Syreon Research Institute. Bertalan is the chief
                    modeller at Syreon, and he is involved in various projects that include modelling, economic
                    evaluation in health, health technology assessment, and health statistics as well. Bertalan was the
                    President of the ISPOR Hungary Chapter and was the Chair of the ISPOR CEE Consortium, was
                    participant in the international EUnetHTA project, the ISPOR HTA Roundtable Europe, and the
                    scientific committees of multiple domestic and international conferences. Bertalan is currently a
                    course leader and PhD supervisor at Semmelweis University and is a faculty member of the global
                    ISPOR short courses as well. Bertalan received the Bernie O’Brien Young Investigator Award in 2025.
                  </p>
                </div>
              </v-expand-transition>
            </v-col>
          </v-row>
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

.speaker-name {
  font-weight: bold;
  color: #125280;
  font-size: 1.15rem;
}

.speaker-affiliation {
  color: #1c5a6d;
  font-size: 1rem;
}

.session-name {
  font-weight: bold;
  color: #d37315;
  font-size: 1.2rem;
  margin-top: 15px;
  border-left: 4px solid #d37315;
  padding-left: 10px;
}

.speaker-avatar {
  border: 3px solid #1c5a6d;
  transition: transform 0.3s ease;
}

.speaker-avatar:hover {
  transform: scale(1.05);
}

.bio-content {
  color: #1c5a6d;
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: justify;
  background-color: #f5f9fa;
  padding: 15px;
  border-left: 4px solid #1c5a6d;
  border-radius: 0 8px 8px 0;
}

.italic {
  font-style: italic;
}


@media (max-width: 768px) {
  .hero-title {
    font-size: 1.2rem;
  }

  .session-list li {
    font-size: 0.9rem;
  }

  .speaker-avatar {
    size: 100px !important;
  }
}
</style>
