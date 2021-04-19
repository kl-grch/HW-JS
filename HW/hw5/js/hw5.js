'use strict';

// 1. Посмотреть методы строк: indexOf / lastIndexOf / slice

// indexOf() сравнивает искомый элемент searchElement с элементами в массиве
// Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.

// Метод lastIndexOf() возвращает последний индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет. Массив просматривается от конца к началу, начиная с индекса fromIndex.

// Метод slice() возвращает новый массив, содержащий копию части исходного массива.

// 2. Написать функцию, которая принимает на вход 2 строки и возвращает количество вхождений одной строки в другую.
// Например, слово "дом" встречается в строке "дом домик домой одомашненный" 4 раза.

function substrInStr(str1, str2){
    let i=0, count=0;
    while (true){
        let foundPos = str1.indexOf(str2, i);
        if (foundPos == -1) break;
        i = foundPos + 1;
        count += 1
    }
    return count;
    }
    console.log(substrInStr("дом домик домой одомашненный","дом"));

// 3. Написать функцию, которая принимает на вход строку и возвращает true, если функция является полиндромом и false, если нет.
// Палиндром — это число, буквосочетание, слово или текст, которые одинаково читаются по буквам или по словам как слева направо, так и справа налево.
// Например, 202 - палиндром / fafaf - палиндром / а роза упала на лапу Азора - палиндром.

function palindrom(str) {
    let palArr = str.split('');
    let reverseStr = '';
    for (let i = 0; i < palArr.lenght; i++){
        if (palArr[i] === ' ') palArr.splice(i,1);
    }
    let inputStr = palArr.join('').toLowerCase();
    reverseStr = palArr.reverse().join('').toLowerCase();
    if (inputStr.indexOf(reverseStr) != -1) return true;
    else return false;
}
console.log(palindrom('202'));
console.log(palindrom('fafaf'));
console.log(palindrom('А роза упала на лапу Азора'));
console.log(palindrom('Олег'));
console.log(palindrom('02041993'));

// function palindrom(str){
//     let newStr1=str.toLowerCase().split(' ').join('').split('').join('');
//     let newStr2=str.toLowerCase().split(' ').join('').split('').reverse().join('');
//     if (newStr1===newStr2) return true;
//     return false;
// }
// console.log(palindrom("а роза упала на лапу Азора"));
