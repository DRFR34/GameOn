




//****** DECLARATION DES VARIABLES ***************

// Variable (boolean)  de vérification globale - initialisation à true
let requiredInputsValidated = true;
console.log("requiredInputsValidated : " + requiredInputsValidated);

// Variable (boolean) de vérification des boutons radio - initialisation à false
let radioBtnValidated = false;
console.log("radioBtnValidated : " + radioBtnValidated);
// Variable (boolean) de validation globale des inputs
let AllInputsValidated = radioBtnValidated && requiredInputsValidated;
console.log("AllInputsValidated : " + AllInputsValidated);

// !test si validé
// AllInputsValidated = true;
//     console.log("AllInputsValidated : " + AllInputsValidated);

//****** DEFINITION DES REGEX ***************


const nameFieldsRegex = /^[a-zA-Z]{2,}/;
// const emailFieldRegex = /^[\w_-]+@[\w-]+\.[a-z]{2,4}$/;
const emailFieldRegex = 'adr@mail.fr';
const birthdateFieldRegex = /[]/;
const quantityFieldRegex = /[0-9]/;


//****** DECLARATION DES FONCTIONS ***************

// Fonction testant les champs requis, sauf les boutons radio
function requiredFieldsInspection() {
    console.log("Fonction appelée : requiredFieldsInspection");
    // Trouver les inputs avec l'attribut required → NodeList
    let errorSpanId = '';
    console.log(errorSpanId);
    const requiredFieldsList = document.querySelectorAll('input[required]');
    console.log("requiredFieldsList :" + requiredFieldsList);
    console.log(requiredFieldsList);

    // Parcour la nodeList et Faire un switch de vérification pour chaque type de champ
    requiredFieldsList.forEach((requiredField) => {
        // requiredField.addEventListener ("input", (e) => {  // écouteur d'évènement
        //     console.log("e.target.id : ");
        //     console.log(e.target.id);
        //switch (e.target.id) { // choisir selon l'identifiant
        console.log(requiredField.id);
        switch (requiredField.id) { // choisir selon l'identifiant

            case "first":  // id = first :
                errorSpanId = 'firstErrorSpan';
                console.log("errorSpanId first: " + errorSpanId);
                console.log(requiredField.value)
                // resetfieldErrorIndication(requiredField, errorSpanId);
                if (!requiredField.value.match(nameFieldsRegex)) { // si valeur ne correspond pas à la regex nameFieldsRegex
                    requiredInputsValidated = false; // la valeur de la variable requiredInputsValidated devient 'false'
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir au moins deux caractères"); // appeler la fonction pour indiquer l'erreur, avec le paramètre " Veuillez entrer au moins deux caractères"
                }
                break;
            case "last":  //dans le cas où l'input est de type texte, alors :
                errorSpanId = 'lastErrorSpan';
                console.log(errorSpanId);
                // resetfieldErrorIndication(requiredField, errorSpanId);
                if (!requiredField.value.match(nameFieldsRegex)) { // si valeur ne correspond pas à la regex nameFieldsRegex
                    requiredInputsValidated = false; // la valeur de la variable requiredInputsValidated devient 'false'
                    // requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir au moins deux caractères"); // appeler la fonction pour indiquer l'erreur, avec le paramètre " Veuillez entrer au moins deux caractères"
                }
                break;
            case "email":
                console.log("requiredField.innerText " + requiredField.data);
                console.log("requiredField.id " + requiredField.id);
                errorSpanId = 'emailErrorSpan';
                console.log(errorSpanId);
                // resetfieldErrorIndication(requiredField, errorSpanId);
                // if (!requiredField.value.match(emailFieldRegex)) {
                if (!requiredField.innerText === emailFieldRegex) {

                    requiredInputsValidated = false;
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir une adresse e-mail valide");
                }
                break;
            case "birthdate":
                errorSpanId = 'birthdateErrorSpan';
                console.log(errorSpanId);
                // resetfieldErrorIndication(requiredField, errorSpanId);
                if (requiredField.value === '') {
                    requiredInputsValidated = false;
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir votre date de naissance");
                }
                break;

            case "quantity":
                errorSpanId = 'quantityErrorSpan';
                console.log(errorSpanId);
                // resetfieldErrorIndication(requiredField, errorSpanId);
                console.log("test du if de quantity"(requiredField.value < 0 || requiredField.value > 20));
                if (requiredField.value < 0 || requiredField.value > 20) {
                    requiredInputsValidated = false;
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir un nombre compris entre 0 et 20");
                }
                break;

            case "checkboxCondition1":
                errorSpanId = 'checkboxCondition1ErrorSpan';
                console.log(errorSpanId);
                // resetfieldErrorIndication(requiredField, errorSpanId);
                if (!requiredField.checked) {
                    requiredInputsValidated = false;
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez accepter les conditions d'utilisations");
                }
                break;
            default:
                null;

        }

        return requiredInputsValidated;


    });
    console.log("requiredInputsValidated en fin de requiredFieldsInspection() :" + requiredInputsValidated);
    // }) ;
}

