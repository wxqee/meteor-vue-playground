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

		  <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
			  <md-toolbar class="md-large">
				  <div class="md-toolbar-container">
					  <h3 class="md-title">Sidenav content</h3>
				  </div>
			  </md-toolbar>

			  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
		  </md-sidenav>
	  </div>
  </div>
</template>

<script>
//import SimpleVueExample from './VueExample.vue';
//import SimpleSessionStateExample from './SessionStateExample.vue';
//import PageNotFound from './PageNotFound.vue';

export default {
	methods: {
		toggleLeftSidenav() {
			this.$refs.leftSidenav.toggle();
		},
		open(ref) {
			console.log('Opened: ' + ref);
		},
		close(ref) {
			console.log('Closed: ' + ref);
		}
	}
};
</script>

<style>

</style>
