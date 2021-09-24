// Функция как значение
// Функции не отличаются от чисел, строк или массивов - это просто специальный тип данных (объект высшего порядка), 
// значение, которое можно хранить в переменной или передавать, как аргумент, в другую функцию.

// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }

// // Вызываем функцию greet
// // и выводим результат в консоль
// console.log(greet("Mango"));
// // Добро пожаловать Mango.

// // Выводим функцию greet
// // в консоль не вызывая её
// console.log(greet);
// /*
// ƒ greet() {
//      return `Добро пожаловать ${name}.`;
// }
// */
// В первом логе мы вызываем функцию greet при помощи круглых скобок и в консоль выводится результат её выполнения. 
// Во втором логе передаётся ссылка на функцию, а не результат её вызова (отсутствуют круглые скобки), поэтому в консоль 
// выводится тело функции. Это значит, что функцию можно присвоить в переменную или передать, как аругмент, другой функции.

// Задание 1
// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была 
// ссылка на функцию makePizza.

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
//   // Change code below this line
  
//   const result = (makePizza("Your pizza is being prepared, please wait."));
//   const pointer = (makePizza);

//__________________________________________________________________________________________________________________________________
// Колбэк-функции
// Функция обратного вызова (callback, колбэк) - это функция, которая передаётся другой функции в качестве аргумента и та, в 
// свою очередь, вызывает переданную функцию.

// Функция высшего порядка(higher order function) - функция, принимающая в качестве параметров другие функции или 
// возвращающая функцию как результат.

// // Колбэк-функция
// function greet(name) {
//   consle.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Mango", greet);
// Мы передали ссылку на функцию greet как аргумент, поэтому она будет присвоена в параметр callback и вызвана внутри 
// функции registerGuest через круглые скобки. Имя параметра для колбэка может быть произвольным, главное помнить, что значением будет функция.

// Задание  2
// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. 
// Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   // Chande code below this line
//   function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
//   }

//__________________________________________________________________________________________________________________________________
// Инлайн-колбэки
// Если колбэк-функция маленькая и нужна только для передачи аргументом, её можно объявить прямо при вызове функции в которую 
// передаём колбэк. Такая функция будет доступна только как значение параметра и больше нигде в коде.

// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Mango", function greet(name) {
//   consle.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Poly", function notify(name) {
//   consle.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

// Задание 3
// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), 
// которая логирует строку "Eating pizza <имя пиццы>".

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
//   // Change code below this line
  
//   makePizza("Ultracheese", function eatPizza(pizzaName){
//   console.log(`Eating pizza ${pizzaName}.`)}
//            );
//__________________________________________________________________________________________________________________________________
// Несколько колбэков
// Функция может принимать произвольное количество колбэков. Например, представим что мы пишем логику принятия звонков для 
// телефона. Программа должна включить автоответчик если абонент недоступен, или соединить звонок в противном случае. Доступность 
// абонента будем имитировать генератором случайного числа, чтобы между разными вызовами функции можно было получить различные результаты.

// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall("Mango");
// Проблема такого подхода в том, что функция processCall делает слишком много и привязывает проверку доступности абонента к 
// двум заранее определённым действиям. Что если в будущем вместо автоответчика нужно будет оставлять голограмму?

// Мы могли бы написать функцию так, чтобы она возвращала какое-то значение и потом по результату её выполнения делать проверки 
// и выполнять нужный код. Но проверки не относятся к внешнему коду и будут его засорять.

// Выполним рефакторинг функции так, чтобы она принимала два колбэка onAvailable и onNotAvailable, и вызывала их по условию.

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);
// Колбэки применяются для обработки действий пользователя на странице, при обработке запросов на сервер, выполнения 
// заранее неизвестных функций и т. п. В этом и заключается их суть - это функции предназначенные для отложенного выполнения.

// Задание 4
// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим 
// параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова 
// колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова 
// колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.


// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//   for (let piz of this.pizzas){
//   if(piz === pizzaName){
//   return onSuccess(pizzaName);
//   };
//   }
//   return onError (`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError)); // возвращает "Your order is accepted. Cooking pizza Smoked."
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError)); // возвращает "Your order is accepted. Cooking pizza Four meats."
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError)); // возвращает "Error! There is no pizza with a name Big Mike in the assortment."
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError)); // возвращает "Error! There is no pizza with a name Vienna in the assortment."

//__________________________________________________________________________________________________________________________________
// Метод forEach(callback)
// Перебирающий метод массива, который используется как замена циклов for и for...of при работе с коллекцией.

// массив.forEach(function callback(element, index, array) {
//   // Тело коллбек-функции
// });
// Поэлементно перебирает массив.
// Вызывает коллбек-функцию для каждого элемента массива.
// Ничего не возвращает.
// Аргументы коллбек-функции это значение текущего элемента element, его индекс index и сам исходный массив array. Объявлять можно только 
// те параметры которые нужны, чаще всего это элемент, главное не забывать про их порядок.

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });
// Единственным случаем, когда стоит использовать циклы for или for...of для перебора массива, это задачи с прерыванием выполнения цикла. 
// Прервать выполнение метода forEach нельзя, он всегда перебирает массив до конца.

// Задание 5
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, 
// которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function(items) {
//     totalPrice += items;
//   });

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
//__________________________________________________________________________________________________________________________________
// Задача. Фильтрация массива чисел
// Задание 6
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы 
// оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function(number){
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   })
  
//   // Change code above this line
//   return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3));
//__________________________________________________________________________________________________________________________________
// Задача. Общие элементы
// Задание 7
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, 
// и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function(oneArray) {
//     if (secondArray.includes(oneArray)) {
//       commonElements.push(oneArray);
//     } ;  
  
//   });

//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
//__________________________________________________________________________________________________________________________________
// Стрелочные функции.
// Стрелочные функции имеют сокращённый, более лаконичный синтаксис, что уменьшает объем кода, особенно когда функция маленькая или 
// если она используется как коллбек.

// Все стрелки создаются как функциональное выражение, и если функция не анонимна, то она должна быть присвоена переменной.

// // Обычное объявление функции
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Тоже самое как стрелочная функция
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };
// Ключевое слово function не используется, вместо этого сразу идёт объявление параметров, за которыми следует символ => и тело функции.

// Если параметров несколько, то они перечисляются через запятую в круглых скобках, между знаками равно = и стрелкой =>.

// const add = (a, b, c) => {
//   return a + b + c;
// };
// Если параметр один, его объявление может быть без круглых скобок.

// const add = a => {
//   return a + 5;
// };
// Если параметров нет, то обязательно должны быть пустые круглые скобки.

// const greet = () => {
//   console.log("Привет!");
// };
// Задание 8
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// }
//__________________________________________________________________________________________________________________________________
// Неявный возврат
// В стрелочной функции после символа => идёт её тело. Здесь может быть два варианта: с фигурными скобками и без них.

// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };
// Если фигурные скобки есть, и функция должна возвращать какое-то значение, необходимо явно поставить return. Это называется явный 
// возврат (explicit return). Такой синтаксис используется в том случае, если в теле функции нужно выполнить ещё какие-то инструкции 
// кроме возврата значения.

// const add = (a, b, c) => a + b + c;
// Если фигурных скобок нет, то возвращается результат выражения стоящего после =>. Это называется неявный возврат (implicit return). 
// В примере вернётся результат выражения сложения параметров a, b и c.

// Синтаксис неявного возврата сильно сокращает «шум» объявления функции с телом и возвращаемым выражением, но подходит только в случае
// когда в теле функции не нужно выполнять никаких дополнительных инструкций кроме возврата значения.

// // До
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // После
// const arrowAdd = (a, b, c) => a + b + c;

// Задание 9
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem
// ;
// // Change code above this line

//__________________________________________________________________________________________________________________________________
// Стрелочные функции как коллбеки
// Анонимные стрелочные функции отлично подходят как коллбеки для перебирающих методов массива из-за более краткого синтаксиса 
// объявления, особенно если не нужно тело функции.

