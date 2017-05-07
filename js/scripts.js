// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";

console.log('Hello, World!');

 // start with strings, numbers and booleans
let age = 100;
let age2 = age;

console.log(age, age2);
age = 200;
console.log(age, age2);

//let name = "Danielle";
let name2 = "poop";

//console.log(name, name2);
let name = "Danielle R";
console.log(name, name2);


    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
const team = players;
console.log(players, team);
    // You might think we can just do something like this:
team[3] = 'Lux';
    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
const team2 = players.slice();
    // one way

    // or create a new array and concat the old one in
const team3 = [].concat(players);
    // or use the new ES6 Spread
const team4 = [...players];
team[3] = 'bloooooop';
console.log(team);

const team5 = Array.from(players);
    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
const person = {
    name: 'Danielle Roberson',
    age: 23
};

    // and think we make a copy:
const captain = person;
captain.number = 99;

    // how do we take a copy instead?
const cap2 = Object.assign({}, person, {number: 99, age: 12});
console.log(cap2);
console.log(person);
    // We will hopefully soon see the object ...spread
//const cap3 = {...person};
    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const danielle = {
    name: 'Danielle',
    age: 666,
    social: {
        instagram: '@darlingdanielle',
        facebook: 'fvck0fff',
    }
    
};

console.clear();
console.log(danielle);

const dev = Object.assign({}, danielle);

const dev2 = JSON.parse(JSON.stringify(danielle)); //poor mans deep clone