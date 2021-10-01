// Контекст вызова функции
// Внутри функций можно использовать зарезервированное ключевое слово this. Во время исполнения функции, в this 
// записывается ссылка на объект, в контексте которого она была вызвана. Таким образом, в теле функции мы можем 
// получить доступ к свойствам и методам этого объекта.

// const bookShelf = {
//   authors: ["Bernard Cornwell", "Robert Sheckley"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley"]
// bookShelf.addAuthor("Tanith Lee");
// console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]
// Методы getAuthors и addAuthor это функции (методы объекта), которые вызываются в контексте объекта bookShelf. Во 
// время их выполнения в this записывается ссылка на объект bookShelf и мы можем обратиться к его свойствам и методам.

// Задание 1
// Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и 
// методам объекта.
// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     checkPizza(pizzaName) {
//       return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//       const isPizzaAvailable = this.checkPizza(pizzaName);
  
//       if (!isPizzaAvailable) {
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//       }
  
//       return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//     // Change code above this line
//   };

//____________________________________________________________________________________________________________________________
// Задача: аккаунт пользователя
// Задание 2
// Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды. Выполни 
// рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.

// После объявления объекта мы добавили вызовы методов в той последовательности, в которой твой код будут проверять тесты. 
// Пожалуйста ничего там не меняй.

// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//       return this.balance;
//     },
//     getDiscount() {
//       return this.discount;
//     },
//     setDiscount(value) {
//       this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost - cost * this.discount;
//       this.orders.push(order);
//     },
//     // Change code above this line
//   };
  
//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15
//   customer.addOrder(5000, "Steak");
//   console.log(customer.getBalance()); // 19750
//   console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
//____________________________________________________________________________________________________________________________
// Задача: история заказов
// Задание 3
// Тестировщики нашли баги в коде сервиса хранения истории заказов еды. Тебе необходимо исправить их, правильно расставив this 
// в методах объекта historyService, чтобы методы начали работать правильно.

// const historyService = {
//     orders: [
//       { email: "jacob@hotmail.com", dish: "Burrito" },
//       { email: "solomon@topmail.net", dish: "Burger" },
//       { email: "artemis@coldmail.net", dish: "Pizza" },
//       { email: "solomon@topmail.net", dish: "Apple pie" },
//       { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     // Change code below this line
//     getOrdersLog() {
//       return this.orders
//         .map(order => `email: ${order.email} dish: ${order.dish}`)
//         .join(" - ");
//     },
//     getEmails() {
//       const emails = this.orders.map(order => order.email);
//       const uniqueEmails = new Set(emails);
//       return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//       return this.orders.filter(order => order.email === email);
//     },
//     // Change code above this line
//   };
//____________________________________________________________________________________________________________________________
// Прототип объекта
// Объекты можно организовать в цепочки так, чтобы свойство не найденное в одном объекте, автоматически искалось бы в другом. 
// Связующим звеном выступает специальное скрытое свойство [[Prototype]], которое в консоли браузера отображается как __proto__.

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: 'Mango', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// Метод Object.create(obj) создаёт и возвращает новый объект, связывая его с объектом obj. Объект, на который указывает ссылка 
// в __proto__, называется прототипом. В нашем примере объект animal это прототип для объекта dog. Метод isPrototypeOf() 
// проверяет является ли объект animal прототипом для dog и возвращает true или false.

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name); // 'Mango'

// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); // 4
// Обращение dog.name работает очевидным образом - возвращает собственное свойство name объекта dog. При обращении к dog.legs 
// интерпретатор ищет свойство legs в объекте dog, не находит и продолжает поиск в объекте по ссылке из dog.__proto__, то есть, 
// в данном случае, в объекте animal - его прототипе.

// То есть прототип - это резервное хранилище свойств и методов объекта, автоматически используемое при их поиске. У объекта, 
// который выступает прототипом может также быть свой прототип, у того свой, и так далее.

// Поиск свойства выполняется до первого совпадения. Интерпретатор ищет свойство по имени в объекте, если не находит, то 
// обращается к свойству __proto__, т. е. переходит по ссылке к объекту-прототипу, а затем и прототипу прототипа. Если 
// интерпретатор доберется до конца цепочки и не найдет свойства с таким именем, то вернёт undefined.

// Задание 4
// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.
// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
//   };
//   // Change code below this line
  
//   const child = Object.create(parent);
  
//   // Change code above this line
//   child.name = "Jason";
//   child.age = 27;

