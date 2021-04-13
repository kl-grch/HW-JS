'use strict';

// 1. На многомерный массив
// Дан массив:
//     [
//         [23, 56, 75, -90, 123],
//         [17, 0, -6429, -122],
//         [19, 86, 55, -3, 900, 0, 0],
//         [4, 9, -2]
//     ]
// Увеличить значение каждого элемента массива на 10

let nums = [
            [23, 56, 75, -90, 123],
            [17, 0, -6429, -122],
            [19, 86, 55, -3, 900, 0, 0],
            [4, 9, -2]
            ];
for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
nums[i][j] += 10; // изменили элемент
}
}
console.log(nums);

// 2. Создать массив из целых чисел, заполнить массив рандомными значениями. Размер массива - 7.
// Поменять элементы с максимальным и минимальным значениями местами.

let rand = [];
rand.length = 7;
for (let i = 0; i < rand.length; i++) {
    rand[i]=parseInt(Math.random()*100);
} 
console.log(rand);

let min = 0, max = 0;
for (let i = 0; i < rand.length; i++) {
    if (rand[i] >= rand[max]) max = i;
    if (rand[i] <= rand[min]) min = i;
}
console.log(max, min);



// 3. Создать массив из целых чисел.
// Отрицательные элементы массива скопировать в новый массив.

min = [2, -4, 6, -8, 10, -12];
function getNegativeNumbers(min) {
    let negatives = [];
for (let i = 0; i < min.length; i++) {
if (min[i] < 0) {
    negatives.push(min[i]);
    }
}
return negatives;
}
console.log(getNegativeNumbers(min));
