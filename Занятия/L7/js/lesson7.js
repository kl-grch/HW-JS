'use strict';

// Объекты - используются для хранения данных: ключ - значение 

let userData = {}; // пустой объект
console.log(userData);

// установили значение свойства name
userData.name = 'Anna'; // name это свойство, Анна это название объекта
console.log(userData.name); // Анна

userData.age = 27;
console.log(userData.age); 
console.log(userData['age']); 

// свойствами могут быть строки, всё что к строке преобразуется, тип Symbol 
// если обращаемся к свойству через квадратные скобки, пишет строкой в кавычках

userData.favoriteColors = ['red', 'orange','yellow']; // в качестве значения свойств можем быть всё что угодно
console.log(userData.favoriteColors[1]); // orange

// если мы пытаемся прочитать свойство которого нет, то получим undefind
console.log(userData.img); 

// проверка на наличие свойства в объекте с помощью:
if (userData.img === undefined) userData.img = 'default.png';
if (!('githubLink' in userData)) userData.githubLink = null;
// оператор in возвращает true если свойство с таким 'githubLink' названием содержится в объекте userData и false если не содержится 

// чтобы определить что значение в свойстве существует, нужно ставить null а не undefined
userData.login = null;

let jsBook = {
    title: 'About JS',
    author: 'JS Junior',
    pageCount: 102
};
let cssBook = {
    title: 'About CSS',
    author: 'CSS Junior',
    pageCount: 1700
};
console.log(jsBook);
console.log(cssBook);

userData.books = [jsBook, cssBook];
console.log(userData.books[1].pageCount); // юсерДата - массив с книгами, 1 это объект из массива, и свойство 
// 1700 

// вывести в консоль название книг из userData
// количество страниц которых больше 500

for (let book of userData.books) {
    if (book.pageCount > 500) console.log(book.title);
}

// или 

for (let i = 0; i < userData.books.length; i ++){
    console.log(userData.books[i]);
    if (userData.books[i].pageCount > 500) {
        console.log(userData.books[i].title);
    }
}

let messages = [ // запросить у пользователя код (code) и добавить
    // в отдельный массив тексты сообщений, код который выше указанного пользователем
    {
        text: 'Срочное',
        priority: 'high',
        code: 99
    },
    {
        text: 'Просто сообщение',
        priority: 'low',
        code: 8
    },
    {
        text: 'Срочное сообщение',
        priority: 'high',
        code: 88
    }
];

// let userCode = parseInt(prompt('Введите код'));
// let texts = [];

// for (let message of messages){
//     if (message.code > userCode) texts.push(message.text)
// }

// console.log(texts);


jsBook = {
    title: 'About JS',
    author: 'JS Junior',
    pageCount: 102
};
// перебор объектов - цикл for in (для объектов)
for (let propertyName in jsBook){
    console.log(`Имя свойства ${propertyName}, значение ${jsBook[propertyName]}`)
}

// For of - для перебора массивов и html коллекций

// массив с ключами (свойствами) объекта
let keys = Object.keys(jsBook);
console.log(keys); // ["title", "author", "pageCount"]

// массив со значениями объекта
let values = Object.values(jsBook);
console.log(values); // ["About JS", "JS Junior", 102]

// массив пар [ключ(свойство): значение]
let entries = Object.entries(jsBook);
console.log(entries);

// Деструктуризация объекта - получить отдельные переменные на основе объекта
jsBook = {
    title: 'About JS',
    author: 'JS Junior',
    pageCount: 102
};

let {title, author, pageCount, img = 'default.png'} = jsBook;
console.log(title);
console.log(author);
console.log(pageCount);
console.log(img);

let {login, pwd, ...others} = {
    login: 'qwerty',
    pwd: 'qwe12345',
    phone: '+79999999',
    email: 'qwe@gmail.com'
};
console.log(login);
console.log(pwd);
console.log(others);

let {name: userName, age: userAge} = {name: 'Anna', age: 33};
console.log(userName);
console.log(userAge);


jsBook = {
    title: 'About JS',
    author: 'JS Junior',
    pageCount: 102
};
// Деструктуризация объекта в параметрах функции - используется часто
// всё что по умолчанию будет идти после, где нет значения по умолчанию 
// ...в самом конце
function doSmth({title, author, img = 'default.png'}){
    console.log(title);
    console.log(author);
    console.log(img);
}
doSmth(jsBook);