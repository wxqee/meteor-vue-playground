<template>
  <div class="todo-mvc-app">

	  <md-input-container md-inline>
		  <label>Input New Todo</label>
		  <md-input></md-input>
	  </md-input-container>


	  <md-table>
		  <md-table-header>
			  <md-table-row>
				  <md-table-head>ID</md-table-head>
				  <md-table-head>Text</md-table-head>
				  <md-table-head>Create At</md-table-head>
			  </md-table-row>
		  </md-table-header>

		  <md-table-body>
			  <todo-item v-for="todo in todos" :todo="todo" :key="todo._id"></todo-item>
		  </md-table-body>
	  </md-table>
  </div>
</template>

<script>
import {Todos} from '/imports/api/collections.js';
window.Todos = Todos;

import TodoItem from '/imports/client/ui/components/todos/TodoItem.vue';

export default {
	components: {
	  'todo-item': TodoItem
	},
  meteor: {
    subscribe: {
      'todos': []
    },
	  todos() {
      return Todos.find({})
	  }
  }
};
</script>

<style lang="stylus" scoped>

</style>
