import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import {Todos} from './collections.js';

Meteor.methods({
  'todos.insert'(text) {
    check(text, String);

    Todos.insert({
      text,
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

});