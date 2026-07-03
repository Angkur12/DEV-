// localStorage -> data stored in browser, but dont get deleted even stopping the browser 

// sessionStorage --> data can be temporarily stored. but tab stop so data lost 

//cookies => data stores and the data saved in browser in cookies property, and this data is light. ~4kb

// localStorage
// localStorage.setItem("name", "harsh")
// localStorage.setItem("name", "harshita")

// let val = localStorage.getItem("name")

// localStorage.removeItem("name")


// sessionStorage

//cookies
document.cookie = "email = angkur@test.com" 

// localStorage-> string 
// JSON.stringify([1,2,3,4,5,6])
localStorage.setItem("friends", JSON.stringify(["saikat", "partha", "mehedi"]))
let str = localStorage.getItem("friends")
JSON.parse(str);
