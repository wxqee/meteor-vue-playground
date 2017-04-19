import {Meteor} from 'meteor/meteor';
import {Roles} from 'meteor/alanning:roles';

Meteor.startup(() => {
  console.log('meteor server startup');

  if (Meteor.users.find().fetch().length === 0) {

    console.log('Creating users: ');

    let users = [
      {name:"Normal User",email:"normal@example.com",roles:[]},
      {name:"View-Secrets User",email:"view@example.com",roles:['view-secrets']},
      {name:"Manage-Users User",email:"manage@example.com",roles:['manage-users']},
      {name:"Admin User",email:"admin@example.com",roles:['admin']}
    ];

    users.forEach(userData => {
      console.log(userData);

      id = Accounts.createUser({
        email: userData.email,
        password: "xiwang",
        profile: { name: userData.name }
      });

      // email verification
      Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true}});

      Roles.addUsersToRoles(id, userData.roles);
    });
  }

});