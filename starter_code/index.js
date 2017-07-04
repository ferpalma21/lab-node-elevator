/*jshint esversion:6*/
const Elevator = require('./elevator.js');
const Person = requre('./person.js');

let elevator = new Elevator();
let fernando = new Person('fernando', 3, 8);

elevator.start();
elevator.call(fernando);
