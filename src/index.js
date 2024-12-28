// const hello = require("./js.js");

import Car from './js/class';
import { goodbye, hello } from './js/js';
// console.log(hello);

document.body.innerHTML = hello('Artem');
document.body.innerHTML = goodbye('Artem');

const audi = new Car();
