let paragraph = document.getElementById("tekst");

let addingButton = document.querySelector("button#dodaj");
addingButton.onclick = function () {
  paragraph.textContent = "Dowolny Tekst";
};

let deleteButton = document.querySelector("button#usun");
deleteButton.onclick = function () {
  paragraph.textContent = "";
};
