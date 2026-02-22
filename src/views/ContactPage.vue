<script setup>
import BaseContainer from "@/components/BaseContainer.vue";
import SmallCard from "@/components/SmallCard.vue";
import BannerImage from "@/components/BannerImage.vue";
import globalnetadv from "@/assets/LogoGNA.png";
</script>

<template>
  <div>
    <banner-image />
    <base-container>
      <!-- Page Title -->
      <v-card rounded="xl" class="mb-8 pa-2 text-center title-card">
        <v-card-text class="text-h5 font-weight-bold">CONTACT INFORMATION</v-card-text>
      </v-card>

      <v-row>
        <!-- Scientific Committee -->
        <v-col cols="12" md="4">
          <small-card class="h-100 contact-card">
            <div class="card-header-accent mb-4">
              <v-icon color="white" class="mr-2">mdi-flask-outline</v-icon>
              <span class="font-weight-bold">Scientific Committee</span>
            </div>
            <div class="contact-body text-left">
              <p class="org-name mb-3">Faculty of Pharmacy, <br />Ss. Cyril and Methodius University in Skopje</p>
              <div class="person-info">
                <p><b>Marija Glavas Dodov</b></p>
                <p class="role mb-2">Chair of Scientific Committee</p>
                <p class="contact-link">
                  <v-icon size="x-small" class="mr-1">mdi-email-outline</v-icon>
                  <a href="mailto:magl@ff.ukim.edu.mk">magl@ff.ukim.edu.mk</a>
                </p>
              </div>
            </div>
          </small-card>
        </v-col>

        <!-- Organizing Committee -->
        <v-col cols="12" md="4">
          <small-card class="h-100 contact-card">
            <div class="card-header-accent mb-4">
              <v-icon color="white" class="mr-2">mdi-account-group-outline</v-icon>
              <span class="font-weight-bold">Organizing Committee</span>
            </div>
            <div class="contact-body text-left">
              <p class="org-name mb-3">Macedonian Pharmaceutical Association (MPA)</p>

              <div class="person-info mb-4">
                <p><b>Rumenka Petkovska</b></p>
                <p class="role mb-2">Chair of Organizing Committee</p>
                <p class="contact-link">
                  <v-icon size="x-small" class="mr-1">mdi-email-outline</v-icon>
                  <a href="mailto:rupe@ff.ukim.edu.mk">rupe@ff.ukim.edu.mk</a>
                </p>
              </div>

              <div class="person-info">
                <p><b>Ivana Ceshmedjievska</b></p>
                <p class="role mb-2">Secretary</p>
                <p class="contact-link">
                  <v-icon size="x-small" class="mr-1">mdi-cellphone</v-icon>
                  <span>+389(0) 70 302 392</span>
                </p>
                <p class="contact-link">
                  <v-icon size="x-small" class="mr-1">mdi-email-outline</v-icon>
                  <a href="mailto:mfd.mpa.mk@gmail.com">mfd.mpa.mk@gmail.com</a>
                </p>
                <p class="contact-link ml-4">
                  <a href="mailto:mfd_mpa@yahoo.com">mfd_mpa@yahoo.com</a>
                </p>
              </div>
            </div>
          </small-card>
        </v-col>

        <!-- Logistics Agency -->
        <v-col cols="12" md="4">
          <small-card class="h-100 contact-card">
            <div class="card-header-accent mb-4" style="background-color: #d37315;">
              <v-icon color="white" class="mr-2">mdi-truck-delivery-outline</v-icon>
              <span class="font-weight-bold">Logistics & Implementation</span>
            </div>
            <div class="contact-body text-left">
              <p class="subtitle-small mb-3">
                For all information and details about technical and logistical support, accommodation, transportation,
                please contact the event implementation agency:
              </p>
              <p class="org-name mb-1">GLOBAL NET ADV</p>
              <div class="person-info">
                <p><b>Marjan Dimeski</b></p>
                <p class="contact-link mt-2">
                  <v-icon size="x-small" class="mr-1">mdi-cellphone</v-icon>
                  <span>+389 (0) 71 317 377</span>
                </p>
                <p class="contact-link">
                  <v-icon size="x-small" class="mr-1">mdi-email-outline</v-icon>
                  <a href="mailto:globalneta@gmail.com">globalneta@gmail.com</a>
                </p>
                <p class="contact-link ml-4">
                  <a href="mailto:globalnetadv@globalnetadv.mk">globalnetadv@globalnetadv.mk</a>
                </p>
                <v-img :src="globalnetadv" width="120" class="mt-4"></v-img>
              </div>
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

.contact-card {
  border: 1px solid #e0e0e0;
  transition: transform 0.2s;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.card-header-accent {
  background-color: #1c5a6d;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
}

.org-name {
  color: #1c5a6d;
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1.2;
}

.subtitle-small {
  font-size: 0.85rem;
  color: #6ba2a3;
}

.role {
  font-size: 0.9rem;
  color: #d37315;
  font-weight: 500;
}

.person-info p {
  margin-bottom: 2px;
  color: #2c3e50;
}

.contact-link {
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  color: #125280;
  overflow-wrap: break-word;
  word-break: break-word;
  min-width: 0;
}

.contact-link a {
  color: #125280;
  text-decoration: none;
  overflow-wrap: break-word;
  word-break: break-all;
}

.contact-link a:hover {
  text-decoration: underline;
}

@media (max-width: 960px) {
  .v-col {
    padding-bottom: 20px;
  }
}
</style>
