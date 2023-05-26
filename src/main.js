import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueYouTubeEmbed from 'vue-youtube-embed'
import * as VueGoogleMaps from 'vue2-google-maps'
// import firebase from 'firebase/app'
// import 'firebase/firestore'

Vue.use(VueYouTubeEmbed)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB_5vZW53qefOF3oYJXVwoIbrMK7faHfFw',
    libraries: 'places'
  }
})


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