// const numbers = [5, 10, 15, 20, 25];

// // Объявление функции
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// // Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });
// Стрелочную коллбек-функцию также можно объявлять отдельно и передавать на неё ссылку. Это стоит делать если одна функция 
// используется в нескольих местах программы или если она громоздкая.

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage);

// Задание 10
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию 
// передаваемую в метод forEach() на стрелочную функцию.

// Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((ordered) => {
//     totalPrice += ordered;
//   });

//   return totalPrice;
// }
// // Change code above this line

//__________________________________________________________________________________________________________________________________
// Задача. Фильтрация массива чисел 2.0
// Задание 11
// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

//__________________________________________________________________________________________________________________________________
// Задача. Общие элементы 2.0
// Задание 12
// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

//__________________________________________________________________________________________________________________________________
// Чистые функции
// Функция с побочными эффектами - это функция которая в процессе выполнения может изменять или использовать глобальные переменные, 
// изменять значение аргументов ссылочного типа, выполнять операции ввода-вывода и т. п.

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Произошла мутация исходных данных - массива numbers
// console.log(numbers); // [2, 4, 6, 8, 10]
// Функция dirtyMultiply(array, value) умножает каждый элемент массива array на число value. Она изменяет (мутирует) исходный массив 
// по ссылке.

// Чистая функция (pure function) - это функция результат которой зависит только от значений переданных аргументов. При одинаковых 
// аргументах она всегда возвращает один и тот же результат и не имеет побочных эффектов, то есть не изменяет значения аргументов.

// Напишем реализацию чистой функции умножения элементов массива, возвращающей новый массив, не изменяя исходный.

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функция вернула новый массив с изменёнными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]


// Задание 13
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, 
// добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала 
// новый массив с обновлёнными значениями.
// function changeEven(numbers, value) {
//     // Change code below this line
//     const newArray = [];
    
//     numbers.forEach(number => {
//       if(newArray.push(number % 2 === 0)){
//         return newArray.push(number + value);
//         }else{newArray.push(number)};

//     return newArray;});
//     // Change code above this line
//   }
// function changeEven(numbers, value) {
//     // Change code below this line
//   const newArray = [];
//     numbers.forEach(number => {
//         if (number % 2 === 0){
//     newArray.push(number + value);}
//     else {newArray.push(number);}
//     });
//     return newArray;
//     // Change code above this line
//   }
  

//     console.log(changeEven([1, 2, 3, 4, 5], 10));
// //__________________________________________________________________________________________________________________________________
// Метод map()
// Большинство перебирающих методов массива это чистые функции. Они создают новый массив, заполняют его, применяя к значению каждого 
// элемента указанную коллбек-функцию, после чего возвращают этот новый массив.

// Метод map(callback) используется для трансформации массива. Он вызывает коллбек-функцию для каждого элемента исходного массива, 
// а результат её работы записывает в новый массив, который и будет результатом выполнения метода.

// массив.map((element, index, array) => {
//   // Тело коллбек-функции
// });
// Поэлементно перебирает оригинальный массив.
// Не изменяет оригинальный массив.
// Результат работа коллбек-функции записывается в новый массив.
// Возвращает новый массив такой же длины.
// Его можно использовать для того, чтобы изменить каждый элемент массива. Оригинальный массив используется как эталон, на базе которого
//  можно сделать другую коллекцию.

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригинальный массив не изменился
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]
// Использование анонимных стрелочных функций с неявным возвратом сильно сокращает «шум» объявления коллбек-функции, делая код 
// чище и проще для восприятия.

// Задание 14
// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
//__________________________________________________________________________________________________________________________________
// Метод map() и массив объектов
// Мы уже знаем что повседневная задача это манипуляция массивом объектов. Например, получить массив значений свойства из всех 
// объектов. Есть массив студентов, а нужно получить отдельный массив их имён.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]
// Используя метод map() можно перебрать массив объектов, и в коллбек-функции вернуть значение свойства каждого из них.

// Задание 15
// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов
//  массива books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);

