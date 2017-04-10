<template>
  <div class="app">
	  <div class="phone-viewport">
		  <md-toolbar>
			  <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
				  <md-icon class="md-accent">menu</md-icon>
			  </md-button>

			  <h2 class="md-title">My App</h2>
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
import RouterNav from '/imports/client/ui/components/RouterNav.vue';

export default {
  components: {
    'router-nav': RouterNav
  },
	methods: {
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
