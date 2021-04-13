'use strict';

let ints = []; // создание пустого массива (хранилище)
console.log(ints);

let colors = ['blue', 'red', 'yellow', 'pink'];
console.log(colors);

// разряженный массив
let nums = [2, 78, , 90, , , -12];
console.log(nums);

// свойство lenght
console.log(colors.length) // 4
console.log(nums.length) // 7

// доступ к элементам
colors = ['blue', 'red', 'yellow'];
colors[1] = 'orange'; // задали у массива colors цвет оранжевый, вместо красного
console.log(colors);

let elem = colors[0]; // прочитали значение индекса 0 из массива colors
console.log(elem);

console.log(colors[30]); // undefind - значение с несуществующим индексом
colors[47] = 'black';
console.log(colors); // 48
colors.length = 900;
console.log(colors.length);

// многомерный массив
nums = [
    [55, -991, 34,0], // 0
    [9, 23, 81], // 1
    [99, 4] // 2
];
console.log(nums);

let firstArr = nums [1];
console.log(firstArr); // [9, 23, 81]

console.log(firstArr[2]); // 81
console.log(nums[2][1], nums[1][1]); // 4 23 - обратиолись к массиву и вывели из него значение [] - 1 скобка номер массива, [] - 2 скобка номер элемента в массиве
nums = [1][1]; // 22 - перезапись массива
console.log(nums);

// перебор массивов
ints = [67, 99, 12, 65, 6];

let str = 'Значения элементов массива ints: ';
for (let i = 0; i < ints.length; i += 1)  { // увеличение массива на еденицу
// console.log(ints[i]); // обращаемся к первому элементу массива, второму, третьему и тд.
str += ints[i] + " ";
ints[i] *= ints[i];
}
console.log(str);
console.log(ints);

ints = [67, 99, 12, 65, 6];
// цикл for of - позволяет перебирать массивы и коллекции html элементов

for (let arrElem of ints) { // указываем что мы перебираем (массив ints) и копируем в новую переменную arrElem
console.log(arrElem);
}

ints = [67, 99, 12, 65, 6]; // сумма элементов массива
let sum = 0; // 67 + 99 + 12 + 65 + 9 = 
for (let arrElem of ints) {
    sum = sum + arrElem;
}
console.log(sum);

let pics = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

let picsSection = document.getElementById("pics");
for (let pic of pics) {
    // <img> создание элемента
    let img = document.createElement("img");
    // <img src="img/" + pic> создание атрибута и значения
    img .setAttribute("src", `img/${pic}`);
    picsSection.append(img);

}

// методы массивов
colors = ['blue', 'red', 'yellow', 'pink'];
// 1. добавление / удаление первого / последнего элемента массива
let lastColor = colors.pop(); // если удаленный элемент нужен ['blue', 'red', 'yellow']
console.log(lastColor);
colors.pop(); // если удаленный элемент не нужен ['blue', 'red']
console.log(colors);

//добавление в конец массива
colors.push("black", "green", "purple")
console.log(colors);

// удаление первого элемента
let firstElem = colors.shift(); // шифт вырежет первый элемент из массива и вернет 
console.log(firstElem); // [red "black", "green", "purple"]
colors.shift(); // blue
console.log(colors);  // ["black", "green", "purple"]

// добавление элементов в начало массива
colors.unshift("green", "red"); //  ["green", "red", "black", "green", "purple"]
console.log(colors);

// splice / slice
// Метод slice создает новый массив на основе существующего, исходный массив не меняет 
colors = ['blue', 'red', 'yellow', 'pink'];
console.log(colors);
// создает новый массив
let newColors = colors.slice(1, 3); // с какое по какое 
console.log(newColors);

let removed = colors.splice(1, 2, "greenyellow", "gold"); // может удалять указанное количество элементов и добавлять 
console.log(removed); // ["red", "yellow"]
console.log(colors); // ["blue", "greenyellow", "gold", "pink"]

// удаление нечетных элементов массива

ints = [-3, 78, 11, 11, 45, 90, 34];
for (let i = 0; i < ints.length; i += 1) {}
for (let i = ints.length - 1; i >= 0; i -= 1) {
    if (ints[i] % 2 !== 0) {
        ints.splice(i, 1);
    }
}
console.log(ints);


