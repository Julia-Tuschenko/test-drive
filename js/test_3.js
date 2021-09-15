// Создание объекта
// Объекты позволяют описать и сгруппировать характеристики объектов реального мира - пользователя, книги, 
// продукта магазина, чего угодно. Объекты ещё называют словарями, то есть они содержат термины (свойства) 
// и их определения (значения).

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };
// Для объявления используются фигурные скобки {} - литерал объекта. При создании объекту можно добавить 
// свойства, каждое из которых описывается парами ключ:значение. Ключ ещё называют именем свойства и это
//  всегда строка. Значением свойства могут быть любые типы: примитивы, массивы, объекты, були, функции
//   и т. п. Свойства разделяются запятой.


// Задание 1
// Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

// imgUrl - фотография, значение "https://via.placeholder.com/640x480";
// descr - описание, значение "Spacious apartment in the city center";
// rating - рейтинг, значение 4;
// price - цена, значение 2153;
// tags - метаинформация, массив ["premium", "promoted", "top"].


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr:"Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   };

//______________________________________________________________________________________________________________

// Вложенные свойства
// Значением свойства может быть другой объект. Это используется для хранения вложенных и группированных данных.

// Например, статистика пользователя социальной сети состоит из количества последователей, просмотров и лайков, 
// и хранить эти данные удобнее всего в виде объекта. Тоже самое с местоположением, отдельно страна и город.

// В будущем это можно будет использовать для поиска пользователей по стране, городу, минимальному или 
// максимальному количеству последователей и т. д.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// Задание 2
// Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. 
// Добавь ему следующие свойства:

// name - имя владельца, значение "Henry";
// phone - телефон, значение "982-126-1588";
// email - почта, значение "henry.carter@aptmail.com".

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner:{
//       name:"Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     }
//   };
  

//______________________________________________________________________________________________________________

// Доступ к свойствам через точку
// Первый способ получить доступ к свойству объекта это синтаксис обьект.ключ_свойства. Синтаксис «через точку» 
// используется в большинстве случаев и подходит тогда, когда мы заранее знаем имя (ключ) свойства к которому хотим 
// получить доступ.

// На место обращения будет возвращено значение свойства с таким именем.
// Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["historical prose", "adventure"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// Задание 3
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Change code above this line
  

//______________________________________________________________________________________________________________

// Доступ к вложенным свойствам
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };
// Для доступа к вложенным свойствам используется цепочка обращений «через точку». Например, 
// если необходимо получить значение страны пользователя, записываем user.location.country, 
// где user.location это обращение (путь) к объекту в свойстве location, а user.locaton.country 
// обращение к свойству country в этом объекте. То есть, «точка» указывает следующую вложенность.

// const location = user.location;
// console.log(location); // Объект location

// const country = user.location.country;
// console.log(country); // "Jamaica"
// Если значение свойства это массив, то в нашем примере user.hobbies - обращение к этому массиву. 
// Далее, можно получить доступ к его элементам через квадратные скобки и индекс или использовать 
// свойства и методы.

// const hobbies = user.hobbies;
// console.log(hobbies); // ["swiming", "music", "sci-fi"]

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swiming"

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3


// Задание  4
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам 
// обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[apartment.tags.length -1];
//   // Change code above this line
  

//______________________________________________________________________________________________________________

// Доступ к свойствам через квадратные скобки
// Второй способ получить доступ к свойству объекта это синтаксис обьект["ключ_свойства"]. Похоже на 
// обращение к элементу массива с отличием в том, что в скобках указывается не индекс элемента, а имя 
// свойства как строка.

// Синтаксис «квадратных скобок» используется значительно реже. Как правило в случаях когда имя свойства 
// заранее неизвестно или оно хранится в переменной (как значение параметра функции, например).

// На место обращения будет возвращено значение свойства с таким именем.
// Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book["genres"];
// console.log(bookGenres); // ["historical prose", "adventure"]

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // "Bernard Cornwell"

// Задание 5
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам 
// обьекта apartment используя синтаксис «квадратных скобок».

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment["rating"];
//   const aptDescr = apartment["descr"];
//   const aptPrice = apartment["price"];
//   const aptTags = apartment["tags"];
//   // Change code above this line

// console.log(aptRating);  

//______________________________________________________________________________________________________________

// Изменение значения свойства
// После того, как объект создан, значение его свойств можно изменить. Для этого необходимо 
// обратиться к ним по имени, например, «через точку», и присвоить новое значение.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.public = false;
// book.genres.push("drama");

// console.log(book.rating); // 9
// console.log(book.public); // false
// console.log(book.genres); // ["historical prose", "adventure", "drama"]


// Задание  6
// Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на "Henry Sibola";
// массив тегов в свойстве tags добавив в конец строку "trusted".

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
//   apartment.price = 5000;
//   apartment.rating = 4.7;
//   apartment.owner.name = "Henry Sibola";
//   apartment.tags.push("trusted");