//____________________________________________________________________________________________________________________________
// Задача: цепочка прототипов
// Задание 5
// Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был 
// прототипом для child.

// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
//   };
//   // Change code below this line
  
//   const parent = Object.create(ancestor);
//   parent.name = "Stacey";
//   parent.surname = "Moore";
//   parent.age = 54;
  
//   const child = Object.create(parent);
//   child.name = "Jason";
//   child.age = 27;
  
//   // Change code above this line
  
//____________________________________________________________________________________________________________________________
// Объявление класса
// Синтаксис литерала объекта позволяет создать один объект. Но часто нужно создать много однотипных объектов с одинаковым 
// набором свойств, но разными значениями и методами для взаимодействия со ними. Всё это нужно сделать динамичекски, во время 
// выполнения программы. Для этого используют классы - специальный синтаксис объявления функции для создания объектов.

// Объявление класса начинается с ключевого слова class, после которого идёт имя класса и фигурные скобки - его тело. Классы 
// принято называть с большой буквы, а в самом названии отражать тип создаваемого объекта (существительное).

// class User {
//   // Тело класса
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}
// Результат вызова new User() это объект, который называется экземпляр класса, потому что содержит данные и поведение, 
// описываемые классом.

// Задание 6
// Используя ключевое слово class объяви класс Car с пустым телом.

// class Car {
// };
//____________________________________________________________________________________________________________________________
// Конструктор класса
// Для инициализации экземпляра в классе есть метод constructor. Если он не объявлен, создаётся конструктор по умолчанию - пустая 
// функция, которая не изменяет экземпляр.

// class User {
//   // Синтаксис объявления метода класса
//   constructor(name, email) {
//     // Инициализация свойств экземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
// Вызов класса с оператором new приводит к созданию нового объекта и вызову конструктора в контексте этого объекта. То есть 
// this внутри конструктора будет ссылаться на новосозданный объект. Это позволяет добавлять каждому объекту свойства с одинаковыми 
// именами, но разными значениями.

// Свойства name и email называются публичные свойства, потому что они будут собственными свойствами объекта-экземпляра и к ним 
// можно будет получить доступ обратившись через точку.

// Задание 7
// Добавь классу Car метод constructor который принимает три параметра:

// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Класс Car должен создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные 
// аргументы во время её вызова с оператором new.
// class Car {
//     // Change code below this line
//       constructor(brand, model, price){
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//       };
//     // Change code above this line
//   }
//____________________________________________________________________________________________________________________________
// Объект параметров
// Класс может принимать большое количество входных данных для свойств будущего объекта. Если параметров много 
// (больше 2-х), то обычно применяют паттерн «Объект параметров». Идея этого паттерна в том, чтобы передавать в качестве 
// параметра один объект с логично именованными свойствами. Значения свойств такого объекта заменят набор аргументов.

// class User {
//   // Деструктуризируем объект
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango); // { name: "Mango", email: "mango@mail.com" }

// const poly = new User({
//   name: "Poly",
//   email: "poly@mail.com",
// });
// console.log(poly); // { name: "Poly", email: "poly@mail.com" }
// Задание 8
// Выполни рефакторинг класса Car так, чтобы он принимал один параметр - объект со свойсвами brand, model и price. 
// Деструктуризируй объект в сигнатуре (подписи) конструктора.

// class Car {
//     // Change code below this line
//     constructor({ brand, model, price }) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//     // Change code above this line
//   }
  
//____________________________________________________________________________________________________________________________
// Методы класса
// Для работы со свойствами будущего экземпляра используются методы класса. Методы - это просто функции, но с одним 
// отличием, они доступны экземпляру класса.

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
// Задание 9
// Добавь классу Car два метода.

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
// class Car {
//     constructor({ brand, model, price }) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//     // Change code below this line
//   getPrice(){
//   return this.price;
//   };
//     changePrice(newPrice){
//     this.price = newPrice;
//     };
//     // Change code above this line
//   }
//____________________________________________________________________________________________________________________________
// Задача: склад
// Задание 10
// Напиши класс Storage, который будет создавать объекты для управления складом товаров. Класс ожидает только один аргумент - 
// начальный массив товаров, который записывается на создаваемый объект в свойство items.

// Объяви следующие методы класса:

// getItems() - возвращает массив текущих товаров в свойстве items объекта который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта который вызывает этот 
// метод.
// removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива товаров в свойстве items объекта который вызывает 
// этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять 
// тесты. Пожалуйста ничего там не меняй.



