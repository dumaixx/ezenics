import Vue from 'vue';
import store from './store';
import App from './App.vue';

import vuetify from './plugins/vuetify';


new Vue({
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');
