'use strict';
// однострочный комментарий

/* многострочный
комментарий */

//отладка
console.log ('Данные для отладки');

// переменные
// объявление переменных
let age = 26;
age = 27;
console.log(age);

let userLogin = 'qwerty', password = 'qwerty123';
let height = 400;
let width = 700;

let active, closed = 1;

// значение присваивается в момент объявления
// нельзя изменить в дальнейшем
const PI = 3.14;
console.log(PI)

// старый способ объявления переменных
// var data = 'Данные';

//типы данных 
// 1 примитивные типы данных
// 2 ссылочные типы данных

// примитивные типы 
// 1.Числа тип number
//положительные, отрицательные, 0 , целые и дробные (с плавающей точкой)
height = 89;
width = 23.89;
let degree = -100;

// 2. Строки: тип string, все данные в кавычках - это строка
// можно заключать в одинарные кавычки и двойные, разницы нет, но любой текст без кавычек - ошибка синтаксиса
degree = '-100C';
userLogin = 'wind009';
userLogin = "qwe";

let loginInfo = `Значения переменной userLogin равно ${userLogin}`;
console.log(loginInfo);

// 3. Логический: тип boolean
// для сохраниения состояний:  либо true либо false
active = true;
closed = false; 
console.log(active, closed);

// 4. Значение неизвестно: null;
let book = null;

// 5. Значение не было присвоено: undefined
let elem;
console.log(elem);

// определение типа данных переменной typeof имяПеременной
console.log(typeof active);
console.log(typeof loginInfo);
console.log(typeof age);
console.log(typeof book);