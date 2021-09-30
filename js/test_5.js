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


//_________________________________________________________________________________________________________________________


//____________________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________________
