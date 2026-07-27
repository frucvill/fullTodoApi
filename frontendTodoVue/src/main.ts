import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
//import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' //Iconos

//Pinia
import { createPinia } from 'pinia'

//Router
import router from './router'

const vuetify = createVuetify({
  //components,
  directives,
  theme: {
    defaultTheme: 'light'
  }
})

const pinia = createPinia()
const app = createApp(App)
app.use(vuetify)
app.use(pinia)
app.use(router)
app.mount('#app')

//createApp(App).mount('#app')

