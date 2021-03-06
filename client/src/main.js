// [IMPORT] //
import aos from 'aos'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Viewer from 'v-viewer'
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import VueRellax from 'vue-rellax'
import 'aos/dist/aos.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'tiny-slider/src/tiny-slider.scss'
import 'viewerjs/dist/viewer.css'


// [IMPORT] Personal //
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import './assets/styles/bootstrap-override.scss'
import './assets/styles/style.scss'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Viewer)
Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: require('./assets/media/err.png'),
	loading: require('./assets/media/loading.gif'),
	attempt: 1
})
Vue.use(VueRellax)



Vue.config.productionTip = false


new Vue({
  router,
  store,
  created() { aos.init() },
  render: h => h(App)
}).$mount('#app')
