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

  function checkStorage(available, ordered) {
    let message;
    // Change code below this line
  if(available > ordered)
  message = "Order is processed, our manager will contact you.";
   else 
   message = "Not enough goods in stock!";
  
    // Change code above this line
    return message;
  }
  
  console.log(checkStorage(100, 50));
  console.log(checkStorage(100, 130));
  console.log(checkStorage(200, 20));
  console.log(checkStorage(200, 150));
 console.log(checkStorage(150, 180));