//______________________________________________________________________________________________________________
// Добавление свойств
// Операция добавления нового свойства после создания объекта ничем не отличается от изменения значения 
// уже существующего свойства. Если при записи значения по имени, такого свойства в объекте нет, оно будет создано.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // "en"
// console.log(book.translations); // ["ua", "ru"]
// Задание
// Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston".

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
//   apartment.area = 60;
//   apartment.rooms = 3;
//   apartment.location = {country: "Jamaica", city: "Kingston"};
  
//   console.log( apartment.location);

//______________________________________________________________________________________________________________
// Короткие свойства
// Иногда, при создании объекта, значение свойства необходимо взять из переменной или параметра функции с таким же 
// именем, как и само свойство.

// Синтксис в следующем примере слишком громоздкий, потому что приходится дублировать имя свойства и имя переменной, 
// в которой хранится необходимое значение.

// const name = "Генри Сибола";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name); // "Генри Сибола"
// console.log(user.age); // 25
// Синтаксис коротких свойств (shorthand properties) решает эту проблему, позволяя использовать имя переменной как 
// имя свойства, а её значение как значение свойства.

// const name = "Генри Сибола";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Генри Сибола"
// console.log(user.age); // 25
// То есть, при объявлении объекта достаточно указать только имя свойства, а значение будет взято из переменной с 
// аналогичным именем.

// Задание 7
// Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных 
// с аналогичными именами. Обязательно используй синтаксис коротких свойств.

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name, 
//   price, 
//   image,
//   tags, 
//   // Change code above this line
// };

//______________________________________________________________________________________________________________
// Вычисляемые свойства
// Бывают ситуации, когда при объявлении обьекта необходимо добавить свойство с именем, которое мы 
// заранее не знаем, потому что оно хранится как значение переменной или как результат выполнения функции.

// Раньше для этого необходимо было сначала создать объект, а потом добавлять свойства через квадратные скобки, что не совсем удобно.

// const propName = "name";
// const user = {
//   age: 25
// };

// user[propName] = "Генри Сибола";
// console.log(user.name); // "Генри Сибола"
// Синтаксис вычисляемых свойств (computed properties) помогает избежать лишнего кода и в некоторых случаях 
// упростить его. Значением вычисляемого свойства может быть любое валидное выражение.

// const propName = "name";
// const user = {
//   age: 25,
//   // Имя этого свойства будет взято из значения переменной propName
//   [propName]: "Генри Сибола"
// };

// console.log(user.name); // "Генри Сибола"

// Задание 9
// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и 
// password, имена которых хранятся в переменных emailInputName и passwordInputName.

// Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства 
// password - строка "jqueryismyjam".

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",
//   // Change code above this line
// };

//______________________________________________________________________________________________________________
// Цикл for...in
// В отличии от массива или строки, объект - это не итерируемая сущность, то есть его нельзя перебрать 
// циклами for или for...of. Для перебора объектов используется специальный цикл for...in, который перебирает 
// ключи объекта object.

// for (key in object) {
//   // инструкции
// }
// Переменная key доступная только в теле цикла. На каждой итерации в неё будет записано значение ключа (имя) 
// свойства. Для того чтобы получить значение свойства с таким ключом (именем), используется синтаксис квадратных скобок.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }

// Задание 10
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values 
// все значения его свойств.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Change code below this line
//   for (const key in apartment) {
//     console.log(key);
//        keys.push(key);
//     values.push(apartment[key]);
//   }

//______________________________________________________________________________________________________________
// Метод hasOwnProperty()
// Разберём концепцию собственных и несобственных свойств объекта и научимся правильно использовать цикл for...in.

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: 'Mango'}
// console.log(dog.name); // 'Mango'
// console.log(dog.legs); // 4
// Метод Object.create(animal) создаёт и возвращает новый объект, связывая его с объектом animal. 
// Поэтому можно получить значение свойства legs обратившись к нему как dog.legs, хотя его нет в 
// объекте dog - это несобственное свойство из объекта animal.

// Оператор in, который используется в цикле for...in, не делает различия между собственными и 
// несобственными свойствами объекта. Эта особенность мешает, так как мы всегда хотим перебрать только 
// собственные свойства. Для того чтобы узнать есть в объекте собственное свойство или нет, используется 
// метод hasOwnProperty(key), который возвращает true или false.

// // ❌ Возвращает true для всех свойств
// console.log("name" in dog); // true
// console.log("legs" in dog); // true

// // ✅ Возвращает true только для собственных свойств
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false
// Поэтому при переборе циклом for...in необходимо на каждой итерации добавить проверку на собственное свойство.
// Даже если сейчас мы уверены в том что у объекта нет несобственных свойств, это оградит от возможных ошибок в будущем.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }
//   // Если это не собственное свойство - ничего не делаем
// }

// Задание 11
// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//  if (apartment.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(apartment[key]);
  
//   keys.push(key);
//   values.push(apartment[key]);
//  }
//   // Change code above this line
// }

//______________________________________________________________________________________________________________
// Задача. Подсчёт свойств
// Задание 12
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в 
// параметре object. Используй переменную propCount для хранения количества свойств объекта.


// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//   for (const key in object){
//     if (object.hasOwnProperty(key)){
//       propCount += 1;}
//   }
//     // Change code above this line
//     return propCount;
//   }
  
