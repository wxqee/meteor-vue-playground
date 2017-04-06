<template>
  <div class="app">
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

<style>
.app {
  width: 100%;
  background-color: #faa;
}
</style>
