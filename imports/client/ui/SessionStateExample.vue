<template>
  <div class="simple-session-state-example">
    <div class="main-content">
      <md-button class="md-raised md-primary" @click.native="handleClick">Click me {{count}} times</md-button>
    </div>
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
