// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// const speed = "quick"`The ${speed} brown fox jumps over the lazy dog.`;

// const KEY = "white_rabbit";
// if (true) {
//   const KEY = "ginger_rabbit";
// }
// console.log(KEY);

// var arr = ["B", "a", "c", "k"];
// var first, second, third;
// [first, second, third] = arr;

// const oneTwoThree = [1, 2, 3];
// const sevenEightNine = [7, 8, 9];

// arr = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

// console.log(arr);

// const letters = ["alpha", "gamma", "delta"];
// const arr = [...letters.slice(0, 1), "beta", ...letters.slice(1)];
// console.log(arr);

// const dogs = ["Fido", "Odie", "Oscar"];

// dogs.length;

// dogs.length = 1;

// console.log(dogs);

// var arr = ["B", "a"];
// var [first, second, ...rest] = arr;

// console.log(rest);

// var arr = ["B", "a", "c", "k"];

// var first, second, third;
// [first, second, third] = arr;

// function* pseudoRandom(seed) {
//   let value = seed;

//   while (true) {
//     value = (value * 16807) % 2147483647;
//     yield value;
//   }
// }

// let generator = pseudoRandom(1);
// console.log(generator.next().value); // 16807
// console.log(generator.next().value); // 282475249
// console.log(generator.next().value); // 1622650073

// let getCountdownIterator = function* () {
//   let i = 10;
//   while (i > 1) {
//     yield --i;
//   }
// };

// console.log([...getCountdownIterator()]);

// var p = new Promise((resolve, reject) => {
//   reject(Error("The Fails!"));
// });
// p.catch((error) => console.log(error.message));
// p.catch((error) => console.log(error.message));

// new Promise((resolve, reject) => {
//   resolve("Success!");
// })
//   .then(() => {
//     throw Error("Oh noes!");
//   })
//   .catch((error) => {
//     return "actually, that worked";
//   })
//   .catch((error) => console.log(error.message));


// const config = {
//   languages: [],
//   set language(lang) {
//   return this.languages.push(lang);
//   },
//   };
  
//   console.log(config.language);

// const handler = {
//   set: () => console.log('Đã thêm một thuộc tính mới!'),
//   get: () => console.log(' Đã Truy cập vào thuộc tính!'),
//   };
  
//   const person = new Proxy({}, handler);
  
//   person.name = 'Lydia';
//   person.name;

// class Person {
//   constructor(name) {
//   this.name = name;
//   }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member);

// function getAge() {
//   'use strict';
//   age = 21;
//   console.log(age);
//   }
  
//   getAge();

// var num = 8;
// var num = 10;

// console.log(num);

console.log(3 + 4 + '5');