"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// JS types:
var fistName = 'John';
var isAdmin = false;
var age = 30;
var duties = ['write code', 'fix bugs'];
var car = null;
var bicycle = undefined;
var work = function () {
    console.log('working...');
};
var salary = 50n;
var logo = Symbol('emerald');
var all = [fistName, isAdmin, age, car, bicycle, duties, work, salary, logo];
for (var _i = 0, all_1 = all; _i < all_1.length; _i++) {
    var item = all_1[_i];
    console.log(String(item) + ' is ' + typeof item);
}
/**
 * TS types:
 * any -
 * unknown
 * never
 * arrays
 * tuples
 * Enums
 */ 