//__________________________________________________________________________________________________________________________________
// Метод flatMap()
// Метод flatMap(callback) аналогичен методу map(), но применяется в случаях, когда результат это многомерный массив который 
// необходимо «разгладить».

// массив.flatMap((element, index, array) => {
//   // Тело коллбек-функции
// });
// В массиве students хранится список студентов со списком предметов, которые посещает студент, в свойстве courses. Несколько 
// студентов могут посещать один и тот же предмет. Необходимо составить список всех предметов, которые посещает эта группа студентов, 
// пока даже повторяющихся.

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// students.map(student => student.courses);
// // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// students.flatMap(student => student.courses);
// // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы записывает в новый массив. Отличие от map() 
// в том, что новый массив «разглаживается» на глубину равную единице (одна вложенность). Этот разглаженный массив и есть результат работы flatMap().

// Задание 16
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);

//__________________________________________________________________________________________________________________________________
// Задача. Имена пользователей 17
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// Задание 17
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из 
// массива объектов в параметре users.

// const getUserNames = users => {
//   return users.map(user => user.name);
//   };
//__________________________________________________________________________________________________________________________________
// Задача. Почты пользователей 18 (из задачи 17)
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.
// Задание 18
// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива 
// объектов в параметре users.

// const getUserEmails = users => {
//   return users.map(user => user.email);
// };

//__________________________________________________________________________________________________________________________________
// Методы filter и find
// Метод filter(callback) используется для единственной операции - фильтрации массива, то есть когда необходимо выбрать 
// более одного элемента из коллекции по какому-то критерию.

// массив.filter((element, index, array) => {
//   // Тело коллбек-функции
// });
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает новый массив.
// Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции.
// Если коллбек вернул true элемент добавляется в возвращаемый массив.
// Если коллбек вернул false элемент не добавляется в возвращаемый массив.
// Если ни один элемент не удовлетворил условию, возвращает пустой массив.
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригинальный массив не изменился
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// То есть метод filter вызывает коллбек-функцию для каждого элемента исходного массива и если результат её выполнения true, 
// текущий элемент добавляет в новый массив.

// Задание 19
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной 
// oddNumbers массив нечётных. Обязательно используй метод filter().
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2);
//__________________________________________________________________________________________________________________________________
// Фильтрация уникальных элементов
// Используя метод filter() можно выполнить фильтрацию массива так, что в нём останутся только уникальные элементы. Этот приём 
// работает только с массивом примитивных значений - не объектов.

// Вернёмся к группе студентов и массиву всех посещаемых предметов, которые мы получили методом flatMap().

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// В переменной allCourses хранится массив всех посещаемых предметов, которые могут повторяться. Задача заключается в том, 
// чтобы сделать новый массив, в котором будут только уникальные предметы, то есть без повторений.

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// Используя array.indexOf(course) выполняем поиск первого совпадения текущего элемента course и получаем его индекс в оригинальном 
// массиве всех курсов. В параметре index хранится индекс текущего элемента course при переборе массива методом filter.

// Если результат indexOf() и значение index равны - это уникальный элемент, потому что это первый раз когда такое значение встречается 
// в массиве и на текущей итерации фильтр обрабатывает именно его.

// # Массив всех курсов
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// Для элемента "mathematics" под индексом 0:

// indexOf() вернёт 0, потому что ищет первое совпадение.
// Значение параметра index будет 0.
// Они равны, значит это уникальный элемент.
// Для элемента "mathematics" под индексом 3:

// indexOf() вернёт 0, потому что ищет первое совпадение.
// Значение параметра index будет 3.
// Они не равны, значит это повторяющийся - не уникальный элемент.

// Задание 20
// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной 
// uniqueGenres массив уникальных жанров - без повторений.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (element,index, array)=> array.indexOf(element) === index );

//__________________________________________________________________________________________________________________________________
// Метод filter() и массив объектов
// При работе с массивом объектов выполняется фильтрация по значению какого-то свойства. В результате получается новый массив 
// отфильтрованных объектов.

