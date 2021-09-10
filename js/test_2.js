// Задача 2:
//  проверка пароля (ранний возврат)
// Задание
// Функция checkPassword получает пароль пользователя в параметр password, проверяет 
// его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:

// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line
  
   
  
//     if (password === ADMIN_PASSWORD) {
//       return "Welcome!";  } 
//     ;
   
  
//     return "Access denied, wrong password!";
//     // Change code above this line
//   }
//_______________________________________________________________________________________________________________________

// Задача 3 : склад товаров 3.0
// Задание
// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о 
// результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// function checkStorage(available, ordered) {
//     // Change code below this line
    
  
//     if (ordered === 0) {
//        return  "Your order is empty!";
//     } 
//     if (ordered > available) {
//        return  "Your order is too large, not enough goods in stock!";
//     }  
//        return  "The order is accepted, our manager will contact you";
    
//     // Change code above this line
//   }

//_______________________________________________________________________________________________________________________

// Индекс последнего элемента
// Чаще всего, мы заранее в коде не знаем какая будет длина массива. Для того, чтобы получить значение 
// последнего элемента применяется следующий подход - длина массива всегда на единицу больше, чем индекс 
// последнего элемента. Используя формулу длина_массива - 1 можно получить значение последнего элемента массива произвольной длины.

// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// planets[lastElementIndex]; // "Venus"

// Задание 8
// Объяви две переменные:

// Имя переменной	Ожидаемое значение
// lastElementIndex	Индекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	Значение последнего элемента массива
  
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length -1;
// const lastElement = fruits[lastElementIndex];

//______________________________________________________________________________________________________________________

// Задача: Крайние элементы массива
// Задание 9
// Напиши функцию getExtremeElements(array) 
// которая принимает один параметр array - массив элементов произвольной длины. 
// Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//     // Change code below this line

//     const firstElementIndex =array[0];
//     const lastElementIndex =  array[array.length -1];   
//     array = [firstElementIndex, lastElementIndex];

//     return array;
//     // Change code above this line
//   }


// console.log(getExtremeElements([1, 2, 3, 4, 5])); 
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

//____________________________________________________________________________________________________________________

// 10
// Метод строк split()
// Метод split(delimeter) позволяет превратить строку в массив, «разбив» его по разделителю delimeter.
//  Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// console.log(message.split(" ")); // ["JavaScript", "essentials"]
// Задание
// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words 
// результат разделения строки message по разделителю delimeter - массив строк.

// function splitMessage(message, delimeter) {
//     let words;
//     // Change code below this line
//       words = message.split(delimeter); 
//     // Change code above this line
//     return words;
//   }

// console.log(splitMessage("Mango hurries to the train", " ")); 
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

//_______________________________________________________________________________________________________________
// Задача 11: гравировка украшений
// Задание
// Сервису гравировки украшений нужна функция, которая бы автоматически 
// считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, 
// состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.
// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line

//     const stringToArray = message.split(" ");
//     const arrayLength = stringToArray.length;
//     let totalPrice = arrayLength * pricePerWord;
//     return totalPrice; 
   
//     // Change code above this line
//  }


// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

//_______________________________________________________________________________________________________________________________

// Метод массива join()
// Метод массивов join(delimeter) позволяет соединить элементы массива в строку. В строке 
// элементы будут разделены символом или группой символов указанных в delimeter. То есть это операция обратная методу строк split(delimeter).

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("*")); // 'JavaScript*is*amazing'


// Задание 12
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в 
// переменной string результат соединения элементов массива array c разделителем delimeter - строку.

// function makeStringFromArray(array, delimeter) {
//     let string;
//     // Change code below this line
  
//   string = array.join(delimeter);
  
//     // Change code above this line
//     return string;
//   }

//________________________________________________________________________________________________________________________________

// Задание 13
// Термин slug - это человеко-понятный уникальный идентификатор, который используется 
// в веб-разработке для создания читабельных URL-адесов.

// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, 
// можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.

// Внимание
// Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и 
// возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// function slugify(title) {
//     // Change code below this line
  
//     const slug = title.toLowerCase().split(" ").join("-");
//     return slug;
//     // Change code above this line
//   }

//   console.log(slugify("Arrays for begginers"));

//__________________________________________________________________________________________________________________________

// Метод slice()
// Метод slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. 
// Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.

// Если begin и end не указаны, будет создана полная копия исходного массива.
// Если не указан end, копирование будет от start и до конца исходного массива.
// Если значение start отрицательное, а end не указан, то будут скопированы последние N элементов.
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
// console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
// console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']


// Задание 14
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

//_______________________________________________________________________________________________________________

// Метод concat()
// Метод concat используется для объединения двух или более массивов. Он не изменяет массив на котором 
// вызывается, а возвращает новый. Порядок аргументов метода влияет на порядок элементов нового массива.

