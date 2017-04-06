<template>
  <div class="app">
    <md-tabs>
      <md-tab id="simple-vue" md-label="Simple Vue">
        <simple-vue-example></simple-vue-example>
      </md-tab>
      <md-tab id="simple-session-state" md-label="Session State">
        <simple-session-state-example></simple-session-state-example>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import SimpleVueExample from './simple-vue-example.vue';
import SimpleSessionStateExample from './simple-session-state-example.vue';

export default {
  components: {
    'simple-vue-example': SimpleVueExample,
    'simple-session-state-example': SimpleSessionStateExample
  }
};
</script>

<style>

</style>
