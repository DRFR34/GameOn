//****** Déclaration des variables *******

// Variable (boolean) de vérification des boutons radio - initialisation à false
let radioBtnValidated = 0;
console.log("radioBtnValidated : ", radioBtnValidated);


// variable récupérant la date de naissance
let birthdate = document.getElementById('birthdate');
console.log("birthdate : " + " type : " + typeof (birthdate) + " ; valeur de birthdate : " + birthdate);

// variables de validité de chaque champ
let firstIsValid;
let lastIsValid;
let emailIsValid;
let birthdateIsValid;
let quantityIsValid;
let checkboxTermsOfUseIsVAlid;

// Variable (boolean) de validation globale des inputs → si true la confirmation d'inscription peur s'afficher
let AllInputsValidated = 0;


//****** Définition des RegExp ******

const nameFieldsRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ-]{2,}/;

const emailFieldRegex = /^[\w_-]+@[\w-]+\.[a-z]{2,4}$/;

const quantityFieldRegex = /[0-9]/;


//****** Déclaration des fonctions ******

// Fonction testant les champs requis, sauf les boutons radio
function requiredFieldsInspection() {

    // variable qui va servir pour créer les identifiants  des span d'erreurs
    let errorSpanId = '';

    // Trouver les inputs avec l'attribut required → NodeList
    const requiredFieldsList = document.querySelectorAll('input[required]');
    console.log("requiredFieldsList :" + requiredFieldsList);
    console.log(requiredFieldsList);

    // Parcours la nodeList et faire un switch de vérification pour chaque type de champ
    requiredFieldsList.forEach((requiredField) => {
        console.log(requiredField.id);
        // choisir selon l'identifiant
        switch (requiredField.id) {

            case "first":  // id = first :
                errorSpanId = 'firstErrorSpan';

                // écouteur d'évènement sut l'input (blur = à la perte du focus)
                requiredField.addEventListener("blur", (e) => {

                    // suppression des affichages d'erreur créés lors d'une saisie précédente
                    resetfieldErrorIndication(requiredField, errorSpanId);

                    // si valeur ne correspond pas à la regex nameFieldsRegex
                    if (!requiredField.value.match(nameFieldsRegex)) {

                        // la valeur de la variable requiredInputsValidated devient 0
                        firstIsValid = 0;

                        // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                        requiredFieldErrorIndication(requiredField, errorSpanId, "Votre prénom doit comporter au moins deux lettres");

                    } else {

                        // la valeur de la variable requiredInputsValidated devient 1 
                        firstIsValid = 1;

                        // teste si le bouton submit doit être activé ou pas
                        btnSubmitActivation();
                    }
                });
                break;

            case "last":  // id ="last"

                errorSpanId = 'lastErrorSpan';

                requiredField.addEventListener("blur", (e) => {

                    // suppression des affichages d'erreur créés lors d'une saisie précédente
                    resetfieldErrorIndication(requiredField, errorSpanId);

                    // si valeur ne correspond pas à la regex nameFieldsRegex
                    if (!requiredField.value.match(nameFieldsRegex)) {

                        // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                        lastIsValid = 0;

                        // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                        requiredFieldErrorIndication(requiredField, errorSpanId, "Votre nom doit comporter au moins deux lettres");

                        btnSubmitActivation()

                    } else {
                        // la valeur de la variable requiredInputsValidated devient 1 
                        lastIsValid = 1;
                        console.log("firstIsValid après : ", firstIsValid);
                        console.log("(i)→ AllInputsValidated : " + AllInputsValidated);

                        // teste si le bouton submit doit être activé ou pas
                        btnSubmitActivation();
                    }
                });
                break;

            case "email": // id ="email"

                errorSpanId = 'emailErrorSpan';

                // écouteur d'évènement sur l'input (blur = à la perte du focus)
                requiredField.addEventListener("blur", (e) => {

                    // suppression des affichages d'erreur créés lors d'une saisie précédente
                    resetfieldErrorIndication(requiredField, errorSpanId);

                    // si valeur ne correspond pas à la regex nameFieldsRegex
                    if (!requiredField.value.match(emailFieldRegex)) {

                        // la valeur de la variable requiredInputsValidated devient 0
                        emailIsValid = 0;

                        // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                        requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir une adresse e-mail valide");

                        btnSubmitActivation();

                    } else {
                        // la valeur de la variable de validation devient 1                         
                        emailIsValid = 1;
                        console.log("(i)→ emailIsValid : ", emailIsValid);
                        // teste si le bouton submit doit être activé ou pas
                        btnSubmitActivation();
                    }
                });
                break;

            case "birthdate":
                console.log("birthdate :  " + requiredField.value);
                console.log(requiredField);

                errorSpanId = 'birthdateErrorSpan';
                console.log(errorSpanId);
                console.log("requiredField.value pour birthdate : " + requiredField.value);
                console.log(requiredField.value);

                // écouteur d'évènement sur l'input (blur = à la perte du focus)
                requiredField.addEventListener("blur", (e) => {

                    // suppression des indications d'erreurs éventuelles crées lors d'un précédent submit
                    resetfieldErrorIndication(requiredField, errorSpanId);

                    // détermination de l'âge selon la date de naissance → majorité                
                    let diffDates = Date.now() - requiredField.valueAsNumber;
                    console.log("diff :", diffDates);

                    // conversion des ms en années ( 31556952000 ms/an) + arrondi à l'entier inférieur       
                    let userAge = Math.floor(diffDates / 31556952000);

                    // utilisateur mineur
                    if (userAge < 18) {

                        // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                        requiredFieldErrorIndication(requiredField, errorSpanId, "Nous sommes désolés, vous devez être majeur(e) pour participer");

                        // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                        birthdateIsValid = 0;

                        // teste si le bouton submit doit être activé ou pas
                        btnSubmitActivation();
                    }

                    // aucune date saisie
                    else if (requiredField.value === "") {

                        // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                        birthdateIsValid = 0;

                        // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                        requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir votre date de naissance");

                        // teste si le bouton submit doit être activé ou pas
                        btnSubmitActivation();

                    }

                    //date saisie trop ancienne ( en référence à l'attirbut min placé dans la balise HTML de l'input)
                    else if (requiredField.value < birthdate.min && requiredField.value !== "") {

                        // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                        birthdateIsValid = 0;

                        // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                        requiredFieldErrorIndication(requiredField, errorSpanId, "Cette date est trop ancienne, merci de la corriger");

                        // teste si le bouton submit doit être activé ou pas
                        btnSubmitActivation();

                    }

                    // date valide
                    else {
                        birthdateIsValid = 1;

                        // teste si le bouton submit doit être activé ou pas
                        btnSubmitActivation();
                    }

                });
                break;

            case "quantity":
                errorSpanId = 'quantityErrorSpan';

                // écouteur d'évènement sur l'input (blur = à la perte du focus)
                requiredField.addEventListener("blur", (e) => {
                    // suppression des indications d'erreurs éventuelles crées lors d'un précédent submit
                    resetfieldErrorIndication(requiredField, errorSpanId);

                    // si le nombre est négatif, ou si il est sup à 50
                    if (Math.sign(requiredField.value) === -1 || requiredField.value > 50 || requiredField.value === "") {

                        // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                        requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir un nombre compris entre 0 et 20");

                        // la valeur de la variable de validation devient 0
                        quantityIsValid = 0;

                        // teste si le bouton submit doit être activé ou pas
                        btnSubmitActivation();

                    } else {

                        // la valeur de la variable de validation devient 0
                        quantityIsValid = 1;

                        // teste si le bouton submit doit être activé ou pas
                        btnSubmitActivation();
                    }

                });
                break;

            case "checkboxTermsOfUse":
                errorSpanId = 'checkboxTermsOfUseErrorSpan';

                // écouteur d'évènement sur l'input (blur = à la perte du focus)
                requiredField.addEventListener("change", () => {

                    // suppression des affichages d'erreur créés lors d'une saisie précédente
                    resetfieldErrorIndication(requiredField, errorSpanId);

                    if (!requiredField.checked) {

                        // la valeur de la variable de validation devient 0
                        checkboxTermsOfUseIsVAlid = 0;
                        console.log("checkboxTermsOfUseIsVAlid :", checkboxTermsOfUseIsVAlid);

                        // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                        requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez accepter les conditions d'utilisations");

                        // teste si le bouton submit doit être activé ou pas

                        btnSubmitActivation();

                    } else {

                        // la valeur de la variable de validation devient 1
                        checkboxTermsOfUseIsVAlid = 1;

                        // teste si le bouton submit doit être activé ou pas
                        btnSubmitActivation();
                    }
                });
                break;
        }

    });
}

