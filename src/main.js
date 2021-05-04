import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import * as VueGoogleMaps from 'vue2-google-maps'
import 'vue-select/dist/vue-select.css'
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)


axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}


Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    libraries: 'places',
  },
  // installComponents: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
