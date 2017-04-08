<template>
  <div class="simple-vue-example">
    <div class="main-content">
      <md-button class="md-raised md-primary" @click.native="handleClick">Click me {{count}} times</md-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    handleClick() {
      this.count += 1;
    }
  }
};
</script>

<style lang="css" scoped>
/* css here */
</style>
