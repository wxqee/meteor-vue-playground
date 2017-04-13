<template>
	<div class="accounts-register">
		<h1>Register</h1>

		<form @submit.stop.prevent="submit">
			<md-input-container>
				<label>Username</label>
				<md-input required v-model="form.username"></md-input>
			</md-input-container>

			<md-input-container>
				<label>Password</label>
				<md-input type="password" required v-model="form.password"></md-input>
			</md-input-container>

			<md-button class="md-primary" type="submit" v-if="!loading">Submit</md-button>
			<md-button class="md-primary" disabled v-else>User {{form.username}} is logging in ...</md-button>
		</form>
	</div>
</template>

<script>
	import {Meteor} from 'meteor/meteor';
	import {Accounts} from 'meteor/accounts-base';

	export default {
		data: () => ({
			loading: false,
			form: {
				username: '',
				password: ''
			},
		}),
		methods: {
			submit() {
				let {username, password} = this.form;

				this.loading = true;

				Accounts.createUser({
					username,
					password,
				}, (err) => {
				  if (err) {
				    alert('error: ' + err);
				  }

				  this.loading = false;
				});
			}
		}
	};
</script>