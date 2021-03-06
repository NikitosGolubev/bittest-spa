import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store';
import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import AppCore from '@/core/adapters/vue-plugin-adapter';

import PublisherSubscriberPlugin from '@/core/plugins/publisher-subscriber';
import SdkPlugin from '@/core/plugins/sdk';

Vue.use(VueIziToast);
Vue.use(AppCore, {
  defaultPlugins: {
    'observer': PublisherSubscriberPlugin,
    'sdk': SdkPlugin,
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
