import { Meteor } from 'meteor/meteor';
import {Todos} from './collections.js';

// Meteor.publish('todos', (size, page) => (
//   Todos.find().sort({createdAt: -1}).limit(size).skip(page - 1)
// ));

Meteor.publish('todos', (page, size) => {
  console.log('<>++< ---------', 'size:', size, ', page:', page);

  return Todos.find({}, {
    sort: {createdAt: -1},
    limit: size,
    skip: page - 1
  });
});