// Form Validation functions

function checkEmail() {
    let email = document.getElementById('email').value;
    let expressionReguliere = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!expressionReguliere.test(email)){
      document.getElementById('errorEmail').innerHTML = "Veuillez saisir une adresse mail valide.";
    } else {
      document.getElementById('errorEmail').style.display = "none";
    }
    return expressionReguliere.test(email);
  }
  
  function checkFirstName() {
    let firstName = document.getElementById('first');
    let regex=/^[a-zA-Z]+$/;
    if (firstName.value.trim().length <2 || firstName.value.trim() == '' || !regex.test(firstName.value.trim())) {
      document.getElementById('errorFirstName').innerHTML = "Le prénom doit contenir au moins 2 caractères et ne doit pas contenir de nombre.";
      return false;
    } else {
      document.getElementById('errorFirstName').style.display = "none";
    }
  
    return true;
  }
  
  function checkLastName() {
    let lastName = document.getElementById('last');
    let regex=/^[a-zA-Z]+$/;
    if (lastName.value.trim().length < 2 || lastName.value.trim() == "" || !regex.test(lastName.value.trim())) {
      document.getElementById('errorLastName').innerHTML = "Le nom doit contenir au moins 2 caractères et ne doit pas contenir de nombre.";
      return false;
    } else {
      document.getElementById('errorLastName').style.display = "none";
    }
  
    return true;
  }
  
  function checkQuantity() {
    let quantity = document.getElementById('quantity');
    if (!Number.isInteger(parseInt(quantity.value)) || parseInt(quantity.value) <= 0) {
      document.getElementById('errorQuantity').innerHTML = "Veuillez saisir une valeur numérique et supérieure ou égale à 0.";
      return false;
    } else {
      document.getElementById('errorQuantity').style.display = "none";
    }
  
    return true;
  }
  
  function checkCondition(condition) {
    if (!condition.checked) {
      document.getElementById('errorCondition').innerHTML ="Veuillez accepter les conditions d'utilisation.";
      return false;
    } else {
      document.getElementById('errorCondition').style.display = "none";
    }
    
    return true;
  }
  
  function checkRadios() {
    let radios = document.getElementsByName('location');
    let formIsValid = false;
    let i = 0;
    while(!formIsValid && i < radios.length) {
      if(radios[i].checked) {
        formIsValid = true;
        document.getElementById('errorRadio').style.display = "none";
      }
      i++;
    }
    if(!formIsValid){
      document.getElementById('errorRadio').innerHTML = "Veuillez selectionné une option.";
    }
    return formIsValid;
  }
  
  function validate(e) {
    e.preventDefault();
    let condition = document.getElementById('checkbox1');
    if (checkEmail() && checkFirstName() && checkLastName() && checkQuantity() && checkCondition(condition) && checkRadios()) {
      document.getElementById('success').innerHTML = "Merci votre inscription a bien été pris en compte.";
      document.getElementById('reserveForm').reset();
      closeModal();
      launchModalSuccess();
    }else{
      return false;
    }
  }