<template>
  <div class="todo-mvc-app">

	  <form novalidate @submit.stop.prevent="saveNewTodo">
		  <md-input-container md-inline>
			  <label>Input New Todo</label>
			  <md-input v-model="newTodo"></md-input>
		  </md-input-container>
	  </form>

	  <md-table-card>
		  <md-table>
			  <md-table-header>
				  <md-table-row>
					  <md-table-head>Checked</md-table-head>
					  <md-table-head>Text</md-table-head>
					  <md-table-head>Create At</md-table-head>
					  <md-table-head>Actions</md-table-head>
				  </md-table-row>
			  </md-table-header>

			  <md-table-body>
				  <todo-item v-for="todo in todos" :todo="todo" :key="todo._id"></todo-item>
			  </md-table-body>
		  </md-table>

		  <md-table-pagination
				  :md-size="size"
				  :md-total="total"
				  :md-page="page"
				  md-label="Rows"
				  md-separator="of"
				  :md-page-options="[5, 10, 25, 50]"
				  @pagination="onPagination"></md-table-pagination>
	  </md-table-card>
  </div>
</template>

<script>
import {Todos} from '/imports/api/collections.js';

import TodoItem from '/imports/client/ui/components/todos/TodoItem.vue';

export default {
  data() {
    return {
      newTodo: '',
	    allTodosChecked: false,
	    size: 5,
	    page: 1,
	    total: null,
    }
  },
	components: {
	  'todo-item': TodoItem
	},
  meteor: {
    subscribe: {
      'todos'() {
				return [this.page, this.size];
      }
    },
	  todos() {
      return Todos.find({})
	  }
  },
	methods: {
		saveNewTodo(e) {
		  Meteor.call('todos.insert', this.newTodo);
		  this.newTodo = '';
		},
		onPagination({page, size}) {
			console.log('onPagination page:', page, ', size:', size);
			this.page = page;
			this.size = size;
			Meteor.call('todos.count', (err, res) => {
			  console.log(res);
			  this.total = res;
			});
		}
	},
	created() {
		Meteor.call('todos.count', (err, res) => {
			console.log(res);
			this.total = res;
		});
	}
};
</script>

<style lang="stylus" scoped>

</style>
