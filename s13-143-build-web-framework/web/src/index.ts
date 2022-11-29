import { User } from './models/User'

const user = new User({ name: 'myname', age: 20 });

user.on('change', () => {});
user.on('change', () => {});
user.on('laskjdf', () => {});
console.log(user);

// user.set({name: 'newname', age: 9999});
// user.set({name: 'newname'});

// console.log(user.get('name'));
// console.log(user.get('age'));
