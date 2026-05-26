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