//fonction permettant la validation des boutons radio 
function radioBtnInspection() {
    console.log("Fonction appelée : radioBtnInspection");

    const locationButtonsList = document.querySelectorAll('input[name="location"]');
    console.log("locationButtonsList :" + locationButtonsList);
    console.log(locationButtonsList);

    for (let i = 0; i < locationButtonsList.length; i++) {
        if (locationButtonsList[i].checked) {
            radioBtnValidated = true;
            break; // arrêt au premier bouton trouvé        
        }
    }
    console.log("radioBtnValidated après contrôle :" + radioBtnValidated)
    if (!radioBtnValidated) {
        requiredField = document.getElementById('location1');
        errorSpanId = "location1ErrorSpan";
        errorMessage = "Veuillez sélectionner un lieu";
        requiredFieldErrorIndication(requiredField, errorSpanId, errorMessage);
    }
}

// fonction permettant l'encadré rouge du champ en erreur et du message d'erreur correspondant     
function requiredFieldErrorIndication(requiredField, errorSpanId, errorMessage) {
    console.log("Fonction appelée : requiredFieldErrorIndication");
    if (document.getElementById(errorSpanId)) {
        //     console.log("document.getElementById(errorSpanId) dans fct requiredFieldErrorIndication");
        //     console.log(document.getElementById(errorSpanId.value));
        //     document.getElementById(errorSpanId).remove();
        // }
        if (errorSpan) {
            console.log("if errorSpan validé");
            document.errorSpan.remove()
        }
        requiredField.style.border = 'red solid 3px';
        let errorSpan = document.createElement('span');
        errorSpan.setAttribute('id', errorSpanId);
        errorSpan.textContent = errorMessage;
        errorSpan.classList.add('errorSpanStyle');
        requiredField.parentNode.appendChild(errorSpan);
    }
}

// fonction création de la confirmation d'inscription
function createRegistrationIsConfirmed() {
    console.log("Fonction appelée : createRegistrationIsConfirmed");
    // corps de la modale
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = '<h3>Merci pour <br> votre inscription</h3>';
    modalBody.style.minHeight = '850px';
    modalBody.style.textAlign = 'center';
    modalBody.style.display = 'flex';
    modalBody.style.flexDirection = 'column';
    modalBody.style.justifyContent = "center";
    modalBody.style.alignItems = "center";

    // bouton de fermeture
    const confirmationCloseBtn = document.createElement('button');
    confirmationCloseBtn.textContent = "Fermer";
    confirmationCloseBtn.classList.add('btn-submit');
    confirmationCloseBtn.classList.add('button');
    confirmationCloseBtn.style.position = 'absolute';
    confirmationCloseBtn.style.bottom = '25px';
    modalBody.appendChild(confirmationCloseBtn);
    confirmationCloseBtn.addEventListener('click', closeModal);
}

// fonction de reset de l'affichage d'erreur
// function resetfieldErrorIndication(requiredField, errorSpanId) {
//     console.log("fonction appelée : resetfieldErrorIndication");
//     requiredField.style.border = 'none';
//     console.log("requiredField : " + requiredField);
//     console.log(requiredField);
//     requiredField.style.border = 'none';
//     console.log("errorSpanId dans fct reset : ");
//     console.log(errorSpanId);
//     document.getElementById(errorSpanId);
//     console.log("document.getElementById(errorSpanId)");
//     console.log(document.getElementById(errorSpanId));
//     if (document.getElementById(errorSpanId)) {
//         document.getElementById(errorSpanId).remove();

//     }
// }

// fonction d'affichage de la confirmation d'inscription, si tous les champs sont ok
function launchRegistrationConfirmation() {
    console.log("Fonction appelée : launchRegistrationConfirmation");

    if (AllInputsValidated) {
        console.log("valeur AllInputsValidated : " + AllInputsValidated);

        // Appel de la fonction créant la modele de confirmation
        createRegistrationIsConfirmed();

    }
}

//****** ECOUTEUR D'EVENEMENT SUR SUBMIT ***************

form.addEventListener('submit', (e) => {
    console.log("valeur de e : " + e);
    console.log(e);
    e.preventDefault();
    //!verif
    console.log("valeur de e : " + e);
    console.log(e);
    // test retrouver les champs 
    // console.log("test selection par fin de l'id");
    // let finId = document.querySelectorAll('[id$="-errorSpan"]')
    // console.log("finId");
    // console.log(finId);


    // Appel de requiredFieldsInspection
    requiredFieldsInspection();

    // Appel de radioBtnInspection
    radioBtnInspection();

    // Appel de launchRegistrationConfirmed
    launchRegistrationConfirmation();

});