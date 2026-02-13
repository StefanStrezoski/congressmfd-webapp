// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1c5a6d',
          secondary: '#6ba2a3',
          accent: '#81e6d9',
          error: '#f56565',
          warning: '#ed8936',
          info: '#4299e1',
          success: '#48bb78',
          surface: '#ffffff',
          background: '#f7fafc',
          text: '#3363b0'
        },
      },
    },
  },
})

