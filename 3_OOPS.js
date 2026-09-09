// ! What is oops: Oops stand for object oriented programming. It's is used for creating real world concepts into program

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
//   constructor(name, email, age, gender, FavColor) {
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