// Например, есть массив студентов с баллами за тест. Необходимо отфильтровать лучших (балл выше 80), худших (балл ниже 50) и средних 
// студентов (балл от 50 до 80).

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Mango и Kiwi

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Ajax

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Poly и Houston

// Задание 21
// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением 
// в переменной AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);
//__________________________________________________________________________________________________________________________________
// Задача. Пользователи с цветом глаз
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// Задание 22
// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз 
// (свойство eyeColor) совпадает со значением параметра color.

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color); 
//   };
//__________________________________________________________________________________________________________________________________
// Задача. Пользователи в возрастной категории (із задачі 22)
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// Задание 23
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых 
// (свойство age) попадает в промежуток от minAge до maxAge.
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age >= minAge && user.age <= maxAge);
//  };
//__________________________________________________________________________________________________________________________________
// Задача. Пользователи с другом (із задачі 22)
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// Задание 24
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем 
// в параметре friendName. Массив друзей пользователя хранится в свойстве friends.
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));
// };
//__________________________________________________________________________________________________________________________________
// Задача. Список друзей(із задачі 22)
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.
// Задание 25
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких 
// пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

// const getFriends = (users) => {
//   const totalFriends = users.flatMap(user => user.friends);
//  const filterFriends = totalFriends.filter((friend, index, array) => array.indexOf(friend) === index);
//  return filterFriends;
// };
//__________________________________________________________________________________________________________________________________
// Задача. Активные пользователи
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// Задание 26
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

// const getActiveUsers = (users) => {
//     return users.filter(user => user.isActive === true);
//   };
//__________________________________________________________________________________________________________________________________
// Задача. Неактивные пользователи
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// Задание 27
// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.

// const getInactiveUsers = (users) => {
//     return users.filter(user => user.isActive !== true);
//  };
//__________________________________________________________________________________________________________________________________
// Метод find()
// Если метод filter(callack) используется для поиска всех элементов удовлетворяющим условию, то метод find(callback) 
// позволяет найти и вернуть первый подходящий элемент, после чего перебор массива прекращается. То есть он ищет до первого совпадения.

// массив.find((element, index, array) => {
//   // Тело коллбек-функции
// });
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает первый элемент удовлетворяющий условию, то есть когда коллбек возвращает true.
// Если ни один элемент не подошёл, то есть для всех элементов коллбек вернул false, метод возвращает undefined.
// Метод find() используется для одной задачи - поиска элемента по уникальному значению свойства. Например, поиск 
// пользователя по почте, автомобиля по серийному номеру, книги по названию и т. п.

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
// colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
// colorPickerOptions.find((option) => option.label === "white"); // undefined

// Задание 28
// Используя метод find() дополни код так, чтобы:

// В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.

// const books = [
//     {
//       title: 'The Last Kingdom',
//       author: 'Bernard Cornwell',
//       rating: 8.38,
//     },
//     {
//       title: 'Beside Still Waters',
//       author: 'Robert Sheckley',
//       rating: 8.51,
//     },
//     {
//       title: 'The Dream of a Ridiculous Man',
//       author: 'Fyodor Dostoevsky',
//       rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   ];
//   const BOOK_TITLE = 'The Dream of a Ridiculous Man';
//   const AUTHOR = 'Robert Sheckley';
//   // Change code below this line
  
//   const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
//   const bookByAuthor = books.find((book) => book.author === AUTHOR);
//__________________________________________________________________________________________________________________________________
// Задача. Пользователь с почтой
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// Задание 29
// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email)
//  совпадает со значением параметра email.

// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email);
//  };
//__________________________________________________________________________________________________________________________________
// Метод every()
// Метод every(callback) проверяет проходят ли все элементы массива тест предоставляемый коллбек-функцией. Возвращает true или false.

// массив.every((element, index, array) => {
//   // Тело коллбек-функции
// });
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает true если все элементы массива удовлетворяют условию.
// Возвращает false если хотя бы один элемент массива не удовлетворяет условию.
// Перебор массива прекращается если коллбек возвращает false.
// // Все элементы больше либо равны нулю? - да
// [1, 2, 3, 4, 5].every((value) => value >= 0); // true

