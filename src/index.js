import Vue from 'vue';
import jQuery from 'jquery';

import components from './components/';
import app from './app.vue';
import store from './store/';

window.$ = jQuery.noConflict();

// Register the global components so they don't need to be included in every page explicitly
Object.keys(components).forEach((key) => {
  let name = key.replace(/(\w)/, (v) => v.toUpperCase());

  // With the v- prefix
  Vue.component(`v${name}`, components[key]);
});

// Initialize the entry component
new Vue({
  store,
  render: (h)=>(<app></app>)
}).$mount('#app');