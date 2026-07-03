// real time search filter 
let search = document.querySelector('#search')
let items = document.querySelectorAll("#list li")

search.addEventListener("input", () => {
  const searchVal = search.value.toLowerCase()

  items.forEach(function (item) {
    const itemText = item.textContent.toLowerCase();

  
    if(itemText.includes(searchVal)) {
      item.style.display = "block"
    } else {
      item.style.display = "none"

    }

  })
})
