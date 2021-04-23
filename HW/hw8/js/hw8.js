'use strict';

// Задача 1
// Написать функцию генерации карточек с информацией о животных

        function getCats() {
            return [
                {
                    "name": "Люся",
                    "age": "1 год",
                    "color": "трехцветная",
                    "additional_info": {"vaccinations": true, "passport": true}
                },
                {
                    "name": "Том",
                    "age": "3 месяца",
                    "color": "белый",
                    "additional_info": {"vaccinations": false, "passport": false}
                },
                {
                    "name": "Макс",
                    "age": 2,
                    "color": "серый",
                    "additional_info": {"vaccinations": false, "passport": true}
                },
                {
                    "name": "Василий",
                    "age": 3,
                    "color": "черный",
                    "additional_info": {"vaccinations": true, "passport": true}
                }
            ];
        }

        function generateCards(where, object){
            for (let propertyName in object){
                let cardDiv = document.createElement('div');
                cardDiv.classList.add('card');
                
                let name = document.createElement('p');
                name.innerText = `Имя: ${object[propertyName].name}`;
        
                let age = document.createElement('p');
                age.innerText = `Возраст: ${object[propertyName].age}`;
        
                let color = document.createElement('p');
                color.innerText = `Цвет: ${object[propertyName].color}`;

                let additional_info = document.createElement('p');
                additional_info.innerText = `Вакцинирован: ${object[propertyName].vaccinations}`;
                additional_info.innerText = `Пасспорт: ${object[propertyName].passport}`;

        
                cardDiv.append(name, age, color, additional_info);
                where.append(cardDiv);
        
            }
        }

        generateCards(document.querySelector('.items'), getCats());

// Задача 2
// Написать функцию generateTable, которая принимает на вход массив объектов и создает таблицу.
// Функция не должна быть привязаны к конкретным названиям свойств.
// Заголовки ячеек - названия свойств.
// Например, для articles заголовками будут: id, title, text, author; для goods заголовками будут: title, price, count и тп.

//         Массивы для тестирования:
//         let articles = [
//             {
//                 id: 1,
//                 title: "JS",
//                 text: "Статья про JS",
//                 author: "Александр"
//             },
//             {
//                 id: 2,
//                 title: "PHP",
//                 text: "Статья про PHP",
//                 author: "Виталий"
//             },
//             {
//                 id: 3,
//                 title: "Базы Данных",
//                 text: "Статья про Базы Данных",
//                 author: "Евгения"
//             },
//             {
//                 id: 4,
//                 title: "HTML",
//                 text: "Статья про HTML",
//                 author: "Виталий"
//             }
//         ];

//         let goods = [
//             {
//                 title: "Пианино",
//                 price: 3000,
//                 count: 25
//             },
//             {
//                 title: "Гитара",
//                 price: 1200,
//                 count: 40
//             },
//             {
//                 title: "Барабаны",
//                 price: 2700,
//                 count: 12
//             },
//             {
//                 title: "Флейта",
//                 price: 900,
//                 count: 50
//             },
//             {
//                 title: "Арфа",
//                 price: 3400,
//                 count: 5
//             }
//         ];

//         Примеры вызова функции:
//         generateTable(articles); - генерация таблицы со статьями
//         generateTable(goods); - генерация таблицы с товарами


// Задача 3
// Написать функцию generateField(n) по генерации поля размером n x n.
// Значение n не может быть меньше 3.
// Для 3х ячеек поля (для выбора ячейки использовать random) добавить атрибут prise.
// Значения атрибута prise - значения ключей объекта
// let prises = {
//     headphones: "Наушники",
//     book: "Книга",
//     postcard: "Открытка"
// };
