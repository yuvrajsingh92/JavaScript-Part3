// ! In js code runs line by line, and this is natural pattern.

// console.log("Hello1");
// console.log("Hello2");
// setTimeout(() => {
//   console.log("Hello3");
// }, 2000);
// console.log("Hello4");

// ? sync and async: When code run line by line is called sync and when a line of code is ready to run is called async

// ! CallBack

// function abc(e) {
//   setTimeout(
//     () => {
//       e();
//     },
//     Math.floor(Math.random() * 10) * 1000,
//   );
// }

// abc(function () {
//   console.log("Chachaa");
// });

// ? This is nothing but callback. When we send another function into a function as parameter, and then the parameter function is called as callback function

// ! CallBack Hell: A function that accept another function and after that their are somemore function and after this function get completed their are somemore fucntion call. So this situation is called as callback Hell

// function GetProfile(username, functionCall) {
//   setTimeout(() => {
//     console.log(`The username is ${username}`);
//     functionCall({username});
//   }, 2000);
// }

// GetProfile("Ayush Singh", function (persondata) {
//   console.log(persondata);
// });

// ! Promise: resolve,reject, then,catch

// What is Promise: We create a promise, Which can go in two states and that can be resolve or reject, and what will be the output time will tell but we have to write code for both of them

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Ayush");
//   }, 3000);
// });

// console.log(promise)

// if the promise get resolve we have to write code in .then and if the code get reject we have to write the code in .catch

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let random = Math.floor(Math.random() * 10);
//     // let random = 4
//     console.log(random);
//     if (random >= 5) {
//       resolve(`The value: ${random} is more then 5 and get resolve`);
//     } else {
//       reject(`The ${random} is less then 5`);
//     }
//   }, 3000);
// });

// promise.then(function (val) {
//   console.log(val);
// });
// promise.catch(function (val) {
//   console.log(val);
// });

// ! async and await

// let promise = new Promise(function (resolve, reject) {
//   let random = Math.floor(Math.random() * 10);
//   setTimeout(() => {
//     if (random >= 5) {
//       resolve(`The value is greater then 5 and the value is ${random}`);
//     } else {
//       reject(`The value is less then 5 and the value is ${random}`);
//     }
//   }, 2000);
// });

// async function abcd() {
//   // ? This is more cleaner than .then anc .catch
//   try {
//     let pr = await promise;
//     console.log(pr);
//   } catch (err) {
//     console.log(err);
//   }
// }

// abcd();