// // Все элементы больше либо равны нулю? - нет
// [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false
// При работе с массивом объектов проверяется значение какого-то их свойства.

// Задание 30
// Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

//__________________________________________________________________________________________________________________________________
// Задача. Все ли пользователи активны
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// Задание 31
// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и 
// возвращала true или false.

// const isEveryUserActive = (users) => {
//     return users.every(user => user.isActive === true);
//  };
//__________________________________________________________________________________________________________________________________
// Метод some()
// Метод some(callback) проверяет проходит ли хотя бы один элемент массива тест предоставляемый коллбек-функцией. 
// Возвращает true или false.

// массив.some((element, index, array) => {
//   // Callback function body
// });
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает true если хотя бы один элемент массива удовлетворяет условию.
// Возвращает false если ни один элемент массив не удовлетворяет условию.
// Перебор массива прекращается если коллбек возвращает true.
// // Есть хотя бы один элемент больше либо равный нулю? - да
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Есть хотя бы один элемент больше либо равный нулю? - да
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Есть хотя бы один элемент меньше нуля? - нет
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Есть хотя бы один элемент меньше нуля? - да
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// Задание 32
// Используя метод some() дополни код так, чтобы:

// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);
//__________________________________________________________________________________________________________________________________
// Задача. Есть ли активные пользователи
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// Задание 33
// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала 
// true или false.

// const isAnyUserActive = users => {
//     return users.some(user => user.isActive === true);
//  };
//__________________________________________________________________________________________________________________________________
// Метод reduce()
// Метод reduce(callback, initialValue) используется для последовательной обработки каждого элемента массива с сохранением 
// промежуточного результата, как аккумулятор. Немного сложнее других в усвоении, но результат стоит того.

// массив.reduce((previousValue, element, index, array) => {
//   // Тело коллбек-функции
// }, initialValue);
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает что угодно.
// Делает что угодно.
// Легче всего представить его работу на примере подсчёта суммы элементов массива.

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32
// Первый параметр коллбек-функции (previousValue) это аккумулятор, то есть промежуточный результат. Значение которое вернёт 
// коллбек-функция на текущей итерации, будет значением этого параметра на следующей.

// Вторым аргументом для reduce() можно передать необязательное начальное значение аккумулятора - параметр initialValue.

// # Вначале метод reduce() создаёт внутреннюю переменную-аккумулятор и
// # присваивает ей значение параметра initialValue или первого элемента
// # перебираемого массива, если initialValue не задан.
// previousValue = 0

// # Далее коллбек-функция вызывается для каждого элемента массива. Текущее значение
// # параметра previousValue это то, что вернула коллбек-функция на прошлой итерации.
// Итерация 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Итерация 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Итерация 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Итерация 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Итерация 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # После того как весь массив перебран, метод reduce() возвращает значение аккумулятора.
// Результат - 32
// То есть метод reduce() используется когда необходимо взять «много» и привести к «одному». В повседневных задачах его 
// применение сводится к работе с числами.

// Задание 34
// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной 
// totalPlayTime получилось общее игровое время из массива playtimes.

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
//   // Change code below this line
  
//   const totalPlayTime = playtimes.reduce((acc, number) => {
//   return acc + number;
//   }, 0);
  
//   // Change code above this line
//   const averagePlayTime = totalPlayTime / playtimes.length;

//__________________________________________________________________________________________________________________________________
// Метод reduce() и массив объектов
// При работе с массивом объектов выполняется редуцирование по значению какого-то свойства. Например, есть массив студентов с баллами 
// за тест. Необходимо получить средний бал.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// Задание 36
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. 
// Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
//   // Change code below this line
  
//   const totalAveragePlaytimePerGame = players.reduce((acc, play) => acc + play.playtime / play.gamesPlayed, 0,);

//__________________________________________________________________________________________________________________________________
// Задача. Общий баланс пользователей
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// Задание 36
// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) 
// которые хранят пользователи из массива users.

