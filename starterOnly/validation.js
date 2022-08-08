// DOM Elements
const emailInput = document.getElementById('email');
const firstNameInput = document.getElementById('first');
const lastNameInput = document.getElementById('last');
const quantityInput = document.getElementById('quantity');

// Form Validation functions

/*
 * Check if the email address is valid 
*/
function checkEmail() {
    let email = emailInput.value;
    let expressionReguliere = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!expressionReguliere.test(email)) {
        document.getElementById('errorEmail').innerHTML = "Veuillez saisir une adresse mail valide.";
    } else {
        document.getElementById('errorEmail').style.display = "none";
    }
    return expressionReguliere.test(email);
}

/*
 * Verifie que le prénom fait au moins 2 caractères, ne contient pas de chiffre et n'est pas vide 
*/
function checkFirstName() {
    let regex = /^[a-zA-Z]{2}/;
    if (!regex.test(firstNameInput.value)) {
        document.getElementById('errorFirstName').innerHTML = "Le prénom doit contenir au moins 2 caractères et ne doit pas contenir de nombre.";
        return false;
    } else {
        document.getElementById('errorFirstName').style.display = "none";
    }

    return true;
}

/*
 * Verifie que le nom fait au moins 2 caractères, ne contient pas de chiffre et n'est pas vide 
*/
function checkLastName() {
    let regex = /^[a-zA-Z]{2}/;
    if (!regex.test(lastNameInput.value)) {
        document.getElementById('errorLastName').innerHTML = "Le nom doit contenir au moins 2 caractères et ne doit pas contenir de nombre.";
        return false;
    } else {
        document.getElementById('errorLastName').style.display = "none";
    }

    return true;
}

/*
 * Verifie que le nombre de tournoi est un nombre entier et est supérieur ou égal à 0
*/
function checkQuantity() {
    if (!Number.isInteger(parseInt(quantityInput.value)) || parseInt(quantityInput.value) < 0) {
        document.getElementById('errorQuantity').innerHTML = "Veuillez saisir une valeur numérique et supérieure ou égale à 0.";
        return false;
    } else {
        document.getElementById('errorQuantity').style.display = "none";
    }

    return true;
}

/*
 * Verifie que les conditions générales ont été accepté
*/
function checkCondition(condition) {
    if (!condition.checked) {
        document.getElementById('errorCondition').innerHTML = "Veuillez accepter les conditions d'utilisation.";
        return false;
    } else {
        document.getElementById('errorCondition').style.display = "none";
    }

    return true;
}

/*
 * Verifie qu'une ville a été coché
*/
function checkRadios() {
    let radios = document.getElementsByName('location');
    let formIsValid = false;
    let i = 0;
    while (!formIsValid && i < radios.length) {
        if (radios[i].checked) {
            formIsValid = true;
            document.getElementById('errorRadio').style.display = "none";
        }
        i++;
    }
    if (!formIsValid) {
        document.getElementById('errorRadio').innerHTML = "Veuillez selectionné une option.";
    }
    return formIsValid;
}

/*
 * Appelée à la soumission du formulaire, vérifie que tous les champs sont conformes
 * Ferme la modale qui contient le formulaire. Lance la modale qui contient le message de succès  
*/
function validate(e) {
    e.preventDefault();
    let condition = document.getElementById('checkbox1');
    if (checkEmail() & checkFirstName() & checkLastName() & checkQuantity() & checkCondition(condition) & checkRadios()) {
        document.getElementById('success').innerHTML = "Merci votre inscription a bien été pris en compte.";
        document.getElementById('reserveForm').reset();
        closeModal();
        launchModalSuccess();
    } else {
        return false;
    }
}