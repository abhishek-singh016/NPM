// var generateName = require("sillyname");// ---> This is a CJS way of importing the npm package  (CJS fullform = CommonJS)

// import generateName from "sillyname"; // ---> This is a ECS way of importing a npm package (ECS fullform = ECMAScript)
// var sillyName = generateName();

// console.log(`My name is ${sillyName}.`);

import Superhero from "superheroes";
const name = Superhero.random();
console.log(`I am ${name}!.`);

