'use strict';

// 1. Задача на if
// Дана целочисленная переменая count - количесво верных ответов.
// В зависимости от значения этой переменнной вывести в консоль оценку:
// 100 - 90 правильных ответов - отлично
// 89 - 60 правильных ответов - хорошо
// 59 - 40 правильных ответов - удовлетворительно
// 39 - 0 правильных ответов - попробуй потом

let count = 90;
if (count <= 100 && count >= 90) {
    console.log('отлично');
 } else if (count <= 89 && count >= 60) {
    console.log('хорошо');
 } else if (count <= 59 && count >= 40) {
    console.log('удовлетворительно');
 } else if  (count <= 39 && count >= 0) {
    console.log('попробуй потом');
 } else {
     console.log('Введите количество ответов от 0 до 100')
 }


// 2. Задача на switch
// Пользователь вводит 3 числа:
// 1е - первый операнд
// 2e - второй операнд
// 3е - оператор
// В зависимости от третьего введенного числа нужно вывести в консоль:
// сумму, разность, умножение, деления чисел, которые ввел пользователь.
// Если 3е введенное число 3, нужно найти сумму,
// если 5 - разность,
// если 7 - результат умножения,
// если 9 - результат деления.

let a = parseInt(prompt('Введите первое число'));
let b = parseInt(prompt('Введите второе число'));
let c = parseInt(prompt('Введите одно из чисел: 3, 5, 7 или 9'));
switch (c) {
    case 3:
        c = a + b;
        break;
    case 5:
        c = a - b;
        break;
    case 7:
        c = a * b;
        break;
    case 9:
        c = a / b;
        break;
}
console.log(c);

// 3. Задача на Math.random() и if
// Написать код, который будет проверять попало ли случайно сгенерированное целое число из отрезка [10;500]
// в интервал (25;200) и выводить результат в консоль.
// Примеры работы программы:
// Число 345 не содержится в интервале (25;200)
// Число 110 содержится в интервале (25;200)


// 4. Задача на цикл for:
// Вывесити в консоль первые 20 элементов последовательности 2 4 6 8 10 12 ...

for (let a = 1; a <= 20; a++){
    let res=a*2;
    console.log(res);
}

// 5. Задача на циклы: for или while
// Вывести на экран ряд чисел Фибоначчи, состоящий из n элементов.
// Числа Фибоначчи – это элементы числовой последовательности
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …, в которой каждое последующее число равно сумме двух предыдущих.



// 6. Задача на 2 цикла for
// Вывести в консоль таблицу умножения.
// Пример вывода:
// 1*1=1
// 2*1=2
// 3*1=3
// 4*1=4
// 5*1=5
// 6*1=6

// 7.* На цикл while
// Пользователь!!! загадывает число в диапазоне от [1 до 100]
// Программа пытается его угадать (используйте метод !!!бинарного поиска - деление отрезка на 2).
// Программа может задавать пользователю вопросы:
// Число равно ...? / Число больше ...? / Число меньше ...? и в зависимоти от ответа пользователя принимать решения.
// Вместо текстовых ответов ДА/НЕТ, можно использовать числа 0 - НЕТ и 1 - ДА
