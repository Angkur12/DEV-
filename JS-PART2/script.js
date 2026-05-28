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

//dynamic dom manipulation
let h1 = document.createElement("h1")
h1.textContent = "Hello man"
document.body.append(h1)