// class Storage{
//     constructor(it = []){
//      this.items = it;
//     }
//     getItems(){
//       return this.items;
//     }
//     addItem(newItem){
//       this.newItem = newItem;
//       this.items.push(this.newItem);
//     }
//     removeItem(itemToRemove){
//     this.itemToRemove = itemToRemove;
//       this.items = this.items.filter((item) => item !== this.itemToRemove);
//     }
//   };
  

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


//____________________________________________________________________________________________________________________________
// Задача: конструктор строк
// Задание 11
// Напиши класс StringBuilder, который принимает один параметр initialValue - произвольную строку, которая записывается на 
// создаваемый объект в свойство value.

// Объяви следующие методы класса:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта который вызывает 
// этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять 
// тесты. Пожалуйста ничего там не меняй.

// class StringBuilder{
// 	constructor(initialValue){
//     this.value = initialValue;
//    }
    
//   getValue(){
//   return this.value;
//   }
//   padEnd(str){
//   this.value = this.value += str;
//   }
//   padStart(str){
//   this.value =  str += this.value ;
//   }
//   padBoth(str){
//   this.padStart(str);
//   this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//____________________________________________________________________________________________________________________________
// Приватные свойства
// Инкапсуляция - это концепция, предписывающая скрывать то, как устроен класс. Пользователь класса должен получать доступ 
// только к публичному интерфейсу - набору публичных свойств и методов класса. Остальные методы и свойства (не публичные) должны 
// быть не доступны.

// В классах инкапсуляция реализуется приватными свойствами, доступ к которым можно получить только внутри класса.

// Допустим, почта пользователя должна быть недоступна для прямого изменения из вне, то есть приватна. Добавляя к имени свойства 
// символ # мы делаем его приватным. Объявление приватного свойства до инциализации в конструкторе - обязательно.

// class User {
//   // Необязательное объявление публичных свойств
//   name;
//   // Обязательное объявление приватных свойств
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email); // Будет ошибка, это приватное свойство
// Методы класса также могут быть приватными, то есть доступны только в теле класса. Для этого перед их именем необходимо 
// поставить символ #.

// Задание 12
// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса, для 
// чтения и изменения этого свойства.

// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

// class Car {
//     // Change code below this line
//       #brand;
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//   getBrand(){
//    return this.#brand;
//   }
//     changeBrand(newBrand){
//       this.#brand = newBrand;
//     }
    
//     // Change code above this line
//   }
  
//____________________________________________________________________________________________________________________________
// Задача: склад 2.0
// Задание 13
// Выполни рефакторинг класса Storage, сделав свойство items приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут 
// проверять тесты. Пожалуйста ничего там не меняй.

// class Storage {
//     // Change code below this line
//       #items;
//     constructor(items) {
//       this.#items = items;
//     }
  
//     getItems() {
//       return this.#items;
//     }
  
//     addItem(newItem) {
//       this.#items.push(newItem);
//     }
  
//     removeItem(itemToRemove) {
//       this.#items = this.#items.filter(item => item !== itemToRemove);
//     }
//   }
  
//   // Change code above this line
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
  
//____________________________________________________________________________________________________________________________
// Задача: конструктор строк 2.0
// Задание 14
// Выполни рефакторинг класса StringBuilder, сделав свойство value приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут 
// проверять тесты. Пожалуйста ничего там не меняй.

// class StringBuilder {
//     // Change code below this line
//   #value;
//     constructor(initialValue) {
//       this.#value = initialValue;
//     }
  
//     getValue() {
//       return this.#value;
//     }
  
//     padEnd(str) {
//       this.#value += str;
//     }
  
//     padStart(str) {
//       this.#value = str + this.#value;
//     }
  
//     padBoth(str) {
//       this.padStart(str);
//       this.padEnd(str);
//     }
//   }
  
//   // Change code above this line
//   const builder = new StringBuilder(".");
//   console.log(builder.getValue()); // "."
//   builder.padStart("^");
//   console.log(builder.getValue()); // "^."
//   builder.padEnd("^");
//   console.log(builder.getValue()); // "^.^"
//   builder.padBoth("=");
//   console.log(builder.getValue()); // "=^.^="
  
//____________________________________________________________________________________________________________________________
// Геттеры и сеттеры
// Геттеры и сеттеры - это более краткий синтаксис объявления методов для взаимодействия со свойствами. Геттер и сеттер имитируют 
// обычное публичное свойство класса, но позволяют изменять другие свойства более удобным способом. Геттер выполняется при попытке 
// получить значение свойства, а сеттер - при попытке его изменить.

