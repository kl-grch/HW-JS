'use strict';

// function sqrt(x){
//     return x*x;
// }

// анонимные функции - можно вызвать только после объявления
let sqrt = function (x) {
    return x * x;
};

let res = sqrt(4);
console.log(res);

// стрелочные функции - нет слова function нигде // => обозначение функции, в стрелочных можно не ставить круглые скобки если один параметр
// стрелка указывает что закончили перечислять параметры и переходим к телу функции
// если в теле функции только одна инструкция, и функция должна вернуть какой-то результат
// то ни фигурные скобки, ни rturn не ставится

sqrt = x => x * x;
let doubled = x => x * 2;
let printTitle = (elem, text) => { // фигурные - эсли больше чем одна инструкция, и сразу пишем return если функция должна что-то вернуть
     if(text.lenght < 3) return; // если длина текста меньше 3 символов, функция прерывается
     elem.innerText = text.toUpperCase(); // верхний регистр - все буквы большие
};
printTitle(document.body, 'Функции');

// В ЛЮБУЮ ФНКЦИЮ МОЖНО ПЕРЕДАТЬ ДРУГУЮ ФУНКЦИЮ

// любая функция может быть передана в качестве аргумента в другю фнкцию
function changeNum(num, func){
    return func(num);
}

res = changeNum(12, sqrt); // сюда передаем либо имя переменной в которой находится функция
// либо анонимную функцию целиком
res = changeNum(12, x => x + 10); // - это целиком 

function getNewArr(arr, func){
    let newArr = [];
    for (let elem of arr){
        newArr.push(func(elem));
    }
    return newArr;
}
let arr = [4, 9, 1, 0, -5];
let newArr = getNewArr(arr,sqrt); // [16, 81, 1,0,-25]
newArr = getNewArr(arr, x => x + 100); // [104, 109, 101, 100, 95]

// методы массивов
// сортировка массивов

let colors = ['red', 'blue', 'orange', 'gold'];
colors.sort();
console.log(colors);

function compare(a, b){ // порядок сравнение двух элементов чисел/строк, функция должна возвращать
    if (a < b) return -1;
    if (b < a) return 1;
    return 0;
    // -1 (отрицательное число), если a меньше b 
    // 1 (положительное число), tсли a больше b
    // 0, если a равно b (всё по нашим кретериям)
    return a - b; // так можно только для сравнения чисел, если не числа, то вариант выше 
}

let ints = [45, 78, 12, -90, 3335, 78, 7770, 0]; // методом sort нельзя сортировать числа
ints.sort(compare); // передали сюда функцию сравнения
console.log(ints);
ints.sort((a,b)=>b-a); // тоже самое только со стрелочной функцией
console.log(ints);

ints = [45, -78, 12, -90, -3335, 78, 7770, 0];
// filter(); - создает новый массив, принимает на вход функцию которая должна вернуть либо true либо false

let lessZero = num => num < 0;
let resArr = ints.filter(lessZero); // ints.filter(num => num < 0);
console.log(resArr);
// [-78, -90, -3335] - отрицательные значения
resArr = ints.filter(num => num % 2 === 0); // четные значения
console.log(resArr);

// map(); метод map преобразует каждый элемент массива переданной функции - вместо цикла
resArr = ints.map(n => n * 100);
console.log(resArr);

// every();  принимает на вход функцию, возвращает не массив, а либо true либо false
res = ints.every(n => n > 0); // true - если все элементы прошли проверку данной функции
console.log(res);

 //some(); возвращает тру или фолс, тру если хотя бы один элемент массива прошел проверку переданной функцией
 res = ints.some(n => n > 0);
 console.log(res);

 let func = (elem, index, arr) => {
     console.log('Элемент массива = ${elem}');
     console.log('Индекс элемента массива = ${index}');
     console.log('Массив = ${arr}');

    arr[index] *= 10;
 };
 ints.forEach(func); // forEach ничего не создает, но способен изменить существующий массив
 for (let i = 0; i < ints.length; i++) {
     func(ints[i], i, ints);
 }

 let numsArr = [
    [3, 5, -1, 6, 0],
    [56, -9, 111, 6],
    [11, 86, -12],
];
// проверить есть ли в массиве число 111
res = numsArr.some(elem => elem.some(num => num === 111));
console.log(res);

let first = ['Апрель', 'Май', 'Октябрь', 'Февраль', 'Июнь'],
second = ['Январь', 'Декабрь', 'Октябрь', 'Июль', 'Май'];

function getArr(arr1, arr2){ // принимает на вход 2 массива, и выводит один с повторяющими значениями
return arr1.filter(elem => arr2.includes(elem));

}
console.log(getArr(first,second));

// замыкание
function sub(x){
    let n = x;
    return function (m){
        return n * m;
    }
}

let subSix = sub(6);

res = subSix(10);
console.log(res);
res = subSix(5);
console.log(res);