// const calculateTotalBalance = users => {
//     return users.reduce((acc, user) => acc + user.balance, 0,) 
//   };
//__________________________________________________________________________________________________________________________________
// Задача. Общее количество друзей
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// Задание 37
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) 
// всех пользователей из массива users.

// const getTotalFriendCount = users => {
//     return users.reduce((acc, user) => acc + user.friends.length,  0,)
//  };
//__________________________________________________________________________________________________________________________________
// Метод sort()
// Метод sort() сортирует элементы массива, но в отличии от остальных перебирающих методов, он сортирует исходный массив.

// Сортирует и изменяет исходный массив.
// Возвращает изменённый массив, то есть ссылку на отсортированный исходный.
// По умолчанию сортирует по возрастанию.
// Сортировка происходит путём приведения значений к строке и сравнения порядковых номеров в таблице Unicode.
// Такой массив чисел будет отсортирован по возврастанию.

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]
// Но, так как по умолчанию значения приводятся к строке, стандартная сортировка чисел работает необычно. Поэтому в следующем упражнении 
// мы рассмотрим как задавать свой порядок сортировки.

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]
// Массив строк сортируется по алфавиту.

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
// students.sort();
// console.log(students); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]
// При этом порядковый номер заглавных букв меньше чем у прописных.

// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters); // ["A", "B", "C", "a", "b", "c"]
// Из-за того, что сортируется исходный массив, нарушается принцип чистоты функций и нельзя удобно сделать несколько производных 
// коллекций на базе исходной. Например, сделать коллекцию отсортированную по возрастанию, а другую по убыванию. Поэтому перед с
// ортировкой делают полную копию исходного массива и сортируют уже её.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Задание 38
// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, 
// а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

//__________________________________________________________________________________________________________________________________
// Свой порядок сортировки чисел
// Для указания своего порядка сортировки методу sort(compareFunction) нужно передать коллбек-функцию с двумя параметрами. Это 
// функция сравнения (compare function), порядок сортировки зависит от её результата. Метод sort() будет вызывать её для произвольных двух элементов.

// массив.sort((a, b) => {
//   // Callback function body
// });
// a - первый элемент для сравнения.
// b - второй элемент для сравнения.
// Если вызов compareFunction(a, b) возвращает любое отрицательное значение, то есть a меньше b, сортировка поставит a перед b. Это 
// сортировка по возрастанию.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
// Если вызов compareFunction(a, b) возвращает любое положительное значение больше нуля, то есть b больше a, сортировка поставит b перед a. 
// Это сортировка по убыванию.

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]
// Eсли вызов compareFunction(a, b) вернёт 0, сортировка оставит a и b неизменными по отношению друг к другу, но отсортирует их по отношению 
// ко всем другим элементам. Но вообще не важно, что возвращать, если их взаимный порядок не имеет значения.

// Задание 39
// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в 
// переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates 
// копия отсортированная по убыванию.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
//__________________________________________________________________________________________________________________________________
// Свой порядок сортировки строк
// Для сортировки строк в алфавитном порядке, по возрастанию или убыванию, используется метод строк localeCompare().

// firstString.localeCompare(secondString)
// Он вызывается на строке которую нужно сравнить (firstString) с той, что передана ему как аргумент (secondString).

// "a".localeCompare("b"); // -1
// "b".localeCompare("a"); // 1
// "a".localeCompare("a"); // 0
// "b".localeCompare("b"); // 0
// Возвращает отрицательное значение если firstString должна быть перед secondString.
// Возвращает положительное значение больше нуля если firstString должна быть после secondString.
// Если строки одинаковы, возвращается ноль.
// Это удобно использовать при сортировке строк, так как метод sort() ожидает такие же значения от коллбек-функции.

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

// Задание 40
// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, 
// чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной 
// authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
//   ];
//   // Change code below this line
  
//   const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
  
