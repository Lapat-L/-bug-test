import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment'
// import VueSwal from 'vue-swal'
import VueSwal2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.prototype.moment = moment

Vue.use(VueAxios, axios)
// Vue.use(VueSwal)
Vue.use(VueSwal2)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
