'use strict';

// console.log() вместо return использовать нельзя!

// 1. Напишите функцию, которая в зависимости от переданного в
// нее целочисленного аргумента count, будет возвращать слово "товар"
// в правильной форме ("12 товаров", но "22 товара", "1 товар", "97 товаров" и тд).
// товар, товара, товаров 

function endWords(count) {
    let end;
    if (count > 10 && count < 20) return end = ' товаров';
    if (count % 10 > 1 && count % 10 < 5) return end = ' товара';
    if (count % 10 == 1) return end = ' товар';
    return end = ' товаров';
}
let num = 32;
console.log(num+endWords(num));


// 2. Функция range
// Напишите функцию range, принимающую три аргумента (start, end, step=1):
// два обязательных: начало и конец диапазона,
// третий аргумент - необязательный (если он не передан, то равен единице)
// – шаг для построения массива.

// Функция возвращает массив, который содержит все числа из диапазона, включая начальное и конечное.
// Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]

function range (start, end, step=1) {
    let newArr = [];
    let count = 0;
    for (let i = start; i <= end; i+=step){
        newArr[count] = i;
        count += 1;
    }
    return newArr;
}
console.log(range(1, 10, 2));

// 3. Написать функцию проверки на спам. (text, ...words)
// Функция принимает на вход текст и ...спам - слова
// (переменное количество аргументов).
// Определить по 5ти бальной шкале, как часто в тексте встречается спам.
// Результат вернуть из функции.

function chekSpam(text, ...words) {
    let arrText = text.split ('');
    let sum = 0;
    for (let i = 0; i < arrText.lenght; i++){
        for (let j = 0; j < words.lenght; j++){
            if (arrText[i] == words[j]) sum += 1;
        }
    }
    if (sum = 0) return 'Спам в тексте составил 0 баллов из 5';
    if (sum => 1 && sum <= 2) return 'Спам в тексте составил 1 балл из 5';
    if (sum => 3 && sum <= 4) return 'Спам в тексте составил 2 балла из 5';
    if (sum => 5 && sum <= 6) return 'Спам в тексте составил 3 балла из 5';
    if (sum => 7 && sum <= 9) return 'Спам в тексте составил 4 балла из 5';
    if (sum > 9) return 'Спам в тексте составил 5 баллов из 5';
}
    let text = "error error error dolor dolor dolor no war";
    console.log(chekSpam(text, 'error', 'dolor'));

// 4. На методы массивов (functions-2)

//         Дан массив:
//         let numsArr = [
//             [3, 5, -1, 6, 0],
//             [56, -9, 111, 6],
//             [11, 86, -12],
//         ];

//         1. Увеличить каждый элемент массива на 10
//         2. Создать массив, в который войдут положительные элементы numsArr

let numsArr = [
                [3, 5, -1, 6, 0],
                [56, -9, 111, 6],
                [11, 86, -12],
            ];
let newArr1 = numsArr.map(elem => elem.map(num => num *= 10));
console.log(newArr1);
            
let newArr2 = numsArr.map(elem => elem.filter(num => num > 0));
console.log(newArr2);