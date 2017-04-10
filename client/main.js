import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import VueTracker from 'vue-meteor-tracker';
import VueMaterial from 'vue-material/dist/vue-material.debug.js';
import 'vue-material/dist/vue-material.css';
// Import the router factory
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2';

Vue.use(VueMaterial);
Vue.use(VueTracker);

import App from '../imports/client/ui/layouts/App.vue';

// Create router instance
const routerFactory = new RouterFactory({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior,
});

Meteor.startup(() => {
  const router = routerFactory.create();

  new Vue({
    router,
    ...App
  }).$mount('app');
});
