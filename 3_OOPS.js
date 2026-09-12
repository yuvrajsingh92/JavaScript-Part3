// ! What is oops: Oops stand for object oriented programming. It's is used for creating real world concepts into program

// ! Object-Oriented Programming (OOP) is a programming approach where we organize code around objects that contain data (properties) and behavior (methods)

// ? Why do we need oop: Imaging you have 100 cars without oop we have to create alot of object for every car and same line of code will be repeated and with oops we just have to create a template and then using that template we can create instance or objects with it

// const car1 = {
//   brand: "BMW",
//   color: "Black",
// };

// const car2 = {
//   brand: "Audi",
//   color: "White",
// };

// const car3 = {
//   brand: "Tesla",
//   color: "Red",
// };

// instead of this we can create template or blueprint for this same

// class Cars {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//     this.speed = 0;
//   }
//   acceleration() {
//     this.speed += 10;
//     console.log(`${this.brand} is going at ${this.speed} km/h`);
//   }
//   stop() {
//     this.speed = 0;
//     console.log("Car stopped");
//   }
// }

// let car1 = new Cars("BMW", "Green");
// car1.acceleration();
// car1.acceleration();
// car1.acceleration();
// car1.acceleration();
// car1.acceleration();
// car1.stop();

// function CollectData(name, email, age, gender) {
//   this.name = name;
//   this.email = email;
//   this.age = age;
//   this.gender = gender;
// }

// let User1 = new CollectData("Ayush Singh", "a@gmail.com", 21, "Male");
// let User2 = new CollectData("Veer Singh", "v@gmail.com", 17, "Male");

// ! The above example is like a bluePrint for every person who will fill the required fields and it will create a unqie value for every user. it's like building a system

// function userData(name, email, age, gender) {
//   this.name = name;
//   this.email = email;
//   this.age = age;
//   this.gender = gender;
//   this.write = function (message) { // ? .write is a inbuilt method
//     let h1 = document.createElement("h1");
//     h1.textContent = message;
//     h1.style.color = "red";
//     document.body.append(h1)
//   };
// }

// let user1 = new userData("Ayush Singh", "a@gmail.com", 21, "Male");
// let user2 = new userData("RanVeer Singh", "rv@gmail.com", 17, "Male");
// user1.write("Chaachaaa Marooo Naaaaaa.....");
// user2.write("Vastagana Hoyaaaa Chaachaaa....")
// user1.write("Pataa nahii yaar Bhaii....")

// ! prototype: Is basicly when we have to give a defual value for every instance which is created using a same function or class is given by prototype

// function abcdCompany(name, email, age, gender) {
//   this.name = name;
//   this.email = email;
//   this.age = age;
//   this.gender = gender;
// }

// abcdCompany.prototype.companyName = "LALA Company"; // ?This is default value or extra memory

// let emp1 = new abcdCompany("Ayush Singh","a@gmail.com",21,"Male")
// let emp2 = new abcdCompany(" Singh","s@gmail.com",17,"Male")

// ! class

// class CreateUsers {
//   constructor(name, email, age, gender, FavColor) { // ? constructor is automatically invoked by new keyword
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.gender = gender;
//     this.FavColor = FavColor;
//   }

//   erase() {
//     document.body.querySelectorAll("h1").forEach((elem) => {
//       if (elem.style.color === "green") {
//         elem.remove();
//       }
//     }); // ? This is how we can remove all the elements form body
//   }
//   write(text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = `Message From ${this.name} and the messsage is: "${text}"`;
//     h1.style.color = this.FavColor;
//     document.body.append(h1);
//   }
// }

// let user1 = new CreateUsers("AyushVloger", "a@gmail.com", 21, "Male", "orange");
// user1.write("Vastagana Hoyaaaa");

// let user2 = new CreateUsers("Chacha", "Chacha@gmail.com", 67, "Male", "green");
// user2.write("Pata nahi yaar bhai");

// user2.erase();
// user1.erase();

// ! extends and super

// class Users {
//   constructor(name, address, email, age, gender) {
//     this.name = name;
//     this.address = address;
//     this.email = email;
//     this.age = age;
//     this.gender = gender;
//     this.role = "user";
//   }
//   write(text) {
//     let p = document.createElement("p");
//     p.textContent = text;
//     document.body.appendChild(p);
//   }
//   CheckRole() {
//     console.log(`You are ${this.role}`);
//   }
// }

// class Admin extends Users {
//   constructor(name, address, email, age, gender) {
//     super(name, address, email, age, gender);
//     this.role = "Admin";
//   }
//   remove() {
//     document.querySelectorAll("p").forEach((element) => {
//       element.remove();
//     });
//   }
// }

