'use strict';

let title = 'JavaScript'; // h2
let duration = 2.5; // Продолжительность:
let price = 2000; // p Стоимость $
let background = 'gold';

let html = 
`<div style='background: ${background}'>
<h2>${title.toUpperCase()}</h2>
<p> Продолжительность: ${duration}</p>
<p> Стоимость: ${price} $</p>
</div>`;
console.log(html);
document.body.innerHTML = html;

// строки внутри хранятся как массив (набор) символов, строки хранятся в кодировке UTF-16
// Поезд ['П', 'о', 'е', 'з', 'д']
// Строки JS не изменны, нельзя вырезать символ, нельзя изменить регистр и прочее
// Можно только перезаписать строку

let train = 'Поезд';
console.log(train.length); // 5 - размер строки
console.log(train[2]); // индекс символа в массиве


// методы строк
// 1. приведение к верхнему регистру
let newStr = train.toUpperCase(); // верхний регистр
console.log(newStr);

newStr = train.toLowerCase(); // нижний регистр
console.log(newStr);

// 2. trim - позволяет убрать пробелы с начала и конца строки
train = '  Поезд          ';
newStr = train.trim();
console.log(newStr); // 'Поезд'

// 3. includes, startsWith, endsWith
train = 'Длинный Поезд';
console.log(train.includes('ез')); // проверяет есть в строке такая последовательность символов или нет 
// чувствителен к регистру
console.log(train.startsWith('По')); // проверет начинается ли строка с такой последовательности или нет, чувствителен к регистру
console.log(train.endsWith('д')); // проверяет заканчивается ли строка данной последовательностью

// 4. массив из строки
let arrFromStr = train.split(' '); // split разбивает строку по разделителю (можем указать любой)
console.log(arrFromStr);

// 5. join Строка из массива
let textFrom = arrFromStr.join(': ');
console.log(textFrom); // 'Длинный: Поезд'

// сравнение строк - true  или false
train = 'Поезд';
let train2 = 'поезд';

console.log(train === train2); // false - чувствителен к регистр 


// localCompare -  одной вызываем, второй передаем, метод возвращает число
// 0 - если строки равны
// отрицательное число, если train меньше train2
// положительное число, если train больше train2
let compareRes = train.localeCompare(train2, undefined, {sensitivity: 'accent'});
// сравнение без учета регистра {sensitivity: 'accent'}
compareRes = train.toLowerCase().localeCompare(train2.toLowerCase());
console.log(compareRes);

train = 'Яблоко'
console.log(train.substring(1,4)); // вырезает строку с 1 по 4 не включая 4 бло
console.log(train.substring(1)); // если энд не указывается, начинается с 1 и по последнюю

// Задача: Заменить все буквы в слове на строчные , а первую на заглавну

let someStr = 'bvbyt5yYHRvtCTER';
someStr = someStr[0].toUpperCase() + someStr.substring(1).toLowerCase();
console.log(someStr);

// функция
let getStr = str => str[0].toUpperCase() + str.substring(1).toLowerCase();
console.log(getStr('hguyguyyugUYUYTTUR'));

// Дома методы строк: indexOf / lastIndexOf / slice

// Задания:
// написать функцию, которая принимает
// на вход переменное количество аргументов (слов),
// создает и возвращает массив, состоящий из уникальных слов

function uniqueWords(...words) {
    let uniqueWordsArr = [];
    for (let word of words){
        if(!uniqueWordsArr.includes(word)){
            uniqueWordsArr.push(word);
        }
    }
    return uniqueWordsArr;
}
console.log(uniqueWords('one','two','one'));

// Написать функцию которая принимает на вход предложение
// и возвращает самое длинное слово в предложении

let getLongestWord = sentence => {
    let currentLongestWord = '';
    let sentenceArr = sentence.split(' ');

    for (let word of sentenceArr) {
        if (word.length > currentLongestWord.length){
            currentLongestWord = word;
        }
    }
    return (currentLongestWord);
}
let sentence = 'A brown fox jamped over a lazy frog';
console.log(getLongestWord(sentence));