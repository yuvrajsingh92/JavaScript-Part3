// ! Scope Execuation : is the scope of variable and function till where we can use it

// function abcd(){ // ? This is the example of functional scope
//     var a =  10
// }

// console.log(a) // ? We can't access the value of a outside of function

// ! Their are three scope: Functional Scope, Global Scope, Block Scope

// global Scope is like we can access it in all of the code

// let namme = "Ayush Singh"
// console.log(namme) // ? This is the example of global scope

// ? Block scope: The Variable and function are only accessed in the curly braket's

// if (0) {
//   console.log("Hello");
// } // ? block scope

// ! Execution context:

// ? Whenever js see's a function it's creates a execution context, this is a process which work's in 2 diffrent phases. first is memory phase and second is execution phase

// ! lexical scoping: where are you physically avaiable and because of your location you can have a perticular access to the things and we follow lexical scoping in js

// function abc() {
//   let a = 10;
//   function def() {
//     let b = 1;
//     a += 1;
//     console.log(a); // 11, a can be access in def function but b is not accessable to abc
//   }
//   def();
// }
// abc();

// ! What is closure definition and how variable's are preserved

// closure is, function that return another function and the inner function use's outer function variable

// function abc() {
//   let a = 20;
//   return function def() {
//     console.log(a);
//   };
// } //? This is example of closure and closure is nothing just a concept

// function returnNum() {
//   let num = 1;
//   return function callName() {
//     console.log(num);
//     num += 1;
//   };
// }
// let value = returnNum();
// value();
// value();
// value();

// let name2 = returnNum();
// value();
// value();
// value();
// value();

// ! Encapusaltion: Encapulsation is the concept in which we hide the logical part and only grant the access which is required

// function clickLimiter() {
//   let click = 1;
//   return () => {
//     if (click <= 5) {
//       console.log(`Clicked: ${click}`);
//       click += 1;
//     } else {
//       console.error("Bhoot jada ho gaya");
//     }
//   };
// }
// let fnc = clickLimiter();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc(); // ? This is nothing but encapsulation 

