<script setup>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import brandLogo from "@/assets/LogoGNA.webp";
import metropolImage from "@/assets/metropol.webp";
import ohrid1 from '@/assets/ohrid1.webp';
import ohrid2 from '@/assets/ohrid2.webp';
import ohrid3 from '@/assets/ohrid3.webp';
import BannerImage from '@/components/BannerImage.vue';
</script>

<template>
  <div>
    <banner-image />
    <base-container>
      <v-card rounded="xl" class="mb-5 pa-2 text-center title-card">
        <v-card-text><b class="text-h5 font-weight-bold">Price list for Accommodation</b></v-card-text>
      </v-card>
      <v-card outlined class="mt-5 mb-5">
        <v-responsive>
          <v-table>
            <thead>
              <tr>
                <th class="text-center bg-teal-lighten-2 border text-sm-body-1">Hotel</th>
                <th class="text-center bg-teal-lighten-2 border text-sm-body-1">Accommodation</th>
                <th class="text-center bg-teal-lighten-2 border text-sm-body-1">Price per person/ <br />night for
                  half board</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="3" class="border text-center text-h6 cell-bg">
                  Hotel Metropol <br />
                  &#11088;&#11088;&#11088;&#11088; <br /> Hotel Bellevue <br /> &#11088;&#11088;&#11088;&#11088;
                </td>
                <td class="border text-center text-h6 cell-bg">Single</td>
                <td class="border text-center text-h6 cell-bg"><b>90 €</b></td>
              </tr>
              <tr>
                <td class="border text-center text-h6 cell-bg">Double</td>
                <td class="border text-center text-h6 cell-bg"><b>63 €</b></td>
              </tr>
              <tr>
                <td class="border text-center text-h6 cell-bg">Triple</td>
                <td class="border text-center text-h6 cell-bg"><b>56 €</b></td>
              </tr>
              <tr>
                <td rowspan="3" class="border text-center text-h6 cell-bg">
                  Hotel Tourist <br /> &#11088;&#11088;&#11088;
                </td>
                <td class="border text-center text-h6 cell-bg">Single</td>
                <td class="border text-center text-h6 cell-bg"><b>72 €</b></td>
              </tr>
              <tr>
                <td class="border text-center text-h6 cell-bg">Double</td>
                <td class="border text-center text-h6 cell-bg"><b>50 €</b></td>
              </tr>
              <tr>
                <td class="border text-center text-h6 cell-bg">Triple</td>
                <td class="border text-center text-h6 cell-bg"><b>45 €</b></td>
              </tr>
            </tbody>
          </v-table>
        </v-responsive>
      </v-card>
      <base-card class="mt-5 mb-10">
        <h3 class="subtitle mb-3">CANCELLATION OF ACCOMMODATION</h3>
        <ul class="mb-5 text-left custom-list">
          <li>For cancellation <b class="date-color">UNTIL August 15th, 2026</b>, payments will be fully refunded, minus
            bank fees.</li>
          <li>For cancellation <b class="date-color">UNTIL September 1st, 2026</b>, up to 50% of the paid amount will be
            refunded, minus
            bank fees.
          </li>
          <li>For cancellation <b class="date-color">AFTER September 1st, 2026</b>, no refund of the paid amount will be
            issued.</li>
        </ul>

        <base-paragraph class="text-left mt-4 lh-lg">
          Confirmation of room reservations is issued <b>ONLY</b> upon receipt of a <b>PAID</b> pro forma invoice.
          <br />
          Accommodation may be used only after full advance payment has been made.
        </base-paragraph>

        <v-alert type="warning" variant="tonal" class="mt-5 text-left" border="start">
          <b>ACCESS TO</b> the hotels <b>METROPOL, BELLEVUE AND TOURIST</b>, <br />
          WILL BE ALLOWED <b>ONLY FOR PERSONS WITH PAID REGISTRATION FEE</b>.
        </v-alert>
      </base-card>

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
                    href="https://maps.app.goo.gl/cMzvrKf9S9DRb9cr5" target="_blank">Location:</a></b> Settlement
                Konjsko,
                Ohrid
                6000</p>
              <p><v-icon color="secondary" class="mr-2">mdi-web</v-icon><a href="http://www.metropol-ohrid.com.mk"
                  target="_blank" class="link-text">www.metropol-ohrid.com.mk</a></p>
            </div>
          </v-col>
        </v-row>
      </base-card>

      <!-- Support Section -->
      <v-card rounded="xl" class="mt-10 mb-5 pa-1 text-center title-card">
        <v-card-text class="text-h5 font-weight-bold">Support</v-card-text>
      </v-card>
      <base-card>
        <div class="text-center">
          <base-paragraph class="text-center text-h6 subtitle-main mb-6">
            For all information and details about accommodation and transportation, please contact the agency:
          </base-paragraph>

          <v-row justify="center">
            <v-col cols="12" md="6">
              <small-card>
                <h3 class="contact-header font-weight-bold mb-3 text-h5">Global Net Adv</h3>
                <div class="contact-info text-center">
                  <p><b class="text-h6">Marjan Dimeski</b></p>
                  <v-divider class="my-2"></v-divider>
                  <p><v-icon size="small" class="mr-2">mdi-phone</v-icon> +389(0) 71 317 377</p>
                  <p><v-icon size="small" class="mr-2">mdi-email</v-icon> <a
                      href="mailto:globalnetadv@globalnetadv.mk">globalnetadv@globalnetadv.mk</a></p>
                  <p><v-icon size="small" class="mr-2">mdi-email</v-icon> <a
                      href="mailto:[EMAIL_ADDRESS]">globalneta@gmail.com</a></p>
                </div>
              </small-card>
            </v-col>
          </v-row>
          <v-img :src="brandLogo" width="140" class="mx-auto mt-6"></v-img>
        </div>
      </base-card>

      <!-- About Ohrid -->
      <v-card rounded="xl" class="mt-10 mb-5 pa-1 text-center title-card">
        <v-card-text class="text-h5 font-weight-bold">About Ohrid</v-card-text>
      </v-card>
      <base-card>
        <base-paragraph>
          Ohrid is the largest city on Lake Ohrid and the eighth largest city in the country. Ohrid is famous for having
          365 churches, one for each day of the year, which is why it is known as the “Balkan Jerusalem”. The city is
          rich
          in picturesque houses and monuments.
        </base-paragraph>
        <base-paragraph>
          In 1979 and 1980, Ohrid and Lake Ohrid were recognized as a <b>UNESCO World Heritage Site</b>. In fact, Ohrid
          is
          one of only 28 cities that are part of the UNESCO World Heritage Site and are both cultural and natural
          heritage. Ohrid is one of the leading tourist cities in North Macedonia.
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
              <li><a href="https://www.exploringmacedonia.com/ohrid.nspx" target="_blank">Ohrid - Exploring
                  Macedonia</a>
              </li>
              <li><a href="https://www.lonelyplanet.com/destinations/macedonia/southern-macedonia/ohrid"
                  target="_blank">Lonely Planet - Ohrid</a></li>
              <li><a href="https://www.tripadvisor.com/Attractions-g303864-Activities-Ohrid_Southwestern_Region.html"
                  target="_blank">TripAdvisor - Ohrid</a>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" md="6">
            <h4 class="link-group-title mb-2">Multimedia</h4>
            <ul class="link-list text-left">
              <li><v-icon size="small" class="mr-1">mdi-youtube</v-icon><a
                  href="https://www.youtube.com/watch?v=n20H9YcYrAE" target="_blank">Ohrid Video 1</a></li>
              <li><v-icon size="small" class="mr-1">mdi-youtube</v-icon><a
                  href="https://www.youtube.com/watch?v=QcIqMdjvO7s" target="_blank">Ohrid Video 2</a></li>
            </ul>
          </v-col>
        </v-row>
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

.subtitle-main {
  color: #d37315;
  font-weight: bold;
  font-size: 1.1rem;
  text-align: center;
}

.contact-header {
  color: #1c5a6d;
  font-size: 1.3rem;
  text-align: center;
}

.subtitle-small {
  color: #d37315;
  font-weight: bold;
  font-size: 0.9rem;
  text-align: center;
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

.location-details p,
.contact-block p,
.contact-block-centered p {
  margin-bottom: 8px;
  font-size: 1rem;
  color: #125280;
}

.agency-name {
  color: #1c5a6d;
  font-weight: bold;
  font-size: 1.2rem;
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

.cell-bg {
  background-color: #d0ece9;
}

.custom-list {
  list-style-type: disc;
  padding-left: 20px;
  color: #125280;
}

.custom-list li {
  margin-bottom: 8px;
  font-size: 1rem;
}

.lh-lg {
  line-height: 1.8;
}

.date-color {
  color: #d37315;
}

@media (max-width: 768px) {
  .text-h5 {
    font-size: 1.25rem !important;
  }
}
</style>
