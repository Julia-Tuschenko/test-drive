// // Change code below this line
// let productName = "Droid";
// let pricePerItem = 2000;
// // console.log(productName);
// // 'Droid'
// console.log(productName);
// // console.log(pricePerItem);
// // 2000
// console.log(pricePerItem);


// // Change code below this line
// productName = "Repair droid";
// pricePerItem = 3500;

// const topSpeed =  160;
// const distance =  617.54;
// const login =  "mango935";
// const isOnline =  true;
// const isAdmin = false;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// Change code below this line
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + 50;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery ( ${deliveryFee} credits) is included in total price.`;
// console.log(message);

// function sayHi(){
//     console.log("Hello,this is my first fuction!");
//     }
//     sayHi();
// Change code below this line
// function add(a,b,c) {
//     console.log(`Addition result equals ${a+b+c}`);
//     // Change code above this line
//   }
  
//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);

  // function add(a, b, c) {
  //   // Change code below this line
  // return a + b + c
  
  
  //   // Change code above this line
  // }
  
  // add(2, 5, 8); // 15
  
  // console.log(add(15, 27, 10));
  // console.log(add(10, 20, 30));
  // console.log(add(5, 10, 15));

//   function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//   if(available > ordered)
//   message = "Order is processed, our manager will contact you.";
//    else 
//    message = "Not enough goods in stock!";
  
//     // Change code above this line
//     return message;
//   }
  
//   console.log(checkStorage(100, 50));
//   console.log(checkStorage(100, 130));
//   console.log(checkStorage(200, 20));
//   console.log(checkStorage(200, 150));
//  console.log(checkStorage(150, 180));

// EXAMPLE 1   Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и 
// возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида
// orderedQuantity - кол-во заказанных дроидов
// customerCredits - сумма средств на счету клиента
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left".
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
// 	const totalPrice = pricePerDroid * orderedQuantity;
    
//     if (totalPrice > customerCredits){
//        message = `Insufficient funds!`;
 
//     } else 
//   	 message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
    
//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// Задание 2
// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, 
// значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка "There are no products in the order!".
// Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка "Your order is too large, there are not enough items in stock!".
// В противном случае в переменную message присваевается строка "The order is accepted, our manager will contact you".

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// 	if (ordered === 0){
//       message = `There are no products in the order!`;
//     } else if(ordered > available){
//       message = `Your order is too large, there are not enough items in stock!`;
//     } else {
//       message = `The order is accepted, our manager will contact you`;
//     }
//   // Change code above this line
//   return message;
// }
//  console.log(checkStorage(100, 50));
//    console.log(checkStorage(100, 130));
//    console.log(checkStorage(70, 0));
//    console.log(checkStorage(200, 20));
//    console.log(checkStorage(200, 250));
//    console.log(checkStorage(150, 0));

// Задание 3
// Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от start до end. 
// То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false.

// function isNumberInRange(start, end, number) {
//   const isInRange = start <= number && number <= end; // Change this line

//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = ( subType === "pro" || subType === "vip"); // Change this line

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));

// Задание 4
// Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) 
// в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.

// Используя ветвления и логические операторы, дополни код функции.

// Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
// Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.


// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if ( 50000 <= totalSpent){
//     discount = GOLD_DISCOUNT;
//   }  else if (totalSpent >= 20000 && totalSpent <= 50000){
//     discount = SILVER_DISCOUNT;
//   }  else if (totalSpent >= 5000 && totalSpent < 20000){
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }

// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));

// function checkStorage(available, ordered) {

//   // Change code below this line
//   const message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));
//_____________________________________________________________________________
// Задание 5
// Функция getShippingCost(country) должна проверять возможность доставки товара в страну 
// пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

// Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> и <price> 
// необходимо подставить соотвествующие значения.

// Список стран и стоимость доставки:

// China - 100 кредитов
// Chile - 250 кредитов
// Australia - 170 кредитов
// Jamaica - 120 кредитов
// Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то 
// функция должна вернуть строку "Sorry, there is no delivery to your country"

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
// switch(country){
//   case "China":
//     message = `Shipping to ${country} will cost 100 credits`;
//     break;
//       case "Chile":
//     message = `Shipping to ${country} will cost 250 credits`;
//     break;
//       case "Australia":
//     message = `Shipping to ${country} will cost 170 credits`;
//     break;
//       case "Jamaica":
//     message = `Shipping to ${country} will cost 120 credits`;
//     break;
//   default:
//     message = "Sorry, there is no delivery to your country";
// 	}
//   // Change code above this line
//   return message;
// }

// console.log((getShippingCost("Australia")));
// console.log((getShippingCost("Germany")));
// console.log((getShippingCost("China")));
// console.log((getShippingCost("Chile")));
// console.log((getShippingCost("Jamaica")));
// console.log((getShippingCost("Sweden")));

//_____________________________________________________________________________________

// Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. 
// Дополни шаблонную строку в переменной message длиной строки из параметра name.

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// getNameLength("Poly");
// getNameLength("Harambe");
// getNameLength("Billy");
// getNameLength("Joe");

//_________________________________________________________________________________________


// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// };

//  console.log(makeMessage('Radar', 6150));
//  console.log(makeMessage('Scanner', 3500));
//  console.log(makeMessage('Reactor', 8000));
//  console.log(makeMessage('Engine', 4070));

//____________________________________________________________________________________

// Задание 6
// Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. 
// Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

// function getSubstring(string, length) {
//   const substring = string.slice(0,length) // Change this line

//   return substring;
// }
// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));

//_________________________________________________________________________________________
// Задание 7

// Функция formatMessage(message, maxLength) принимает строку (параметр message) и 
// форматирует её, если длина превышает значение в параметре maxLength.

// Дополни код функции так, что если длина строки:

// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и 
// добавляет в конец троеточие "...", после чего возвращает укороченную версию.

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length > maxLength) {
//   result = `${message.slice(0, maxLength)}...`;
//   } else{
//     result = message;
//   }
//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

//__________________________________________________________________________________________

// Задание 8
// Функция normalizeInput(input) принимает строку (параметр input) 
// и возвращает такую же строку, но в нижнем регистре. 
// Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// normalizeInput("Hello world");
// normalizeInput("This ISN'T SpaM") ;
// normalizeInput("Big SALE");

//__________________________________________________________________________________________

// Задание 9
// Функция checkName(fullname, name) принимает два параметра и возвращает буль true 
// или false - результат проверки вхождения подстроки name в строку fullname.

// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени (параметр name), 
// в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//    return result;
//  }
//  console.log(checkForName("Egor Kolbasov", "Egor"));
//  console.log(checkForName("Egor Kolbasov", "egor"));
//  console.log(checkForName("Egor Kolbasov", "egOr"));
//  console.log(checkForName("Egor Kolbasov", "Zhenya"));
//  console.log(checkForName("Vadim Nekrasov", "Vadim"));
//  console.log(checkForName("Vadim Nekrasov", "vadim"));
//  console.log(checkForName("Vadim Nekrasov", "Dima"));

//_______________________________________________________________________________________

// Задание 10
// Функция checkForSpam(message) принимает строку (параметр message), проверяет её на 
// содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут 
// быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
// 	result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale");       
        
//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));

