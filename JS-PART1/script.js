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