//   const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
//__________________________________________________________________________________________________________________________________
// Сортировка объектов
// При работе с массивом объектов сортировка выполняется по числовому или строчному значению какого-то свойства. Например, есть 
// группа студентов с баллами за тест. Необходимо отсортировать массив объектов по возрастанию и убыванию количества баллов, и по 
// имени студента.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// Задание 41
// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   // Change code below this line
  
//   const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
  
//   const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));
  
//   const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
  
//   const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
//__________________________________________________________________________________________________________________________________
// Задача. Сортировка по балансу
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// Задание 42
// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса 
// (свойство balance).

// const sortByAscendingBalance = users => {
//     return users.sort((a, b) => a.balance - b.balance);
//  };
//__________________________________________________________________________________________________________________________________
// Задача. Сортировка по количеству друзей
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// Задание 43
// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества 
// их друзей (свойство friends).

// const sortByDescendingFriendCount = users => {
//     return [...users].sort((a, b) => b.friends.length - a.friends.length);
//  };
//__________________________________________________________________________________________________________________________________
// Задача. Сортировка по имени
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// Задание 44
// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в 
// алфавитном порядке.

// const sortByName = users => {
//     return [...users].sort((firstName, lastName) => firstName.name.localeCompare(lastName.name));
//  };
//__________________________________________________________________________________________________________________________________
// Цепочки методов (чейнинг, chaining)
// Есть массив объектов с именами, баллами и посещаемыми предметами каждого студента.

// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];
// Необходимо получить массив их имён отсортированный по возрастанию баллов за тест. Для этого мы отсортируем копию массива методом sort(), 
// после чего методом map() составим массив значений свойства name из сортированного массива.

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]
// Проблема в том, что у нас появляются промежуточные переменные после каждой операции кроме финальной. Переменная sortedByAscendingScore 
// лишняя и необходима только для хранения промежуточного результата.

// Избавиться от таких «мёртвых» переменных можно группируя вызовы методов в цепочки. Каждый следующий метод будет выполняться на результате 
// работы предыдущего.

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]
// Делаем копию исходного массива перед сортировкой.
// На копии вызываем метод sort().
// К результату работы метода sort() применяем метод map().
// Переменной names присваивается результат работы метода map().
// Получим сортированный по алфавиту массив уникальных посещаемых предметов.

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]
// На исходном массиве вызываем flatMap() и делаем разглаженный массив всех курсов.
// К результату метода flatMap() применяем метод filter() для фильтрации уникальных элементов.
// На результате метода filter() вызываем sort().
// Переменной uniqueSortedCourses присваивается результат работы метода sort().
// Цепочка методов может быть произвольной длины, но обычно не более 2-3 операций. Во-первых, перебирающие методы используются для 
// сравнительно простых операций над коллекцией. Во-вторых, вызов каждого последующего метода, это дополнительный перебор массива, 
// что при достаточном количестве, может сказаться на производительности.

// Задание 45
// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения 
// переменной MIN_BOOK_RATING.

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//       title: "The Dreams in the Witch House",
//       author: "Howard Lovecraft",
//       rating: 8.67,
//     },
//   ];
//   const MIN_BOOK_RATING = 8;
//   // Change code below this line
  
//   const names = [...books]
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b));

//__________________________________________________________________________________________________________________________________
// Задача. Пользователи и друзья
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// Задание 46
// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию 
// количества их друзей (свойство friends).

// const getNamesSortedByFriendCount = users => {
//     return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name)
//   };
//__________________________________________________________________________________________________________________________________
// Задача. Имена друзей
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// Задание 47
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту.

// const getSortedFriends = users => {
//     return users
//     .flatMap(user => user.friends)
//    .filter((user, index, array) => array.indexOf(user) === index)
//     .sort((a, b) => a.localeCompare(b));
//  };
//__________________________________________________________________________________________________________________________________

// Задача. Общий баланс
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// Задание 48
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), 
// пол которых (свойство gender) совпадает со значением параметра gender.

// const getTotalBalanceByGender = (users, gender) => {
//     return users
//    .filter(user => user.gender === gender)
//    .reduce((acc, user) => acc + user.balance, 0,)
//  };