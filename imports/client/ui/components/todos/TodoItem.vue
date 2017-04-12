<template>
	<md-table-row class="todo-item" :key="todo._id">
		<md-table-cell>
			<md-checkbox id="my-test3" name="my-test3" :value="todo.checked" @change="toggleChecked" class="md-warn"></md-checkbox>
		</md-table-cell>
		<md-table-cell>
			<span v-if="isEdit">
				<md-input-container md-inline>
					<md-input ref="text" :value="todo.text" @change="handleChangeText" autoFocus></md-input>
				</md-input-container>
			</span>
			<span v-else @click.native="toggleEdit">
				{{todo.text}}
			</span>
		</md-table-cell>
		<md-table-cell>{{todo.createdAt.toLocaleString()}}</md-table-cell>
		<md-table-cell>
			<span>
				<md-button class="md-icon-button" @click.native="changeText" v-if="isEdit">
					<md-icon>save</md-icon>
				</md-button>
				<md-button class="md-icon-button" @click.native="toggleEdit" v-else>
					<md-icon>edit</md-icon>
				</md-button>
				<md-button class="md-icon-button" @click.native="handleRemove">
					<md-icon>delete</md-icon>
				</md-button>
			</span>
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
		  if (this.newText) {
			  Meteor.call('todos.setText', this.todo._id, this.newText);
		  }
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
