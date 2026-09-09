// ! this is a inbuilt keyword. this keyword is special because, like for if else nature remains the same but with this the nature and value changes because where we are using it

// ? this value in global scope, function scope, methods, event handlers, class

// global scope

// console.log(this); // ? window

// Function scope

// function abcd() {
//   console.log(this); //? window
// }

// abcd();

// object

// let obj = {
//   Name: "Ayush Singh",
//   Age: 21,
//   sayName: function () {
//     console.log(this); //? obj
//     console.log(this.Name);
//     console.log(this.Age);
//   },
// };
// obj.sayName();

// in arrow function

// let obj1 = {
//   Name: "Ayush Singh",
//   Age: 21,
//   sayName: () => {
//     console.log(this); //? window
//     console.log(this.Name);
//     console.log(this.Age);
//   },
// };
// obj1.sayName();

// event handler

// document.querySelector("h1").addEventListener("click", function () {
//   console.log(this); //? whole html tag
// });

// ! call,apply,bind

// we can set the value of function when we are calling it

// let obj = {
//   name:"Ayush Singh"
// }

// function abcd(){
//   console.log(this.name) // ? This will give window but by using call we have access obj in function
// }

// abcd.call(obj)

// ? Example of call

// let student1 = {
//   name: "Akshay",
//   printName: function () {
//     console.log(this.name);
//   },
// };

// let student2 = {
//   name: "Deepika",
// };

// student1.printName();
// student1.printName.call(student2);// ? This is how we can share the methods of another obj into another object

// ? apply

// let obj = {
//   Name: "Ayush Singh",
//   Age: 21,
//   Gender: "Male",
// };

// function data(a, b, c, d) {
//   console.log(this.Name);
//   console.log(a, b, c, d);
// }

// data.apply(obj, [1, 2, 3, 4]);
// let fnc = data.bind(obj, 1, 2, 3); //? bind is just like call but it don't run the function it return a another function

// fnc();
