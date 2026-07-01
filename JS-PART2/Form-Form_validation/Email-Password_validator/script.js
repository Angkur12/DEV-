let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let form = document.querySelector("#loginForm");
let email_error = document.querySelector("#emailError")
let pass_error = document.querySelector("#passwordError")
let successMsg = document.querySelector("#successMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^[A-Za-z0-9]{8,}$/;

  let email_ans = emailRegex.test(email.value);
  let pass_ans = passwordRegex.test(pass.value);

  if(!email_ans)  {
    email_error.style.display = "block" 
  } else {
    email_error.style.display = "none" 
  }
  if(!pass_ans)  {
    pass_error.style.display = "block"
  } else {
    pass_error.style.display = "none"
  }
    if(email_ans && pass_ans) {
    successMsg.style.display = "block";
  } else {
    successMsg.style.display = "none";
  }
})