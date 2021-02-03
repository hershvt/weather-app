import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Chartkick.use(Chart))
import 'bootstrap/dist/css/bootstrap.css';
new Vue({
  render: h => h(App),
}).$mount('#app')