// const firstArray = ["Mercury", "Venus", "Earth"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Uranus", "Neptune"];
// const allPlanets = firstArray.concat(secondArray, thirdArray);

// console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
// console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];


// Задание 15
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

//________________________________________________________________________________________________________________

// Задача: композиция массивов
// Задание  16
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами 
// двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength 
// элементов. В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
	
//     const array = firstArray.concat(secondArray).slice();
  
//   	if (array.length > maxLength){
//       array.length = maxLength;
//     } 
//  	return array;

//     // Change code above this line
//   }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ['Mercury', 'Venus', 'Earth'];

//_________________________________________________________________________________________________________________

// Цикл for
// Циклы используются для многократного повторения кода. Объявление цикла for состоит из трёх выражений.

// for (Инициализация; Условие; Пост - выражение) {
//   // Тело цикла
// }
// Инициализация - выполняется один раз перед началом цикла. Используется для создания переменной-счётчика и 
// указания её начального значения.
// Условие - выражение, оцениваемое перед каждой итерацией (повторением) цикла. Тело цикла выполняется только 
// тогда, когда выражение приводится к true. Цикл завершается, если значение будет false.
// Пост-выражение - выполняется в конце каждого повторения цикла, перед проверкой условия. Используется для обновления переменной-счётчика.
// Тело - набор инструкций для выполнения на каждом повторении. Выполняется, если выражение условия приводится к true.
// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }
// В примере объявляется переменная i, инициализируется значением 0 и цикл выполняется (его тело) до тех пор, пока 
// i <= 20, то есть условие приводится к true. После каждой итерации счётчик увеличивается на 5.

// Задание 17
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

// const start = 3;
// const end = 7;

// for (let i = start ; i <= end ; i += 1 ) { // Change this line
//   console.log(i);
// }

//______________________________________________________________________________________________________

// Задача: сумма чисел (цикл for)
// Задание 18
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и 
// возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, 
// то есть 6.

// function calculateTotal(number) {
//     // Change code below this line
//    let total = 0;
     
//    for (let i= 1; i <= number; i +=1){
//     total += i;
//    }
//    return total;
//      // Change code above this line
// }

//_____________________________________________________________________________________________________________

// Итерация по массиву
// Цикл for можно использовать для итерации по массиву, то есть «перебрать» его поэлементно.

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }
// Для доступа к элементам используется синтаксис квадратных скобок массив[индекс], где индекс - это значение 
// счётчика цикла от 0 и до последнего индекса массива, который на единицу меньше длины массива.

// Задание 19
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

//____________________________________________________________________________________________________________

// Задача: подсчёт суммы покупки

// Задание 20
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает 
// общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, 
// как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i+=1){
//     total += order[i];
//        }
//   // Change code above this line
//   return total;
// }

//______________________________________________________________________________________________________________

// Задача: поиск самого длинного слова
// Задание 21
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов 
// разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//     // Change code below this line
//    const word = string.split(" ");
//    let maxWord = word[0];
//   for (let i = 1; i < word.length; i += 1){
//    if (word[i].length > maxWord.length){
//    maxWord = word[i];
//    }
//   }
//    return maxWord;
//    // Change code above this line
//   }

//   console.log(findLongestWord("Google do a roll"));
//   console.log(findLongestWord("May the force be with you"));


//________________________________________________________________________________________________________

// Метод push()
// Метод push() позволяет добавить один или несколько элементов в конец массива, 
// ез необходимости указывать индексы добавляемых элементов.

// const planets = ["Earth", "Mars", "Venus"];
// planets.push("Jupiter");
// planets.push("Saturn", "Uranus", "Neptune");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

// Задание 22
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех 
// целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//     for (let i = min; i <= max; i += 1){
//    numbers.push(i);
//     }
//     // Change code above this line
//     return numbers;
//   }

//   console.log(createArrayOfNumbers(1, 3));

//__________________________________________________________________________________________________________

// Задача: фильтрация массива чисел
// Задание 23
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает 
// новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// function filterArray(numbers, value) {
//     // Change code below this line
//    let array = [];
//    for (const number of numbers){
     
//      if(number > value){
//        array.push(number);
//      }
//    }
 
//    return array;
//    // Change code above this line
//  }

//__________________________________________________________________________________________-

// Метод includes()
// Метод includes(value) проверяет есть ли в массиве элемент со значением value и возвращает 
// true или false соответственно. Область применения этого метода сводится к ситуациям, когда 
// необходимо проверить есть ли элемент в массиве и не важна его позиция (индекс).

// const planets = ["Earth", "Mars", "Venus"];

// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupiter")); // false


// Задание 24
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет 
// есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
    