// Геттеры и сеттеры хорошо использовать для простых операций чтения и изменения значения свойств, особенно приватных, как их публичный 
// интерфейс. Для работы со свойством которое хранит массив или объект они не подойдут.

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// Мы объявили геттер и сеттер email поставив перед именем свойства ключевые слова get и set. Внутри этих методов мы или возвращаем 
// значение приватного свойства #email или изменяем его значение. Геттер и сеттер идут впаре и должны называться одинаково.

// const mango = new User({ name: "Mango", email: "mango@mail.com" });
// console.log(mango.email); // mango@mail.com
// mango.email = "mango@supermail.com";
// console.log(mango.email); // mango@supermail.com
// При обращении к mango.email вызызвается геттер get email() {...} и выполняется его код. При попытке записи mango.email = "mango@supermail.com" 
// вызывается сеттер set email(newEmail) {...} и строка "mango@supermail.com" будет значением параметра newEmail.

// Плюс в том, что это методы, а значит при записи можно выполнить дополнительный код, например с какими-то проверками, в отличии от выполнениях 
// этой же операции напрямую со свойством.

// set email(newEmail) {
//   if(newEmail === "") {
//     console.error("Ошибка! Почта не может быть пустой строкой!");
//     return;
//   }

//   this.#email = newEmail;
// }
// Задание 15
// Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand. Стандартизируй публичный интерфейс класса 
// заменив уже объявленные методы на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами.

// class Car {
//     // Change code below this line
//     #brand;
//     #model;
//     #price;
  
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.#model = model;
//       this.#price = price;
//     }
  
//     get brand() {
//       return this.#brand;
//     }
  
//     set brand(newBrand) {
//       this.#brand = newBrand;
//     }
  
//     get model() {
//       return this.#model;
//     }
  
//     set model(newModel) {
//       this.#model = newModel;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//       this.#price = newPrice;
//     }
//     // Change code above this line
//   }
//_________________________________________________________________________________________________________________________
// Статические свойства
// Кроме публичных и приватных свойств будущего экземпляра, в классе можно объявить его собственные свойства, доступные только 
// классу, но не его экземплярам - статические свойства (static). Они полезны для хранения информации относящейся к самому классу.

// Добавим классу пользователя приватное свойство role - его роль, определяющую набор прав, например администратор, редактор, 
// просто пользователь и т п. Возможные роли пользователей будем хранить как статическое свойство Roles - объект со свойствами.

// Статические свойства объявляются в теле класса. Перед именем свойства добавляется ключевое слово static.

// class User {
//   // Объявление и инициализация статического свойства
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"
// Статические свойства также могут быть приватные, то есть доступные только внутри класса. Для этого имя совйства должно 
// начинаться с символа #, также как приватные свойства. Обращение к приватному статическому свойству вне тела класса вызовет ошибку.

// Задание 16
// Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая 
// цена автомобиля.

// Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE, сеттер ничего не делает, 
// а если меньше или равно, то перезаписывает цену автомобиля.

// class Car {
//     // Change code below this line
//     static MAX_PRICE = 50000;
    
    
//     #price;
  
//     constructor({ price }) {
//       this.#price = price;
//     }
  
//     get price() {
//       return this.#price;
//     }

//     set price(newPrice) {
//         if (newPrice > Car.MAX_PRICE){
         
//         } else {this.#price = newPrice};
      
//     }

//     // Change code above this line
//   }


  
//   const audi = new Car({ price: 35000 });
//   console.log(audi.price); // 35000
  
//   audi.price = 49000;
//   console.log(audi.price); // 49000
  
//   audi.price = 51000;
//   console.log(audi.price); // 49000

//____________________________________________________________________________________________________________________________
// Статические методы
// В классе можно объявить не только методы будущего экземпляра, но и методы доступные только классу - статические методы, 
// которые могут быть как публичные так и приватные. Синтаксис объявления аналогичен статическим свойствам, за исключением 
// того что значением будет метод.

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));
// Особенность статических методов в том, что во время их вызова ключевое слово this ссылается на сам класс. Это значит что 
// статический метод может получить доступ к статическим свойствам класса, но не к свойствам экземпляра. Логично, потому что 
// статические методы вызывает сам класс, а не его экземпляры.

// Задание 17
// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значения 
// параметра price и приватного статического свойства MAX_PRICE.

// Если цена автомобиля превышает максимальную, метод должен вернуть строку "Error! Price exceeds the maximum".
// В противном случае метод должен вернуть строку "Success! Price is within acceptable limits".
// Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет использоваться метод 
// checkPrice(price).