//______________________________________________________________________________________________________________
// Метод Object.keys()
// У встроенного класса Object есть несколько полезных методов для работы с объектами. Первый из них это 
// Object.keys(obj), который принимает объект и возвращает массив ключей его собственных свойств. Если в 
// объекте нет свойств, метод вернёт пустой массив.

// const book = {
//   title: "The Last Kingdom",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']
// Скомбинировав результат Object.keys() и цикл for...of можно удобно перебрать собственные свойства объекта, 
// не прибегая к использованию архаического цикла for...in с проверками принадлежности свойств.

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }
// Мы перебираем массив ключей объекта и на каждой итерации получаем значение свойства с таким ключом.

// Задание 13
// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys 
// массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   for (const key of keys){
//    values.push(apartment[key]);
//   }
  

//______________________________________________________________________________________________________________
// Задача. Подсчёт свойств 2.0
// Задание 14
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.

// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//         const keys = Object.keys(object);
//     for (const key of keys) {
//         propCount += 1;
//     }
//     return propCount;
//     // Change code above this line
//   }

//______________________________________________________________________________________________________________
// Метод Object.values()
// Если метод Object.keys(obj) возвращает массив ключей собственных свойств объекта, то метод Object.values(obj) 
// возвращает массив значений его собственных свойств. Если в объекте нет свойств, метод Object.values(obj) вернёт пустой массив.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ["title", "author", "genres", "rating"]

// const values = Object.values(book);
// console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]
// Массив значений свойств также можно перебрать циклом for...of, например для получения общей суммы числовых значений.

// Задание 15
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех 
// значений его свойств. Используй методы Object.keys() и Object.values().

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);
  
//______________________________________________________________________________________________________________
// Задача. Расходы на зарплату
// Задание 16
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, 
// а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. 
// Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//       const values = Object.values(salaries);
//     for (const value of values){
//       totalSalary += value;
//     }
//     // Change code above this line
//     return totalSalary;
//   }

//   console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

//______________________________________________________________________________________________________________
// Массив объектов
// В стандартный набор повседневных задач разработчика входит манипуляция массивом однотипных объектов. 
// Это значит что все объекты в массиве гарантированно будут иметь одинаковый набор свойств, но с разными значениями.

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
// ];
// Для перебора такого массива используется стандартный цикл for...of. Значения свойств каждого объекта 
// можно получить используя синтаксис «через точку», так как в каждом объекте набор свойств и их имена 
// будут одинаковые, отличаются только значения.

// for (const book of books) {
//   // Объект книги
//   console.log(book);
//   // Название
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }
// Задание 17
// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств 
// hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
//   for (const color of colors){
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }
//______________________________________________________________________________________________________________
// Задача. Поиск объекта по значению свойства
// Задание 18
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. 
// Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). 
// Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     // Change code below this line
//   for (const product of products){
//     if (productName === product.name){
//         return product.price;
//     }
//   }
//   return null;
//     // Change code above this line
//   }
//   console.log(getProductPrice("Radar"));

//______________________________________________________________________________________________________________
// Задача. Коллекция значений свойства
// Задание 19
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. 
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. 
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Change code below this line
    
//     const prodNames = [];  
//   for (const product of products){
//   if(product[propName]){
//    prodNames.push(product[propName]);
//   }
//   }
//   return prodNames;

//______________________________________________________________________________________________________________
// Задача. Общая стоимость товара
// Задание 20
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
// Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//   let totalPrice = 0;
//   for (const product of products){
//    if (productName === product.name){
//     totalPrice = product.price * product.quantity;
//    }
//   }
//   return totalPrice;
//     // Пиши код выше этой строки
//   }

//______________________________________________________________________________________________________________
// Деструктуризация объектов
// Сложные данные всегда представлены объектом. Множественные обращения к свойствам объекта визуально загрязняют код.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// const accessType = book.public ? "публичном" : "закрытом";
// const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;
// Деструктуризация позволяет «распаковать» значения свойств объекта в локальные переменные. Это делает код в месте 
// их использования менее «шумным».

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// // Деструктуризируем
// const { title, author, public, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = public ? "публичном" : "закрытом";
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
// Деструктуризация всегда находится в левой части операции присвоения. Переменным внутри фигурных скобок присваиваются 
// значения свойств объекта. Если имя переменной и имя свойства совпадают, то происходит присваивание, в противном случае 
// ей будет присвоено undefined. Порядок объявления переменных в фигурных скобках не важен.

// Задание 21
// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). 
// Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
//   const {yesterday, today ,tomorrow}  = highTemperatures;
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

//______________________________________________________________________________________________________________


//______________________________________________________________________________________________________________

//______________________________________________________________________________________________________________

//______________________________________________________________________________________________________________
//______________________________________________________________________________________________________________

//______________________________________________________________________________________________________________
//______________________________________________________________________________________________________________
//______________________________________________________________________________________________________________
//______________________________________________________________________________________________________________
//______________________________________________________________________________________________________________
//______________________________________________________________________________________________________________
//______________________________________________________________________________________________________________
//______________________________________________________________________________________________________________

