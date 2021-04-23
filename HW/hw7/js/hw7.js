'use strict';

// Задача 1
// Написать функцию, которая принимает на вход объект obj (например, goods), число from и число to.
// Если значение from и to не числа, а obj не объект, функция прерывает свою работу и возвращает false.
// Если данные валидны, функция формирует и возвращает новый ОБЪЕКТ с объектами,
// значения свойств price которых лежат в диапазоне от значения from до значения to, не включая to.

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

function getObject(obj, from, to){
    let newObj = {}
    if (typeof from != 'number' || typeof to != 'number' || typeof obj != 'object'){
        return false;
    }
    for (let key in obj){
        if (obj[key].price >= from && obj[key].price < to) newObj[key] = obj[key];
    }
    return newObj;
}
console.log(getObject(goods, 3000, 4000))

// Задача 2
// Написать функцию, которая принимает на вход объект obj (например, goods), название (title) и количество (countToCart).
// Если значение title не строка, obj не объект, а count не число, функция прерывает свою работу и возвращает false.
// Функция должна найти товар с указанным названием (title):
// если количество позволяет, то уменьшить значение свойства count в переданном объекте на countToCart вернуть true,
// если не позволяет, то вывести информацию об этом в консоль и вернуть false.


function searchProduct(obj, title, countToCart){
    if (typeof obj != 'object' || typeof title != 'string' || typeof countToCart != 'number') return false;
    for (let key in obj){
        if (obj[key].title === title){
            if (obj[key].count >= countToCart){
                obj[key].count -= countToCart;
                return true;
            } 
            else if (obj[key].count < countToCart){
                console.log("Данное количество товара отстутсвует");
                return false;
            } 
        }
    }
}
searchProduct(goods, "Арфа", 8);




// Задача 3
// Написать функцию, которая принимает на вход массив arr (например, books) и фамилию автора.
// Создает и возвращает  новый массив, в который войдут все книги указанного автора,
// если такого автора нет, возвращает пустой массив.

let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'},
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Лермонтов', title: 'Тамань'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    { author: 'Пушкин', title: 'Руслан и Людмила'},
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];

function allBooks(arr, surname){
    arr = [arr];
    let newArr = [];
    for (let key in books){
        if(books[key].author === surname){
            newArr.push(books[key].title);
        }
    }
    return newArr;
}
console.log(allBooks(books, "Лермонтов"));

// Задача 4
// Отсортировать массив books по значению свойства title вложенных объектов.

function compare(a, b) {
    if (a.title < b.title){
      return -1;
    }
    if (a.title > b.title){
      return 1;
    }
    return 0;
  }
  
  console.log(books.sort(compare));