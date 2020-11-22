import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTerminal, faCode } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookSquare, faInstagram, faBars, faVuejs, faTerminal, faCode)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
