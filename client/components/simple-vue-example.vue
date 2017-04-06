<template>
  <div class="simple-vue-example">
    <h3>simple-vue-example <small>Vue only component example</small></h3>
    <button @click="handleClick">Click me {{count}} times</button>
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
