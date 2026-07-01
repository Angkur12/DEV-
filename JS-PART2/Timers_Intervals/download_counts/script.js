let timer = document.querySelector("#timer")
let btn = document.querySelector("#startBtn")

btn.addEventListener("click", () => {
  let count = 10;
  setInterval(function() {
  if(count >= 0) {
    timer.textContent = count
    count --;
  }
}, 1000)
})




