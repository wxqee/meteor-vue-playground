<template>
  <div class="todo-mvc-app">

	  <form novalidate @submit.stop.prevent="saveNewTodo">
		  <md-input-container md-inline>
			  <label>Input New Todo</label>
			  <md-input v-model="newTodo"></md-input>
		  </md-input-container>
	  </form>


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

import TodoItem from '/imports/client/ui/components/todos/TodoItem.vue';

export default {
  data() {
    return {
      newTodo: ''
    }
  },
	components: {
	  'todo-item': TodoItem
	},
  meteor: {
    subscribe: {
      'todos': []
    },
	  todos() {
      return Todos.find({}, {
        sort: {createdAt: -1}
      })
	  }
  },
	methods: {
		saveNewTodo(e) {
		  Meteor.call('todos.insert', this.newTodo);
		  this.newTodo = '';
		}
	}
};
</script>

<style lang="stylus" scoped>

</style>
