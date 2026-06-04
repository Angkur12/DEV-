//Dom
// let doc = document.querySelector("h1")

// doc.textContent = "Hello angkur"
// doc.innerHTML = "Hello angkur"
// doc.hidden = true
// doc.innerText = "Hello angkur"

// let a = document.querySelector("a")
// a.href = "https://www.google.com"
// a.setAttribute("href","https://www.google.com")
// a.getAttribute("href")
// a.removeAttribute("href")

// //dynamic dom manipulation
// let h1 = document.createElement("h1")
// h1.textContent = "Hello man"
// document.querySelector("body").prepend(h1)
// document.querySelector("body").append(h1)
// document.querySelector("body").appendChild(h1)
// document.querySelector("body").removeChild(h1) //delete el
// let h1 = document.querySelector("h1")
// document.body.removeChild(h1)
// h1.remove()

// 
// let h1 = document.createElement("h1")
// h1.textContent = "New Hello man"
// document.querySelector("div").append(h1)
//
// css manipulation
// let h1 = document.querySelector("h1")
// h1.style.color = "red"
// h1.style.backgroundColor = "black"
// let h1 = document.querySelector("h1")
// h1.classList.add("fas")
// h1.classList.remove("fas")
// h1.classList.toggle("fas") //remove or add, if added or removed

//practise
// let h1 = document.querySelector("text")
// console.log(h1)
// h1.textContent = "Hello"

// let list = document.querySelectorAll("li")
// list.forEach(function (val) {
//   console.log(val.textContent)
// })

// innerText/innerHtml/textContent -->done

// let img = document.querySelector("img")
// console.log(img.src)
// img.getAttribute("src")
// let title = document.querySelector("div")
// title.title = "hey"

// let btn = document.querySelector("button")
// btn.removeAttribute("disabled")
// let img = document.querySelector("div")
// let img = document.createElement("img")
// img.setAttribute("src", ".jpeg")
// document.querySelector("div").prepend(img)

// let p = document.querySelector("p")
// p.style.fontSize = "18px"
////////////////////////////////////////////////////

//Event handing 
// let h1 = document.querySelector("h1")
// h1.addEventListener("click", function () {
//   h1.style.color = "red"
// })

// let p = document.querySelector("p")
// function dblclick() {
//   p.style.color = "red"
// }
// p.addEventListener("dblclick",  dblclick)
// p.removeEventListener("dblclick", dblclick )

// let inp = document.querySelector("input") 
// inp.addEventListener("input", function (dets) {
//   if(dets.data !== null) {
//   console.log(dets.data)
//   }
// })

//
// let selEl = document.querySelector("select")
// let device = document.querySelector("#device")
// selEl.addEventListener("change", function (dets) {
//   // console.log(dets.target.value)
//   device.textContent = `${dets.target.value} device selected `
// })
// awsome things
// let h1 = document.querySelector("h1")

// window.addEventListener("keydown", function(dets) {
//   console.log(dets)
//   if(dets.key === " ") {
//     h1.textContent = "space"
//   } else {
//   h1.textContent = dets.key
//   }
// })

// let btn = document.querySelector("#btn") 
// let fileInp = document.querySelector("#fileInp")
// btn.addEventListener("click", function () {
//   fileInp.click()
// })
// fileInp.addEventListener("change", function (dets) {
//   const file = dets.target.files[0]
//   if(file) {
//   btn.textContent = file.name
//   }
// })

//new
// let form = document.querySelector("form")
// let inputs = document.querySelectorAll("input")

// form.addEventListener("submit", function (dets) {
//   dets.preventDefault()
//   console.log(inputs
    
//   )
// })

//new

//new
// let abcd = document.querySelector("#abcd")

// abcd.addEventListener("mouseover", function () {
//   abcd.style.backgroundColor = "yellow"
// })
// abcd.addEventListener("mouseout", function () {
//   abcd.style.backgroundColor = "red" 
// })

//new
// window.addEventListener("mousemove", function (dets) {
//   console.log(dets)
// })

//event bubbling
// document.querySelector("#nav").addEventListener("click",function () {
//   alert("clicked")
// })

//event capturing

