<template>
	<md-table-row :key="todo._id">
		<md-table-cell>{{todo._id._str}}</md-table-cell>
		<md-table-cell>{{todo.text}}</md-table-cell>
		<md-table-cell>{{todo.createdAt}}</md-table-cell>
	</md-table-row>
</template>

<script>
export default {
	props: ['todo']
};
</script>
