<template>
  <div class="app">
	  <div class="phone-viewport">
		  <md-toolbar>
			  <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
				  <md-icon class="md-accent">menu</md-icon>
			  </md-button>

			  <h2 class="md-title" style="flex: 1">My App</h2>

			  <span v-if="user">
				  <span class="md-body-1">{{user.profile.name}}</span>
				  <md-button @click.native="logout">
					  Logout
				  </md-button>

			  </span>
			  <span v-else>
				  <router-link :to="{name: 'login', query: {returnUrl: returnUrl}}">Login</router-link>
			  </span>
		  </md-toolbar>

		  <div>
			  <router-view></router-view>
		  </div>

		  <md-sidenav class="md-left" ref="leftSidenav" @open="handleSideNavLeftOpen">
			  <md-toolbar class="md-large">
				  <div class="md-toolbar-container">
					  <h3 class="md-title">Demos and pages</h3>
				  </div>
			  </md-toolbar>

			  <router-nav></router-nav>
		  </md-sidenav>
	  </div>
  </div>
</template>

<script>
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import RouterNav from '/imports/client/ui/components/RouterNav.vue';

export default {
  components: {
    'router-nav': RouterNav
  },
	data: () => ({
		returnUrl: encodeURIComponent(location.href),
	}),
	meteor: {
    user() {
      return Meteor.user();
    }
	},
	methods: {
    logout() {
	    Accounts.logout((err) => {
	      if (err) {
		      alert('logout error:' + err);
		      return;
	      }
	    });
    },
		toggleLeftSidenav() {
			this.$refs.leftSidenav.toggle();
		},
		handleSideNavLeftOpen() {
		  document.body.scrollTop = 0;
		}
	}
};
</script>

<style>

</style>
