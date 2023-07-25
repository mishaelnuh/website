import {createApp} from 'vue'
import App from './App.vue'
import Router from './router'
import BootstrapVueNext from 'bootstrap-vue-next'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import './custom.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCoffee, faDiceD20, faDog, faGlobeAmericas, faCopyright, faHome, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome)
library.add(faArrowLeft)
library.add(faArrowRight)
library.add(faCopyright)
library.add(faGlobeAmericas)
library.add(faCoffee)
library.add(faDiceD20)
library.add(faDog)
library.add(faTwitter)
library.add(faLinkedin)
library.add(faGithub)
library.add(faEnvelope)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(Router)
  .use(BootstrapVueNext)
  .mount('#app')