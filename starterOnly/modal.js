function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalForm = document.getElementById('modalForm');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalForm.style.display = "block";
}

// close modal form
function closeModal() {
  modalForm.style.display = "none";
}


//launch modal success
function launchModalSuccess() {
  document.getElementById('modalSuccess').style.display = "block";
}

// close modal success
function closeModalSuccess() {
  document.getElementById('modalSuccess').style.display = "none";
}