import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createI18n } from "vue-i18n";
import en from './locales/en.json'
import mk from './locales/mk.json'

loadFonts()

const i18n = createI18n({
  legacy: false,
  locale: 'mk', // default language
  fallbackLocale: 'en',
  messages: { en, mk }
})

createApp(App)
  .use(i18n)
  .use(router)
  .use(vuetify)
  .mount('#app')
