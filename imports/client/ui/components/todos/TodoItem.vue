<template>
	<md-table-row class="todo-item" :key="todo._id">
		<md-table-cell>
			<md-checkbox id="my-test3" name="my-test3" :value="todo.checked" @change="toggleChecked" class="md-warn"></md-checkbox>
		</md-table-cell>
		<md-table-cell v-if="isEdit">
			<form @submit.prev="changeText">
				<md-input-container md-inline>
					<md-input ref="text" :value="todo.text" @change="handleChangeText" @blur.native="toggleEdit" autoFocus></md-input>
				</md-input-container>
			</form>
		</md-table-cell>
		<md-table-cell v-else @click.native="toggleEdit">{{todo.text}}</md-table-cell>
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
	    isEdit: false,
		  newText: ''
	  };
	},
	methods: {
		toggleEdit(edit = null) {
		  if (typeof edit == 'boolean') {
		    this.isEdit = edit;
		    return;
			}

	    this.isEdit = !this.isEdit;
	  },
	  toggleChecked() {
	    Meteor.call('todos.setChecked', this.todo._id, !this.todo.checked);
	  },
		changeText() {
			Meteor.call('todos.setText', this.todo._id, this.newText);
			this.toggleEdit(false);
		},
		handleChangeText(newValue) {
		  this.newText = newValue;
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
