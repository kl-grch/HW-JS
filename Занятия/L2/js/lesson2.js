'use strict';
// if, switch 

let state = 0; // если значение равно 0, то в консоль пишем что загрузка завершена

if (state === 0) {
    console.log("Загрузка завершена");
} else if (state === 1) {
    console.log("Загрузка...")
}else {
    console.log("Ошибка статуса загрузки");
}

// даны переменные age и exp
// если значение переменной age больше 100,
// ввести в консоль 'Мы вам перезвоним'
// в противном случае перейти к проверке exp
// если exp меньше 5 , вывести 'Вы подходите на должность стажера'
// в противном случае вывести 'Вы подходите на должность разработчика'

let age = 19, exp = 6;

if (age <= 18 || age < exp || exp < 0) {
    console.log('Ошибка ввода данных')
}else if (age > 100) {
    console.log('Мы вам перезвоним');
} else if (exp < 5) {
    console.log('Вы подходите на должность стажера');
} else {
    console.log('Вы подходите на должность разработчика');
}

let month = 'сентябрь';
switch (month) {
    case 'декабрь':
    case 'январь':
    case 'февраль':
        document.body.style.background = 'blue';
        break;
    case 'март':
    case 'апрель':
    case 'май':
        document.body.style.background = 'yellow';
        break;
    case 'июнь':
    case 'июль':
    case 'август':
        document.body.style.background = 'green';
        break;
    case 'сентябрь':
    case 'октябрь':
    case 'ноябрь':
        document.body.style.background = 'orange';
        break;
    default:
        console.log('Ошибка ввода')
        document.body.style.background = 'red';
}

/*
* Даны переменные sum - сумма покупки и code - номер купона
* code: 4653 - скидка 30%
* code: 2942, 9075 - скидка 20%
* code: 7899, 1188, 9045 - скидка 10%
* в остальных случаях скидка не предусмотрена
* вывести сумму с учетом скидки
*/

let sum = 1000;
let code = 9045;
switch (code) { // === switch строгое сравнение
    case 4653:
        sum = sum * 0.7;
        break;
    case 2942:
    case 9075:
        sum = sum * 0.8;
        break;
    case 7899:
    case 1188:
    case 9045:
        sum = sum * 0.9;
        break;
    default:
        sum;
}

console.log(sum);

