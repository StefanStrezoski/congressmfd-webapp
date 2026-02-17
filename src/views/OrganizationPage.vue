<script setup>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseList from "@/components/BaseList.vue";
import SmallCard from "@/components/SmallCard.vue";
import BannerImage from "@/components/BannerImage.vue";
</script>

<template>
  <div>
    <banner-image />
    <base-container>
      <!-- Organizing Committee -->
      <v-row>
        <v-col cols="12">
          <v-card rounded="xl" class="mb-2 pa-1 text-center title-card">
            <v-card-text><span class="text-h5">Organizing Committee</span></v-card-text>
          </v-card>
          <small-card>
            <base-list class="org-items">
              <li><b>Rumenka Petkovska</b>, Ss. Cyril and Methodius University in Skopje, Faculty of Pharmacy / Chair
              </li>
              <li><b>Liljana Anastasova</b>, Ss. Cyril and Methodius University in Skopje, Faculty of Pharmacy /
                Secretary
              </li>
              <li>Ana Trajkovska Matevska, Ss. Cyril and Methodius University in Skopje, Faculty of Pharmacy</li>
              <li>Blagoj Achevski, Ss. Cyril and Methodius University in Skopje, Faculty of Pharmacy</li>
              <li>Evgenija Mihajloska, Ss. Cyril and Methodius University in Skopje, Faculty of Pharmacy</li>
              <li>Zoran Zivic, Ss. Cyril and Methodius University in Skopje, Faculty of Pharmacy</li>
              <li>Biljana Taneva, Alkaloid AD Skopje</li>
            </base-list>
          </small-card>
        </v-col>
      </v-row>

      <!-- Advisory Committee -->
      <v-row class="mt-5">
        <v-col cols="12">
          <v-card rounded="xl" class="mb-2 pa-1 text-center title-card">
            <v-card-text><span class="text-h5">Advisory Committee</span></v-card-text>
          </v-card>
          <small-card>
            <v-row>
              <v-col cols="12" md="6">
                <base-list class="org-items">
                  <li>Aleksandar Dimovski – N. Macedonia</li>
                  <li>Aneta Dimitrovska – N. Macedonia</li>
                  <li>Biljana Bauer – N. Macedonia</li>
                  <li>Georgi Momekov - Bulgaria</li>
                  <li>Kristina Mladenovska – N. Macedonia</li>
                  <li>Katerina Goracinova – N. Macedonia</li>
                  <li>Lidija Petrusevska Tozi – N. Macedonia</li>
                  <li>Ljubica Suturkova – N. Macedonia</li>
                </base-list>
              </v-col>
              <v-col cols="12" md="6">
                <base-list class="org-items">
                  <li>Mirza Dedic – Bosnia and Herzegovina</li>
                  <li>Renata Slaveska Raicki – N. Macedonia</li>
                  <li>Rumenka Petkovska – N. Macedonia</li>
                  <li>Suzana Trajkovic Jolevska – N. Macedonia</li>
                  <li>Svetlana Kulevanova – N. Macedonia</li>
                  <li>Tatjana Kadifkova Panovska – N. Macedonia</li>
                  <li>Zrinka Rajic – Croatia</li>
                  <li>Zoran Kavrakovski – N. Macedonia</li>
                  <li>Zoran Sterjev – N. Macedonia</li>
                </base-list>
              </v-col>
            </v-row>
          </small-card>
        </v-col>
      </v-row>

      <!-- Scientific Committee -->
      <v-row class="mt-5">
        <v-col cols="12">
          <v-card rounded="xl" class="mb-2 pa-1 text-center title-card">
            <v-card-text><span class="text-h5">Scientific Committee</span></v-card-text>
          </v-card>
          <small-card>
            <v-row>
              <v-col cols="12" class="text-center mb-4">
                <base-list class="org-items d-inline-block">
                  <li><b>Marija Glavas Dodov</b>, Ss. Cyril and Methodius University in Skopje, Faculty of Pharmacy /
                    Chair</li>
                  <li><b>Dushko Shalabalija</b>, Ss. Cyril and Methodius University in Skopje, Faculty of Pharmacy /
                    Secretary</li>
                  <li><b>Ljubica Mihailova</b>, Ss. Cyril and Methodius University in Skopje, Faculty of Pharmacy /
                    Secretary</li>
                </base-list>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <base-list class="org-items">
                  <li>Aleksandra Grozdanova – N. Macedonia</li>
                  <li>Aleksandra Kapedanovska Nestorovska – N. Macedonia</li>
                  <li>Ana Poceva Panovska – N. Macedonia</li>
                  <li>Anđelija Malenović – Serbia</li>
                  <li>Beti Djurdjic – Montenegro</li>
                  <li>Betul Arica Yegin - Turkey</li>
                  <li>Dusan Misic – Poland</li>
                  <li>Edina Vranic – Bosnia and Herzegovina</li>
                  <li>Gjose Stefkov – N. Macedonia</li>
                  <li>Ivana Cvetkovikj Karanfilova – N. Macedonia</li>
                  <li>Jasmina Tonic Ribarska – N. Macedonia</li>
                  <li>Katerina Ancevska Netkovska – N. Macedonia</li>
                  <li>Katerina Brezovska – N. Macedonia</li>
                  <li>Liljana Anastasova – N. Macedonia</li>
                  <li>Maja Ortner Hadžiabdić – Croatia</li>
                  <li>Maja Simonoska Crcarevska – N. Macedonia</li>
                </base-list>
              </v-col>
              <v-col cols="6">
                <base-list class="org-items">
                  <li>Marija Hiljadnikova Bajro – N. Macedonia</li>
                  <li>Marija Karapandzova – N. Macedonia</li>
                  <li>Marija Staninova Stojovska – N. Macedonia</li>
                  <li>Marijana Curcic – Serbia</li>
                  <li>Mario Jug – Croatia</li>
                  <li>Mirko Trajkovski – Switzerland</li>
                  <li>Jelena Acevska – N. Macedonia</li>
                  <li>Nadica Matevska Geskovska – N. Macedonia</li>
                  <li>Natalija Nakov – N. Macedonia</li>
                  <li>Nikola Geskovski – N. Macedonia</li>
                  <li>Sharareh Salar-Behzadi – Austria</li>
                  <li>Slavica Tudzarova-Trajkovska – USA</li>
                  <li>Tanja Petreska – North Macedonia</li>
                  <li>Vladimír Wsól – Czech Republic</li>
                  <li>Zaneta Nikolovska-Coleska – USA</li>
                  <li>Zorica Naumovska – N. Macedonia</li>
                </base-list>
              </v-col>
            </v-row>
          </small-card>
        </v-col>
      </v-row>
    </base-container>
  </div>
</template>

<style scoped>
.org-items {
  list-style-type: none;
  text-align: left;
  padding: 0;
}

.org-items li {
  margin-bottom: 4px;
  font-size: 0.95rem;
}

.title-card {
  background-color: #1c5a6d;
  color: white;
}

@media (max-width: 768px) {
  .org-items li {
    font-size: 0.8rem;
  }
}
</style>