// class Car {
//     static #MAX_PRICE = 50000;
//     // Change code below this line
//   static checkPrice(price){
//   this.price = price;
//     if (price > Car.#MAX_PRICE){
//     return "Error! Price exceeds the maximum"} else { return "Success! Price is within acceptable limits";};
//   };
  
//     // Change code above this line
//     constructor({ price }) {
//       this.price = price;
//     }
//   }
  
//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });
  
//   console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
//   console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
  

//____________________________________________________________________________________________________________________________
// Наследование классов
// Ключевое слово extends позволяет реализовать наследование классов, когда один класс (дочерний, производный) наследует 
// свойства и методы другого класса (родителя).

// class Child extends Parent {
//   // ...
// }
// В выражении class Child extends Parent дочерний класс Child наследует (расширяет) от родительского класса Parent. Это 
// означает, что мы можем объявить базовый класс, который хранит общие характеристики и методы для группы производных классов, 
// которые наследуют свойства и методы родителя, но также добавляют свои уникальные.

// Например, в приложении есть пользователи разных ролей - администратор, писатель статей, контент менеджер и т. п. У каждого 
// типа пользователя есть набор общих характеристик, например почта и пароль, но также есть и уникальные.

// Сделав независимые классы для каждого типа пользователя мы получим дублирование общих свойств и методов, и при необходимости 
// изменить например название свойства, придётся проходить по всем классам, это неудобно и трудозатратно.

// Вместо этого можно сделать общий класс User, который будет хранить набор общих свойств и методов, после чего сделать классы для 
// каждого типа пользователя которые наследуют этот набор от класса User. При необходимости изменить что-то общее, достаточно будет 
// поменять только код класса User.

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тело класса ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"
// Класс ContentEditor наследует от класса User его конструктор, геттер и сеттер email, а также одноимённое публичное свойство. 
// Важно помнить что приватные свойства и методы класса-родителя не наследуются классом-ребёнком.

// Задание 18
// В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.

// Объяви класс Admin, который наследует от класса User
// Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа), значение которого это объект 
// { BASIC: "basic", SUPERUSER: "superuser" }

// class User {
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   // Change code below this line
  
//   class Admin extends User{
//   static AccessLevel =  { BASIC: "basic", SUPERUSER: "superuser" };
//   }
//____________________________________________________________________________________________________________________________
// Конструктор дочернего класса
// Первым делом в конструкторе дочернего класса необходимо вызвать специальную функцию super(аргументы) - это псевдоним конструктора 
// родительского класса. В противном случае, при попытке обратиться к this в конструкторе дочернего клааса, будет ошибка. При вызове
// конструктора класса родителя передаём необходимые ему аругменты для инициализации свойств.

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Вызов конструктора родительского класса User
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// Задание 19
// Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. 
// Добавь классу Admin публичное свойство accessLevel, значение которого будет передаваться при вызове конструктора.

// Чтобы показать как будет использоваться класс Admin мы добавили инициализацию экземпляра под объявлением класса.

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class Admin extends User {
//     // Change code below this line
  
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
  
//     constructor ({email, accessLevel}){
//     super (email);
//       this.accessLevel = accessLevel;
//     }
//     // Change code above this line
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"
//____________________________________________________________________________________________________________________________
// Методы дочернего класса  20
// В дочернем классе можно объявлять методы, которые будут доступны только его экземплярам.

// // Представим что выше есть объявление класса User

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// editor.addPost("post-1");
// console.log(editor.posts); // ['post-1']
// Задание
// Добавь классу Admin следующие свойства и методы.

// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся 
// в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве 
// хранящемся в свойстве blacklistedEmails и возвращать true или false.
// После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять 
// тесты. Пожалуйста ничего там не меняй.

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     // Change code below this line
  
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
  
//     constructor({ email, accessLevel }) {
//       super(email);
//       this.accessLevel = accessLevel;
//       this.blacklistedEmails = [];
//     }
  
    
  
//     blacklist(email){
//         return this.blacklistedEmails.push(email);
//         }
        
//     isBlacklisted(email){
//     return this.blacklistedEmails.includes(email);
//     }
//     // Change code above this line
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"
  
//   mango.blacklist("poly@mail.com");
//   console.log(mango.blacklistedEmails); // ["poly@mail.com"]
//   console.log(mango.isBlacklisted("mango@mail.com")); // false
//   console.log(mango.isBlacklisted("poly@mail.com")); // true
