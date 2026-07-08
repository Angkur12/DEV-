let inp = document.querySelector("#noteInput");
let add = document.querySelector("#addBtn")
let notesContainer = document.querySelector("#notesContainer")
add.addEventListener("click", function() {
  let text = inp.value
  if(text === "") return;

  let note = document.createElement("div")
  note.classList.add("note")
  note.textContent = text

  notesContainer.appendChild(note)

  inp.value = "";
  
  let notesArray = [];
  localStorage.setItem("notes", JSON.stringify(notesArray));
  JSON.parse(localStorage.getItem("notes"));
})