// let user1 = new Users("Yuvraj Singh", "Mumbai", "y@gmail.com", 21, "Male");
// user1.CheckRole();
// user1.write("Admin Is good")

// let admin = new Admin("Ayush Singh", "Mumbai", "a@gmail.com", 21, "Male");
// admin.CheckRole();
// admin.write("Ayush Singh is a good employee")

// ! Prototype inhertance: Prototype inheritance is inheriting parent object and methods

// let coffee = {
//   color: "Dark",
//   drink: function () {
//     console.log("gut gut gut");
//   },
// };

// let caremalCoffee = Object.create(coffee);

// console.log(caremalCoffee);
// caremalCoffee.taste = "Sweet"
// caremalCoffee.drink();

// ! In object oriented programming their are main 4 pillars of oops concepts and javascript supports every pillar

// ! 1) Encapsulation: Encapsulation is process of restricts the direct access to data and methods

// class BankAccount {
//   #balance = 0; // ?private property can't be access outside of class
//   constructor(owner) {
//     this.owner = owner;
//   }
//   depoit(amount) {
//     if (amount <= 0) {
//       console.log(
//         `Amount Can't be 0 or less then 0 and your amount is ${amount}`,
//       );
//     } else {
//       this.#balance += amount;
//     }
//   }
//   getBalance() {
//     return this.#balance;
//   }
// }

// let user1 = new BankAccount("Ayush Singh");
// user1.depoit(1000);
// user1.depoit(1);
// console.log(user1.getBalance());

// ! 2) Inheritance: Inheritance allow a new class to reuse the property and methods of an existing class by using extend keyword

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   makeSound() {
//     console.log(`${this.name} can make sound`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, bread) {
//     super(name);
//     this.bread = bread;
//   }
//   bark() {
//     console.log(`${this.name} can bark Woof Woof!!`);
//   }
// }

// let dog = new Dog("BullDog", "American");
// dog.makeSound(); // ? This is Animal function and can be access by dog class

// ! Their are types of inheritance

// 1) single inheritance: One child class inheriting from one parent class. The above is the example of it

// ! 2) multilevel inheritance: Inheritance happens in multiple level

// class Animal {
//   eat() {
//     console.log("Eating");
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("Woof!!");
//   }
// }

// class Puppy extends Dog {
//   play() {
//     console.log("Playing...");
//   }
// }

// let puppy = new Puppy();
// puppy.bark();
// puppy.eat();
// puppy.play();

// ! 3) Hierarchical inheritance:Multiple child classes inherit from the same parent.

// class Animal {
//   eat() {
//     console.log("Eating..");
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("Wofff!!");
//   }
// }

// class Cat extends Animal {
//   meow() {
//     console.log("Meow!");
//   }
// }

// let dog = new Dog();
// let cat = new Cat();

// cat.eat();
// dog.eat();

// cat.meow();
// dog.bark();

// ! 4) Multiple inheritance: One Class Inheriting from multiple parents

// ! Note:In javascript does not support multiple inheritance direclty by class but we can achive similar behavoir using mixins

// let CanRun = {
//   run() {
//     console.log("Running...");
//   },
// };

// let CanSwim = {
//   swim() {
//     console.log("Swimming...");
//   },
// };

// class Person {
//   walk() {
//     console.log("Walking...");
//   }
// }

// Object.assign(Person.prototype, CanRun, CanSwim);

// let person = new Person();
// person.walk();
// person.run();
// person.swim();



// ! 3) Abstraction:Abstraction means hiding complicated internal details and showing only the things the user need to use

// class Car {
//   start() {
//     this.#checkEngine();
//     this.#startEngine();

//     console.log("Car Started");
//   }
//   #checkEngine() {
//     console.log("Checking Engine....");
//   }
//   #startEngine() {
//     console.log("Starting Engine....");
//   }
// }

// let car = new Car();
// car.start();

// ! 4) Polymorphism:Polymorphism means the same methods interface can behave diffrently depending on the object using it

// class Animal {
//   makeSound() {
//     console.log("Animal Makes sound:");
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     console.log("Dog says Woof!!");
//   }
// }

// class Cat extends Animal {
//   makeSound() {
//     console.log("Cat says Meow!!");
//   }
// }

// let dog = new Dog();
// dog.makeSound(); // ? Dog says Woof!!

// let cat = new Cat();
// cat.makeSound(); // ? Cat says Meow!!

// let animal = new Animal();
// animal.makeSound(); // ? Animal Makes sound:
