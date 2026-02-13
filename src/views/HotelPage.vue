<script setup>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import SmallCard from "@/components/SmallCard.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import brandLogo from "@/assets/LogoGNA.png";
import metropolImage from "@/assets/metropol.png";
import ohrid1 from '@/assets/ohrid1.png';
import ohrid2 from '@/assets/ohrid2.png';
import ohrid3 from '@/assets/ohrid3.png';
</script>

<template>
  <base-container>
    <!-- Venue Location -->
    <v-card rounded="xl" class="mb-5 pa-2 text-center title-card">
      <v-card-text class="text-h5 font-weight-bold">VENUE LOCATION</v-card-text>
    </v-card>

    <base-card>
      <h3 class="section-header mb-3">Metropol Lake Resort, Ohrid</h3>
      <base-paragraph>
        The Congress will be held in <b>Metropol Lake Resort, Ohrid</b>, Republic of North Macedonia.
      </base-paragraph>

      <v-row class="mt-4" align="center">
        <v-col cols="12" md="6">
          <v-img :src="metropolImage" rounded="xl" elevation="4" alt="Metropol Lake Resort"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <div class="location-details text-left">
            <p><v-icon color="secondary" class="mr-2">mdi-map-marker</v-icon><b><a
                  href="https://maps.app.goo.gl/cMzvrKf9S9DRb9cr5" target="_blank">Location:</a></b> Settlement Konjsko,
              Ohrid
              6000</p>
            <p><v-icon color="secondary" class="mr-2">mdi-web</v-icon><a href="http://www.metropol-ohrid.com.mk"
                target="_blank" class="link-text">www.metropol-ohrid.com.mk</a></p>
          </div>
        </v-col>
      </v-row>
    </base-card>

    <!-- Support Section -->
    <v-card rounded="xl" class="mt-10 mb-5 pa-1 text-center title-card-secondary">
      <v-card-text class="text-h6 font-weight-bold">Support</v-card-text>
    </v-card>
    <base-card>
      <h4 class="subtitle mb-3">Hotel reservations and transportation</h4>
      <div class="contact-block text-left">
        <v-img :src="brandLogo" width="120" class="mb-4"></v-img>
        <p><b>Global Net Adv</b>, Professional Congress Organizer</p>
        <p><b>Marjan Dimeski</b>, General manager</p>
        <div class="mt-3">
          <p><v-icon size="small" class="mr-2">mdi-phone</v-icon><b>Mobile/WhatsApp/Viber:</b> +389(0) 71 317 377</p>
          <p><v-icon size="small" class="mr-2">mdi-email</v-icon><b>Email:</b> globalnetadv@globalnetadv.mk &
            globalneta@gmail.com</p>
        </div>
      </div>
    </base-card>

    <!-- About Ohrid -->
    <v-card rounded="xl" class="mt-10 mb-5 pa-1 text-center title-card-secondary">
      <v-card-text class="text-h6 font-weight-bold">About Ohrid</v-card-text>
    </v-card>
    <base-card>
      <base-paragraph>
        Ohrid is the largest city on Lake Ohrid and the eighth largest city in the country. Ohrid is famous for having
        365 churches, one for each day of the year, which is why it is known as the “Balkan Jerusalem”. The city is rich
        in picturesque houses and monuments.
      </base-paragraph>
      <base-paragraph>
        In 1979 and 1980, Ohrid and Lake Ohrid were recognized as a <b>UNESCO World Heritage Site</b>. In fact, Ohrid is
        one of only 28 cities that are part of the UNESCO World Heritage Site and are both cultural and natural
        heritage. Ohrid is one of the leading tourist cities in North Macedonia.
      </base-paragraph>
      <base-paragraph class="mt-4">
        More information can be downloaded on: <a href="http://localhost/mfdk/wp-content/uploads/2019/07/ohrid.pdf"
          class="link-text">ohrid.pdf</a>
      </base-paragraph>

      <!-- Images Grid -->
      <v-row class="mt-5" justify="center">
        <v-col cols="4"><v-img :src="ohrid1" rounded="lg" alt="Ohrid view 1"></v-img></v-col>
        <v-col cols="4"><v-img :src="ohrid2" rounded="lg" alt="Ohrid view 2"></v-img></v-col>
        <v-col cols="4"><v-img :src="ohrid3" rounded="lg" alt="Ohrid view 3"></v-img></v-col>
      </v-row>
    </base-card>

    <!-- Useful Links -->
    <v-card rounded="xl" class="mt-10 mb-5 pa-1 text-center title-card-secondary">
      <v-card-text class="text-h6 font-weight-bold">Useful links and multimedia</v-card-text>
    </v-card>
    <base-card class="mb-10">
      <v-row>
        <v-col cols="12" md="6">
          <h4 class="link-group-title mb-2">General Information</h4>
          <ul class="link-list text-left">
            <li><a href="http://www.ohrid.com.mk/" target="_blank">Ohrid.com.mk</a></li>
            <li><a href="http://visitohrid.org/" target="_blank">VisitOhrid.org</a></li>
            <li><a href="http://www.exploringmacedonia.com/ohrid.nspx" target="_blank">Exploring Macedonia - Ohrid</a>
            </li>
            <li><a href="http://www.lonelyplanet.com/macedonia/southern-macedonia/ohrid" target="_blank">Lonely Planet
                Guide</a></li>
            <li><a href="http://www.tripadvisor.com/Attractions-g303864-Activities-Ohrid_Southwestern_Region.html"
                target="_blank">TripAdvisor Attractions</a></li>
          </ul>
        </v-col>
        <v-col cols="12" md="6">
          <h4 class="link-group-title mb-2">Multimedia</h4>
          <ul class="link-list text-left">
            <li><v-icon size="small" class="mr-1">mdi-youtube</v-icon><a
                href="https://www.youtube.com/watch?v=n20H9YcYrAE" target="_blank">Ohrid Video 1</a></li>
            <li><v-icon size="small" class="mr-1">mdi-youtube</v-icon><a
                href="https://www.youtube.com/watch?v=CRgLmCQzEAo" target="_blank">Ohrid Video 2</a></li>
            <li><v-icon size="small" class="mr-1">mdi-youtube</v-icon><a
                href="https://www.youtube.com/watch?v=shPgaUHCHFc" target="_blank">Ohrid Video 3</a></li>
            <li><v-icon size="small" class="mr-1">mdi-youtube</v-icon><a
                href="https://www.youtube.com/watch?v=ig83XA3dDGw" target="_blank">Ohrid Video 4</a></li>
          </ul>
        </v-col>
      </v-row>
    </base-card>
  </base-container>
</template>

<style scoped>
.title-card {
  background-color: #1c5a6d;
  color: white;
}

.title-card-secondary {
  background-color: #6ba2a3;
  color: white;
}

.section-header {
  color: #1c5a6d;
  border-bottom: 2px solid #1c5a6d;
  padding-bottom: 5px;
  font-size: 1.4rem;
  text-align: left;
}

.subtitle {
  color: #d37315;
  font-weight: bold;
  font-size: 1.1rem;
  text-align: left;
}

.location-details p,
.contact-block p {
  margin-bottom: 8px;
  font-size: 1rem;
  color: #125280;
}

.link-text {
  color: #d37315;
  text-decoration: none;
  font-weight: bold;
}

.link-text:hover {
  text-decoration: underline;
}

.link-group-title {
  color: #1c5a6d;
  font-weight: bold;
}

.link-list {
  list-style-type: none;
  padding-left: 0;
}

.link-list li {
  margin-bottom: 6px;
}

.link-list a {
  color: #d37315;
  text-decoration: none;
  font-size: 0.95rem;
}

.link-list a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .text-h5 {
    font-size: 1.25rem !important;
  }
}
</style>
