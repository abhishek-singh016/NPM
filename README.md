# NPM
# NPM Packages Example

This repository contains examples of how to use npm packages to perform specific tasks. In this project, we demonstrate the usage of two npm packages: `sillyname` and `superheroes`. The goal is to learn how to install npm packages, import them into a project, and utilize their methods and functionalities.

## Packages Used

- **`sillyname`**: A package that generates a random silly name.
- **`superheroes`**: A package that provides a list of superhero names and methods to get random names.

## Installation

To get started, clone this repository and install the necessary npm packages.

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repository.git

2. Navigate to the project directory:
  cd your-repository

3.Install the npm packages:
  npm install sillyname superheroes

Usage
This project contains examples demonstrating how to use the sillyname and superheroes packages.

Sillyname Package
The sillyname package generates a random silly name. Here's how to use it:

1. Create a file named sillyname-example.js and add the following code:
 var generateName = require("sillyname"); // CommonJS way of importing
 var sillyName = generateName();

 console.log(`My name is ${sillyName}.`);
2. Run the file using Node.js:
node sillyname-example.js

Superheroes Package
The superheroes package provides superhero names and methods. Here's how to use it:

1. Create a file named superheroes-example.js and add the following code:

import Superhero from "superheroes"; // ESM way of importing
const name = Superhero.random();
console.log(`I am ${name}!`);

2. Run the file using Node.js:
node --experimental-modules superheroes-example.js


Note: If you encounter issues running ESM modules, ensure you are using a compatible version of Node.js and set "type": "module" in your package.json.

Contributing
If you have suggestions or improvements, feel free to submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.




