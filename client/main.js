import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import VueTracker from 'vue-meteor-tracker';
import VueMaterial from 'vue-material/dist/vue-material.debug.js';

Vue.use(VueMaterial);
Vue.use(VueTracker);

import App from './components/App.vue';

Meteor.startup(() => {
  new Vue({
    render: h => h(App),
  }).$mount('app');
});
