'use strict';

function getSum(first, second) { // параметры
    return first + second;
}

let l = 9, k = -166;
let sum = getSum(l, k);
console.log(sum);

let x = 12, y = 91;
sum = getSum(x, y);
console.log(sum);

// написать функцию, которая возвращает минимальное значение из двух

function getMin(one, two) {
    return one < two ? one : two;
    // if (one < two) return one;
    // return two; 
}
console.log(getMin(5, 6));

// функция принимает 2 параметра возраст и имя, формирует строку приветсвия
// если возраст вне диапазона [7,200] - 'Укажите другой возраст'
// если возраст меньше 18 - ' Вы не сможете осуществлять покупки'
//  в остальных случаях - 'Весь функционал доступен'

function greetingStr(age, name = 'Гость') { // если аргумент при вызове функции не передано, будет значение то которое мы указали
    if (age < 7 || age > 200) return `${name}, Укажите другой возраст`;
    if (age <= 18) return `${name}, Вы не сможете осществлять покупки`;
    return `${name}, Весь функционал доступен`;
}

let str = greetingStr(1, 'Олег');
console.log(str);
str = greetingStr(58);
console.log(str);

function paintElem(elem, color = 'yellow') {
    elem.style.background = color;
}

paintElem(document.body, 'pink');

let catName = "Том";
let codes = [4, 5, 6];

function changeName(str) {
    str += "Кот";
}
function changeCodes(arr) {
    for (let i = 0; i < arr.lenght; i += 1) {
        arr[i] *= 10;
    }
}
changeName(catName);
changeCodes(codes);
console.log(catName);
console.log(codes);

// Все ссылочные типы в функцию передается ссылка, 
// когда с премитивами передается копированием

let s = 78;
let t = s;

let nArr = [4, 5, 6];
let other = nArr;

function getAverage(...nums) { // ... функция принимает на вход переменнное количество аргументов
    let sum = 0;
    for (let n of nums) {
        sum += n;
    }
    return sum / nums.lenght;
}

let avg = getAverage(8, 12, -90, 45, 11, 800);
console.log(avg);
avg = getAverage(56, 0, 1);
console.log(avg);

function fullInfo(name, surname, ...other) {
}
fullInfo('Олег', 'Петров', '22 года', 'qwe@mail.ru')
fullInfo('Олег', 'Петров');
