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

function slugify(title) {
    // Change code below this line
  
    const slug = title.toLowerCase().split(" ").join("-");
    return slug;
    // Change code above this line
  }

  console.log(slugify("Arrays for begginers"));

  