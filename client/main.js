import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import VueTracker from 'vue-meteor-tracker';

import App from './components/App.vue';

Vue.use(VueTracker);

Meteor.startup(() => {
  new Vue({
    render: h => h(App),
  }).$mount('app');
});