//     return fruits.includes(fruit); // Change this line
//   }
  
//   console.log(checkFruit("plum"));

//_____________________________________________________________________________________

// Задача: общие элементы
// Задание 25
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они 
// ]присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной 
// длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, 
// которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//     // Change code below this line
//   const ar1 = array1;
//    const ar2 =  array2;
//     const array3 = [];
    
//     for(const ara of ar1){
//       if(ar2.includes(ara)){
//         array3.push(ara);
//       }
//     }
//     return array3
  
  
//    // Change code above this line
//   }

//   console.log(getCommonElements([1, 2, 3], [2, 4])getCommonElements([1, 2, 3], [2, 4]);

//__________________________________________________________________________________________-

// Цикл for...of
// Инструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки. 
// Тело цикла будет выполняться для значения каждого элемента. Это хорошая замена циклу for, 
// если не нужен доступ к счётчику итерации.

// for (const variable of iterable) {
//   // тело цикла
// }
// variable — переменная, которая будет хранить значение элемента на каждой итерации
// iterable — коллекция, которая имеет перечислимые элементы, например массив
// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }

// Задание 26
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
  
//     for (const ord of order) {
//       total += ord;
//     }
  
//     // Change code above this line
//     return total;
//   }

//______________________________________________________________________________

// Зачада: фильтрация массива чисел 2.0
// Задание 27
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];
  
//     for (const number of numbers) {
  
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
  
//     return filteredNumbers;
//     // Change code above this line
//   }
//________________________________________________________________________________

  
// Оператор %
// Вместо того, чтобы возвращать результат деления, операция по модулю (%) возвращает 
// целочисленный остаток от деления двух чисел - делимого и делителя.

// 5 % 1 = 0;
// // 5, разделенное на 1, равно 5, а остаток - 0

// 5 % 2 = 1;
// //  5, разделенное на 2, равно 2, а остаток - 1

// 5 % 3 = 2;
// //  5, разделенное на 3, равно 1, а остаток - 2

// 5 % 4 = 1;
// //  5, разделенное на 4, равно 1, а остаток - 1

// 5 % 5 = 0;
// //  5, разделенное на 5, равно 1, а остаток - 0
// Задание 28
// Дополни выражения остатка от деления так, чтобы код проходил тесты.

// Тесты
// Объявлена переменная a
// Значение переменной a это число 0
// Объявлена переменная b
// Значение переменной b это число 1
// Объявлена переменная c
// Значение переменной c это число 3
// Объявлена переменная d
// Значение переменной d это число 5
// Объявлена переменная e
// Значение переменной e это число 2

// Ответы
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;
//_________________________________________________________________________________________-

// Задача: чётные числа
// Задание 29
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел 
// от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//    // Change code below this line
// const number = [];
//   for( i = start; i <= end; i +=1){
//     if ( i % 2 === 0){
//       number.push(i);}
//   }
//   return number;

//     // Change code above this line
//   }
//    console.log(getEvenNumbers(2, 5));

//____________________________________________________________________________________-

// Оператор break
// Прервать выполнение цикла можно в любой момент. Для этого существует оператор break, 
// который полностью прекращает выполнение цикла и передаёт управление на строку за его телом.

// В примере ищем число 3. Как только выполнится условие if, цикл прекратит своё выполнение (будет прерван).

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Нашли число 3, прерываем выполнение цикла");
//     break;
//   }
// }

// console.log("Лог после цикла");

// Задание 30
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое 
// делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

//___________________________________________________________________________________________-
// Оператор break vs return в функции
// Если цикл находится в теле функции, то оператор break не прекращает выполнение функции, а 
// только прервёт цикл. Для того чтобы прерывать выполнение сразу цикла и функции есть оператор return.

// В примере ищем число 3. Как только выполнится условие if, делаем возврат, который прервёт выполнение цикла и функции.

// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log("Нашли число 3, делаем возврат, прерывая цикл и функцию");
//       return i;
//     }
//   }

//   // Этот console.log не выполнится
//   console.log("Лог после цикла в теле функции");
// }

// const result = fn();
// console.log("Лог после выхода из функции");
// console.lof(`Результат выполнения функции ${result}`);

// Задание 31
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number

// function findNumber(start, end, divisor) {
//     // Change code below this line
//     let number;
  
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         number = i;
//         return i;
//       }
//     }
  
//     return number;
//     // Change code above this line
//   }
  //___________________________________________________________________________________________-

//   Задача: функция includes()

// Задание 32
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива 
// массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если 
// есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// function includes(array, value) {
//     // Change code below this line
   
//     for ( i = 0; i < array.length; i+=1){
//       if(array[i] === value){
//         return true;}
//     }
      
//     return false;
    
//     // Change code above this line
//   }
  