<template>
  <div class="app">
	  <div v-if="$route.name">
		  <md-tabs>
			  <md-tab id="simple-vue" md-label="Simple Vue" :md-active="$route.name == 'vue'">
				  <simple-vue-example></simple-vue-example>
			  </md-tab>
			  <md-tab id="simple-session-state" md-label="Session State" :md-active="$route.name == 'session-state'">
				  <simple-session-state-example></simple-session-state-example>
			  </md-tab>
		  </md-tabs>
	  </div>
	  <div v-else>
		  <page-not-found></page-not-found>
	  </div>
  </div>
</template>

<script>
import SimpleVueExample from './VueExample.vue';
import SimpleSessionStateExample from './SessionStateExample.vue';
import PageNotFound from './PageNotFound.vue';

export default {
  components: {
    'simple-vue-example': SimpleVueExample,
    'simple-session-state-example': SimpleSessionStateExample,
	  'page-not-found': PageNotFound
  }
};
</script>

<style>

</style>
