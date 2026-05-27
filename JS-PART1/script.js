//function expression
// let fnc = function()  {
//   console.log("hello")
// }
// fnc()

//fat arrow function 
// let func = () => {
//   console.log("hello")
// }
// func()

//parameter
// function print(v1)  {
//   console.log(`${v1} is dancing`)
// }
// print("someone")
// print("she")

// default parameters
// function add(v1 = 1,v2 = 2) {
//   console.log(v1+v2)
// }
// add(4,5)

// rest parameters
// function add(a,b, ...val) {
//   console.log(a,b, val)
// }
// add(1,2,3,4,5,55)

// return and | early return values
// function abcd(v) {
//   return 12+v;
// }
// let val = abcd(23);
// console.log(val)

//First class function
// function abcd(val) {
//   val()
// }
// abcd(function () {
//   console.log("Hey")
// })

//higher oder function
// function abcd() {
//   return function() {
//     console.log(6)
//   }
// }
// abcd()()

//pure vs impure functions
// let a = 12

// function abcd() {
//   console.log("higher")
// }
// abcd()
// //
// function add()  {
//    a++
//    console.log(a)
// }
// add()

//closures and lexical scoping
// function random() {
//   let a = 12;
//   return function() {
//     console.log(a)
//   }
// }

// random()()
// //
// function randomm()  {
//   let a = 12;
//   function abc()  {
//     let b = 13;
//     function def()  {
//       let c = 14
//     }
//   }
// }

// IIFE 
// (function(){
//   console.log("Hello")
// }) ()// function call
  
//Hoisting differences between declaration and expression
// word() //Hoisting
// function word() {
//   console.log("Hello")
// }

// let abcd = function ()  {
//   console.log("Hello")
// }
// abcd()

// Practice
// 1. 
// let func = () => {
//   console.log("Hello")
// } 
// func()

// let multiply = (a, b) => {
//   return a*b
// }

//2.
// function random(...val) {
//   let total = 0
//   val.forEach(function(val) {
//     total = total+val
//   })
//   return total
// }
// console.log(random(1,2,3,4,5,6))

//3.
// function checkAge(age) {
//   if(age < 18)  return "Too Young"
//   return "Allowed"
// }

///4.
// (function() {
//   console.log("Initialized")
// })
// ()

// bmi calculator
// let func = (weight, height) => {
//   return weight/ (height*height)
// }
// console.log(func(68,1.7).toFixed(2))

// Reusable discount calculator
// function discountCalculator(discount) {
//   return function (price) {
//     return price - price*(discount/100)
//   }
// }

// let discounter = discountCalculator(10)
// console.log(discounter(100)) 

// IIFE problem
// (function() {
//   let password = "secret" 
//   console.log(password)
// }) ()
// console.log(password) //not possible


//ARRAY -->
//forEach
// let arr = [1,2,3,4,5]
// arr.forEach(function (val) {
//   console.log(val)
// })

//map 
// let arrr= arr.map(function(val) {
//   return 12
// }) //ek array theke new array
// console.log(arrr)

//filter
// let newarr = arr.filter(function (val) {
//   if(val>3) return true
// })
// console.log(newarr)

//reduce 
// let ans = arr.reduce(function(accumulator, val) {
//   return accumulator + val
// }, 0)
// console.log(ans) 

//find
// let ans = arr.find(function (val) {
//   return val == 1
// })
// console.log(ans)

//some 
// let ans = arr.some(function (val) {
//   return val > 85
// })

//some
// let ans = arr.every(function (val) {
//   return val > 0
// })

//destructuring
// let arr = [1,2,3,4,5]
// let [a, b, ,f] = arr

//spread operator
// let arr = [1,2,3,4,5,6,7,8,9,0]
// let arr2 = [...arr]

// practice -->
// let fruit = ["banana", "banana", "lichi"]
// fruit.push("mango ")
// fruit.unshift("Pineapple") 

// let colors = ["green", "yellow"]
// colors.splice(1,0, "red", "blue")

// let items = [1,2,3,4,5,6]
// let newarr = items.slice(1,4)

// sorting
// let names = ["Zara", "Arjun", "Mira", "Bhavya"]
// names.sort()
// names.sort().reverse()

// let arr= [1,2,3,4]
// let newarr = arr.map(function (val) {
//   return val*val
// })

// let arr = [5,12,8,20,3] 
// let newarr = arr.filter(function (val) {
//   return val>10
// })

// let arr = [12,20,30] 
// let newarr = arr.reduce(function(acc, val) {
//   return acc + val
// },0) result = 62

// let arr = [45,60,28,90] 
// let newarr = arr.some(function (val) {
//   return val < 35
// }) // result -> true/false

// let arr = [2,4,6,8]
// let newarr = arr.every(function (val) {
//   return val % 2 === 0
// })  //result = true/false

// let fullName = ["Harsh", "Sharma"]
// let [firstName, lastname] = fullName;
// let a = [1,2]
// let b = [3,4]
// let c = [...a, ...b]
//array done ✅

// Object 
// key value structure 
// let obj = {
//   name: "Angkur",
//   age: 22,
// }

// object destructuring
// let person = {
//   name: "Rahim",
//   age: 22,
//   profession: "Software Engineer",
//   country: "Bangladesh",
//   height: {
//     isStudent: false,
//     skill: ["JavaScript", "React", "Node.js"],
//     hobby: "Gaming",
//   },
//   favoriteColor: "Black",
//   language: "Bengali"
// };
// let {isStudent,skill} = person.height

// looping 
//for-in
// let person = {
//   name: "Rahim",
//   age: 22,
//   profession: "Software Engineer",
//   country: "Bangladesh",
//   height: "5.8ft",
//   isStudent: false,
//   skills: ["JavaScript", "React", "Node.js"],
//   hobby: "Gaming",
//   favoriteColor: "Black",
//   language: "Bengali"
// };
// for(let key in person) {
//   console.log( key, person[key])
// }

// Object.keys
// let person = {
//   name: "Rahim",
//   age: 22,
//   profession: "Software Engineer",
//   country: "Bangladesh",
//   height: "5.8ft",
//   isStudent: false,
//   skills: ["JavaScript", "React", "Node.js"],
//   hobby: "Gaming",
//   favoriteColor: "Black",
//   language: "Bengali"
// };
// Object.keys(person) //--> //keys converted to simple array 

// Object.entries 
// let person = {
//   name: "Rahim",
//   age: 22,
//   profession: "Software Engineer",
//   country: {
//     height: "5.8ft",
//     isStudent: false,
//   },
// };
// Object.entries(person).forEach((val) => {
//   console.log(val[0] + ":" + val[1])
// })

// spread 
// let pers = {...person} //copy

// let per = Object.assign({price: "infinity"},person) // copy

//deep cloning
// let per = JSON.parse(JSON.stringify(person))

// optional chaining ???

//computed properties
// let old = "something"
// let person = {
//   name: "Rahim",
//   age: 22,
//   profession: "Software Engineer",
//   country: {
//     height: "5.8ft",
//     isStudent: false,
//   },
//   [old] : "23"
// };

// const user = {
//   "first-name" : "Harsh"
// }
// let {"first-name" : firstName} = user

