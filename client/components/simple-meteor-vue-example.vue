<template>
  <div class="simple-meteor-vue-example">
    <h3>simple-meteor-vue-example <small>Vue only component example</small></h3>
    <button @click="handleClick">Click me {{count}} times</button>
  </div>
</template>

<script>
import {Session} from 'meteor/session';

// init
Session.setDefault('count', 0);

// component
export default {
  data() {
    return {
      count: 999
    };
  },
  meteor: {
    data: {
      count() {
        // Meteor reactive data should be in js block.
        return Session.get('count');
      }
    }
  },
  methods: {
    handleClick() {
      Session.set('count', this.count + 1);
    }
  }
};
</script>

<style lang="css" scoped>
/* css here */
</style>
