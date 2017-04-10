<template>
	<md-table-row class="todo-item" :key="todo._id">
		<md-table-cell>
			<md-checkbox id="my-test3" name="my-test3" :value="todo.checked" @change="handleChange" class="md-warn"></md-checkbox>
		</md-table-cell>
		<md-table-cell>{{todo.text}}</md-table-cell>
		<md-table-cell>{{todo.createdAt}}</md-table-cell>
		<md-table-cell>
			<md-button class="md-icon-button" @click.native="handleRemove">
				<md-icon>delete</md-icon>
			</md-button>
		</md-table-cell>
	</md-table-row>
</template>

<script>
import {Meteor} from 'meteor/meteor';

export default {
	props: ['todo'],
	data() {
	  return {
	    isEditMode: false
	  };
	},
	methods: {
	  toglleEdit() {
	    this.isEditMode = !this.isEditMode;
	  },
	  handleChange() {
	    Meteor.call('todos.setChecked', this.todo._id, !this.todo.checked);
	  },
		handleRemove() {
	    Meteor.call('todos.remove', this.todo._id);
		}
	}
};
</script>

<style lang="stylus" scoped>
	.md-table .md-table-cell .md-button .md-icon
		margin auto
</style>
