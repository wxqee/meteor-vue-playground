<template>
  <div class="app">
    <simple-vue-example></simple-vue-example>
    <hr>
    <simple-meteor-vue-example></simple-meteor-vue-example>
  </div>
</template>

<script>
import SimpleVueExample from './simple-vue-example.vue';
import SimpleMeteorVueExample from './simple-meteor-vue-example.vue';

export default {
  components: {
    'simple-vue-example': SimpleVueExample,
    'simple-meteor-vue-example': SimpleMeteorVueExample
  }
};
</script>

<style>
.app {
  width: 100%;
  background-color: #faa;
}
</style>
