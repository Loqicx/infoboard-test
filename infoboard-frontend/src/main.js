

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { initializeApp } from 'firebase/app'
import App from './App.vue'
import router from './router'


// const firebaseConfig = {
//     redacted
//   };

// initializeApp(firebaseConfig);



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
