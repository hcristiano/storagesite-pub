import Vue from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import * as VueGoogleMaps from 'vue2-google-maps'
// import firebase from 'firebase/app'
// import 'firebase/firestore'

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB_5vZW53qefOF3oYJXVwoIbrMK7faHfFw',
    libraries: 'places'
  }
})


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
