<script setup>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import SmallCard from "@/components/SmallCard.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import BannerImage from "@/components/BannerImage.vue";

import alkaloidLogo from "@/assets/sponsors/Alkaloid.webp";
import replekLogo from "@/assets/sponsors/Replek.webp";
import eurofarmLogo from "@/assets/sponsors/EuroFarm.webp";
import plivaTevaLogo from "@/assets/sponsors/Pliva teva.webp";
import salveoLogo from "@/assets/sponsors/Salveo.webp";
import pharmaSLogo from "@/assets/sponsors/PharmaS.webp";
import galenikaLogo from "@/assets/sponsors/Galenika.webp";

const sponsorTiers = [
  {
    title: "Platinum Sponsor",
    tierClass: "tier-platinum",
    cardCols: { cols: 12, sm: 8, md: 6 },
    imgHeight: 120,
    items: [
      { name: "Alkaloid", logo: alkaloidLogo, alt: "Alkaloid" }
    ]
  },
  {
    title: "Golden Sponsors",
    tierClass: "tier-gold",
    cardCols: { cols: 12, sm: 4, md: 4 },
    imgHeight: 90,
    items: [
      { name: "Replek", logo: replekLogo, alt: "Replek" },
      { name: "EuroFarm", logo: eurofarmLogo, alt: "EuroFarm" },
      { name: "Pliva Teva", logo: plivaTevaLogo, alt: "Pliva Teva" }
    ]
  },
  {
    title: "Silver Sponsors",
    tierClass: "tier-silver",
    cardCols: { cols: 12, sm: 6, md: 5 },
    imgHeight: 80,
    items: [
      { name: "Salveo", logo: salveoLogo, alt: "Salveo" },
      { name: "PharmaS", logo: pharmaSLogo, alt: "PharmaS" }
    ]
  },
  {
    title: "Bronze Sponsor",
    tierClass: "tier-bronze",
    cardCols: { cols: 12, sm: 6, md: 4 },
    imgHeight: 70,
    items: [
      { name: "Galenika", logo: galenikaLogo, alt: "Galenika" }
    ]
  }
];
</script>

<template>
  <div>
    <banner-image />
    <base-container>
      <!-- Sponsors Section -->
      <v-card rounded="xl" class="mb-5 pa-2 mt-5 text-center title-card">
        <v-card-text class="text-h5 font-weight-bold uppercase">Sponsors</v-card-text>
      </v-card>

      <base-card class="mt-5 pa-4 pa-md-6">
        <div v-for="(tier, tierIndex) in sponsorTiers" :key="tier.title" :class="{ 'mt-8': tierIndex > 0 }">
          <div class="tier-badge-container mb-4">
            <span class="tier-badge" :class="tier.tierClass">
              {{ tier.title }}
            </span>
          </div>

          <v-row justify="center" align="center" class="sponsor-row">
            <v-col v-for="sponsor in tier.items" :key="sponsor.name" :cols="tier.cardCols.cols" :sm="tier.cardCols.sm"
              :md="tier.cardCols.md" class="d-flex justify-center">
              <div class="sponsor-card d-flex align-center justify-center pa-4">
                <v-img :src="sponsor.logo" :alt="sponsor.alt" :max-height="tier.imgHeight" width="100%" contain
                  class="sponsor-img" />
              </div>
            </v-col>
          </v-row>

          <v-divider v-if="tierIndex < sponsorTiers.length - 1" class="my-6 tier-divider" />
        </div>
      </base-card>

      <!-- Page Title -->
      <v-card rounded="xl" class="mb-5 pa-2 mt-8 text-center title-card">
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

/* Sponsor Styles */
.tier-badge-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tier-badge {
  display: inline-block;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 1.05rem;
  padding: 6px 28px;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.tier-platinum {
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #cbd5e1 100%);
  color: #1e293b;
  box-shadow: 0 2px 8px rgba(148, 163, 184, 0.25);
  border-color: #94a3b8;
}

.tier-gold {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #f59e0b 100%);
  color: #78350f;
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.25);
  border-color: #d97706;
}

.tier-silver {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
  color: #334155;
  box-shadow: 0 2px 8px rgba(203, 213, 225, 0.25);
  border-color: #cbd5e1;
}

.tier-bronze {
  background: linear-gradient(135deg, #ffedd5 0%, #fed7aa 50%, #ea580c 100%);
  color: #7c2d12;
  box-shadow: 0 2px 8px rgba(234, 88, 12, 0.25);
  border-color: #c2410c;
}

.sponsor-card {
  width: 100%;
  min-height: 110px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.25s ease-in-out;
}

.sponsor-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  border-color: #94a3b8;
}

.sponsor-img {
  max-width: 100%;
}

.tier-divider {
  border-color: rgba(28, 90, 109, 0.15) !important;
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

  .tier-badge {
    font-size: 0.9rem;
    padding: 5px 18px;
  }

  .sponsor-card {
    min-height: 90px;
  }
}
</style>
