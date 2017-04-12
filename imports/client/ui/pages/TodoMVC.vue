<template>
  <div class="todo-mvc-app">
	  <form novalidate @submit.stop.prevent="saveNewTodo">
		  <md-input-container md-inline>
			  <label>Input New Todo</label>
			  <md-input v-model="newTodo"></md-input>
		  </md-input-container>
	  </form>

	  <md-table-card v-if="todos.length > 0">
		  <md-toolbar>
			  <h1 class="md-title">Todo Table</h1>

			  <md-menu md-size="4">
				  <md-button class="md-icon-button" md-menu-trigger>
					  <md-icon>filter_list</md-icon>
				  </md-button>

				  <md-menu-content>
					  <md-menu-item @click.native="toggleAll">
						  <md-icon>update</md-icon>
						  <span>Toggle All</span>
					  </md-menu-item>

					  <md-menu-item @click.native="removeAll">
						  <md-icon>delete</md-icon>
						  <span>Delete All</span>
					  </md-menu-item>
				  </md-menu-content>
			  </md-menu>

			  <md-button class="md-icon-button">
				  <md-icon>search</md-icon>
			  </md-button>
		  </md-toolbar>

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

	  <md-table-card v-else>
			<p>No Data</p>
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
	    isCheckedAll: false,
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
      return Todos.find({}, {sort: {createdAt: -1}})
	  }
  },
	methods: {
    toggleAll() {
	    this.isCheckedAll = !this.isCheckedAll;
	    Meteor.call('todos.toggleAll', this.isCheckedAll, this.todos.map(t => t._id));
    },
		removeAll() {
      Meteor.call('todos.removeAll', this.todos.map(t => t._id));
		},
		saveNewTodo(e) {
		  Meteor.call('todos.insert', this.newTodo);
		  this.newTodo = '';
		},
		onPagination({page, size}) {
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
