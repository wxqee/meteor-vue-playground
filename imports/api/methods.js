import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Accounts } from 'meteor/accounts-base';

import {Todos} from './collections.js';

Meteor.methods({
  'todos.insert'(text) {
    check(text, String);

    Todos.insert({
      text,
      checked: false,
      createdAt: new Date()
    });
  },
  'todos.remove'(id) {
    check(id, String);

    Todos.remove(id);
  },
  'todos.setChecked'(id, setChecked) {
    check(id, String);
    check(setChecked, Boolean);

    Todos.update(id, { $set: { checked: setChecked } });
  },
  'todos.setText'(id, text) {
    check(id, String);
    check(text, String);

    Todos.update(id, { $set: { text: text } });
  },
  'todos.toggleAll'(setChecked, idList) {
    check(setChecked, Boolean);
    check(idList, Array);

    console.log('<>++< --- todos.toggleAll: ', setChecked, idList);

    Todos.update(
      {_id: {$in: idList}},
      {$set: {checked: setChecked}},
      {multi: true}
    );
  },
  'todos.removeAll'(idList) {
    check(idList, Array);

    console.log('<>++< --- todos.removeAll: ', idList);

    Todos.remove({_id: {$in: idList}});
  },
  'todos.count'() {
    return Todos.find().count();
  },
  // 'accounts.createUser'({username, password}) {
  //   check(username, String);
  //   check(password, String);
  //
  //   Accounts.createUser({
  //     username,
  //     password,
  //   });
  // },
});