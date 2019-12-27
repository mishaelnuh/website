import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './custom.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCoffee, faPenFancy, faDog, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGlobeAmericas)
library.add(faCoffee)
library.add(faPenFancy)
library.add(faDog)
library.add(faTwitter)
library.add(faLinkedin)
library.add(faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')
