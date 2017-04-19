import { Meteor } from 'meteor/meteor';
import {Todos} from './collections.js';

// Authorized users can manage user accounts
Meteor.publish("users", function () {
  var user = Meteor.users.findOne({_id:this.userId});

  if (Roles.userIsInRole(user, ["admin","manage-users"])) {
    console.log('publishing users', this.userId)
    return Meteor.users.find({}, {fields: {emails: 1, profile: 1, roles: 1}});
  }

  this.stop();
  return;
});



Meteor.publish('todos', (page, size) => {
  return Todos.find({}, {
    sort: {createdAt: -1},
    limit: size,
    skip: (page - 1) * size
  });
});
