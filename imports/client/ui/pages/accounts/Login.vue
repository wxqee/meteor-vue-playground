<template>
	<div class="accounts-login">
		<h1>Login</h1>

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
		    this.loading = true;

			  Meteor.loginWithPassword(this.form.username, this.form.password, (err) => {
			    if (err) {
				    alert(err);
			    }

				  this.loading = false;

			    if (this.$route.query.returnUrl) {
			      location.href = decodeURIComponent(this.$route.query.returnUrl);
			    }
			  });
		  }
		}
	};
</script>