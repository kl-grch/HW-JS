'use strict';
// арифметические операторы

let a = 3, b = 5, c = '8', d = 'семь';
let res = a + b;
console.log(res); //8

res = a + c; // '3' + '8'
console.log(res); // '38'

res = a + ' ' + d;
console.log(res); // '3семь'

res = +c;
console.log(res); // 8

res = +d;
console.log(res); // NaN

res = a * d;
console.log(res); // NaN

res = a * c;
console.log(res); // 24

a = 7;
b = 3;
res = a/b;
console.log(res); // 2.3333333333333335

res = a/0;
console.log(res); // Infinity

res = -a/0;
console.log(res); // -Infinity

a = 7;
b = 2;
res = a % b;
console.log(res); // остаток от деления

console.log(9%8);
console.log(9%7);
console.log(9%6);

a = 8;
b = 2;
res = a % b;
console.log(res); // 0

// если с остатком делитсяя -  нечетное число, без остатка - четное

let num = 10; // оператор присваивания
num = num + 10; // num += 10;
num *= 10; // num = num * 10;
num /= 10; // num = num / 10;
num -= 10; // num = num - 10;
console.log(num); // 10

// операторы сравнения
a = 5;
b = 8;
c = '5';

res = a > b;
console.log(res);
console.log(a >= b); // false
console.log(b <= 8); // true
console.log(b < 8); // false

console.log(a == c); // true
console.log(a === c); // false 5 === '5'
console.log(a === +c); // true 5 === 5

// тернарный оператор ? 
a = 8;
b = 2;
   // условие / логическое выражение ? 
res = a % b === 0 ? a / b : a * b;
console.log(res); // 4

res = a % b === 0 ? "Ч": "Н";
console.log(res);

res = a % b === 0 // ? "Ч": "Н";
console.log(res);

// логические операторы
// && и
// || или

res = (a % b === 0) && (b > 100) ? 'true' : 'false'; // false
console.log(res);

res = (a % b === 0) || (b > 100) ? 'true' : 'false'; // false
console.log(res); // 'true'

// ! НЕ

let selected = true;
res = !selected;
console.log(res); // false

selected = '';
console.log(!selected);

selected = null; // 0, null, Nan, undefined, ''
res = !selected ? 'true' : 'false';
console.log(res); //'true'