//fonction permettant la validation des boutons radio 
function radioBtnInspection() {

    radioBtnValidated = 0;

    const locationButtonsList = document.querySelectorAll('input[type=radio][name="location"]');
    locationButtonsList.forEach(locationButton => locationButton.addEventListener('change', () => {

        // si un bouton radio est coché 
        if (locationButton.value) {
            radioBtnValidated = 1;

            // teste si le bouton submit doit être activé ou pas
            btnSubmitActivation()

        }
    }));
}

// fonction permettant l'encadré rouge du champ en erreur et du message d'erreur correspondant aux paramètres    
function requiredFieldErrorIndication(requiredField, errorSpanId, errorMessage) {

    //efface l'élét si il existe déjà
    if (document.getElementById(errorSpanId)) {

        document.getElementById(errorSpanId).remove();
    }

    console.log("requiredField : ", requiredField);
    requiredField.style.border = 'solid 2px var(--primary-color)';    
    requiredField.classList.add('errorBorderStyle');
    let errorSpan = document.createElement('span');
    errorSpan.setAttribute('id', errorSpanId);
    errorSpan.textContent = errorMessage;
    errorSpan.classList.add('errorSpanStyle');
    requiredField.parentNode.appendChild(errorSpan);

}

// fonction création de la confirmation d'inscription
function createRegistrationIsConfirmed() {

    // sélection du corps de la modale
    let modalBody = document.querySelector('.modal-body');


    // supression du formulaire de saisie
    const form = document.getElementById('form');

    if (form) {
        modalBody.removeChild(form);
    }

    // insertion du message de confirmation
    modalBody.innerHTML = '<h3>Merci pour <br> votre inscription</h3>';
    modalBody.style.minHeight = '850px';
    modalBody.style.textAlign = 'center';
    modalBody.style.display = 'flex';
    modalBody.style.flexDirection = 'column';
    modalBody.style.justifyContent = "center";
    modalBody.style.alignItems = "center";

    // insertion du bouton de fermeture
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
function resetfieldErrorIndication(requiredField, errorSpanId) {

    // efface les bordures 
    requiredField.style.border = 'none';
    document.getElementById(errorSpanId);

    // supprime la spn d'erreur si elle existe
    if (document.getElementById(errorSpanId)) {

        document.getElementById(errorSpanId).remove();

    }
}

//fonction pour réactiver le bouton de soumission
function btnSubmitActivation() {

    // verification que tous les inputs sont validés (=1)
    AllInputsValidated = firstIsValid * lastIsValid * radioBtnValidated * emailIsValid * birthdateIsValid * quantityIsValid * checkboxTermsOfUseIsVAlid;

    // activation du bouton si tout est validé, et ajout d'un listener pour envoyer la confirmation
    if (AllInputsValidated) {

        form.querySelector('.btn-submit').removeAttribute("disabled", "");
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            createRegistrationIsConfirmed();
        });

        // sinon  (tout n'est pas valide), désactiver le bouton
    } else {
        form.querySelector('.btn-submit').setAttribute("disabled", "");
    }
}





