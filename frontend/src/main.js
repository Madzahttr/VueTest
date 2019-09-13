import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.devtools = true;

import Bridge from './wailsbridge';
import router from './router'

const vue = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

Bridge.Start(() => {});
