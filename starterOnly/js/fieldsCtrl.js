//****** Déclaration des variables *******

// Variable (boolean)  de vérification des inputs requis - initialisation à true - si un ou plus champs en erruer, passe à false.
let requiredInputsValidated = true;
console.log("requiredInputsValidated : " + requiredInputsValidated);

// Variable (boolean) de vérification des boutons radio - initialisation à false
let radioBtnValidated = false;
console.log("radioBtnValidated : " + radioBtnValidated);

// Variable (boolean) de validation globale des inputs → si true la confirmation d'inscription peur s'afficher
let AllInputsValidated = false;
console.log("AllInputsValidated : " + AllInputsValidated);


//****** Définition des RegExp ******

const nameFieldsRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ-]{2,}/;

const emailFieldRegex = /^[\w_-]+@[\w-]+\.[a-z]{2,4}$/;

const quantityFieldRegex = /[0-9]/;


//****** Déclaration des fonctions ******

//*** Fonction testant les champs requis, sauf les boutons radio
function requiredFieldsInspection() {

    // variable qui va servir pour créer les  span d'erreurs
    let errorSpan;

    // variable qui va servir pour créer les identifiants  des span d'erreurs
    let errorSpanId = '';

    // Trouver les inputs avec l'attribut required → NodeList
    const requiredFieldsList = document.querySelectorAll('input[required]');

    // Parcours la nodeList et faire un switch de vérification pour chaque type de champ
    requiredFieldsList.forEach((requiredField) => {

        // choisir selon l'identifiant
        switch (requiredField.id) {

            case "first":  // id = first :

                errorSpanId = 'firstErrorSpan';

                resetfieldErrorIndication(requiredField, errorSpanId);

                // si valeur ne correspond pas à la regex nameFieldsRegex
                if (!requiredField.value.match(nameFieldsRegex)) {

                    // la valeur de la variable requiredInputsValidated devient 'false'
                    requiredInputsValidated = false;

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Votre prénom doit comporter au moins deux lettres");
                }
                break;

            case "last":  // id ="last"

                errorSpanId = 'lastErrorSpan';

                //  suppression des indications d'erreurs éventuelles crées lors d'un précédent submit
                resetfieldErrorIndication(requiredField, errorSpanId);

                // si valeur ne correspond pas à la regex nameFieldsRegex
                if (!requiredField.value.match(nameFieldsRegex)) {

                    // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                    requiredInputsValidated = false;

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Votre nom doit comporter au moins deux lettres");
                }
                break;

            case "email": // id ="email"

                errorSpanId = 'emailErrorSpan';

                // suppression des indications d'erreurs éventuelles crées lors d'un précédent submit
                resetfieldErrorIndication(requiredField, errorSpanId);

                // si valeur ne correspond pas à la regex nameFieldsRegex
                if (!requiredField.value.match(emailFieldRegex)) {

                    // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                    requiredInputsValidated = false;

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir une adresse e-mail valide");
                }
                break;

            case "birthdate":

                errorSpanId = 'birthdateErrorSpan';

                // suppression des indications d'erreurs éventuelles crées lors d'un précédent submit
                resetfieldErrorIndication(requiredField, errorSpanId);

                // détermination de l'âge selon la date de naissance → majorité                
                let diffDates = Date.now() - requiredField.valueAsNumber;
                console.log("diff :", diffDates);

                // conversion des ms en années ( 31556952000 ms/an) + arrondi à l'entier inférieur       
                let userAge = Math.floor(diffDates / 31556952000);

                // Si utilisateur mineur
                if (userAge < 18) {

                    // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                    requiredInputsValidated = false;

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Nous sommes désolés, vous devez être majeur(e) pour participer");
                }

                // si aucune date saisie
                else if (requiredField.value === "") {

                    // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                    requiredInputsValidated = false;

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir votre date de naissance");
                }

                // Si date saisie trop ancienne ( en référence à l'attirbut min placé dans la balise HTML de l'input)
                else if (requiredField.value < birthdate.min && requiredField.value !== "") {

                    // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                    requiredInputsValidated = false;

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Cette date est trop ancienne, merci de la corriger");
                }

                break;

            case "quantity":
                errorSpanId = 'quantityErrorSpan';

                // suppression des indications d'erreurs éventuelles crées lors d'un précédent submit
                resetfieldErrorIndication(requiredField, errorSpanId);

                // si le nombre est négatif ou >= à 50
                if (Math.sign(requiredField.value) === -1 || requiredField.value > 50 || requiredField.value === "") {

                    // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                    requiredInputsValidated = false;

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir un nombre compris entre 0 et 20");
                }
                break;

            case "checkboxTermsOfUse":
                errorSpanId = 'checkboxTermsOfUseErrorSpan';

                // suppression des indications d'erreurs éventuelles crées lors d'un précédent submit
                resetfieldErrorIndication(requiredField, errorSpanId);

                // si la case est cochée
                if (!requiredField.checked) {

                    // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                    requiredInputsValidated = false;

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez accepter les conditions d'utilisations");
                }
                break;
        }

        //retourne la valeur true / false
        return requiredInputsValidated;

    });

}

//*** fonction permettant la validation des boutons radio 
function radioBtnInspection() {

    // reset de la variable de vérification à false
    radioBtnValidated = false;

    // sélection de tous les boutons ayant le nom "location"
    const locationButtonsList = document.querySelectorAll('input[name="location"]');

    requiredField = document.getElementById('location1');

    // suppresion des indicateurs d'erreur si existent
    errorSpanId = "location1ErrorSpan";
    errorMessage = "Veuillez sélectionner un lieu";
    resetfieldErrorIndication(requiredField, errorSpanId);

    // boucle pour trouver un bouton coché
    for (let i = 0; i < locationButtonsList.length; i++) {

        // si le bouton évalué est coché
        if (locationButtonsList[i].checked) {

            // la valeur de la variable  radioBtnValidated devient 'true' → permet l'affichage du message d'inscription
            radioBtnValidated = true;

            // arrêt au premier bouton trouvé  
            break;
        }
    }

    // si aucun bouton n'est coché → affichage du message d'erreur        
    if (!radioBtnValidated) {

        // appel de la fonction affichant l'erreur, avec les paramètres particuliers
        requiredFieldErrorIndication(requiredField, errorSpanId, errorMessage);
    }
}

//*** fonction permettant l'encadré rouge du champ en erreur et du message d'erreur correspondant aux paramètres    
function requiredFieldErrorIndication(requiredField, errorSpanId, errorMessage) {

    // si une span d'erreur existe déjà , la supprimer
    if (document.getElementById(errorSpanId)) {

        document.getElementById(errorSpanId).remove();
    }

    // construction de la bordure rouge  + span d'erreur
    requiredField.style.border = 'solid 2px var(--primary-color)';  
    let errorSpan = document.createElement('span');
    errorSpan.setAttribute('id', errorSpanId);
    errorSpan.textContent = errorMessage;
    errorSpan.classList.add('errorSpanStyle');
    requiredField.parentNode.appendChild(errorSpan);

}

//*** fonction création de la confirmation d'inscription
function createRegistrationIsConfirmed() {

    // sélection du corps de la modale
    let modalBody = document.querySelector('.modal-body');

    // supression des éléments précédents du formulaire
    const form = document.getElementById('form');
    modalBody.removeChild(form);

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


//*** fonction de reset de l'affichage d'erreur
function resetfieldErrorIndication(requiredField, errorSpanId) {

    // suppression de la bordure rouge
    requiredField.style.border = 'none';

    // suppression de la span d'erreur si existe
    document.getElementById(errorSpanId);

    if (document.getElementById(errorSpanId)) {

        document.getElementById(errorSpanId).remove();
    }
}

//*** fonction d'affichage de la confirmation d'inscription, si tous les champs sont ok
function launchRegistrationConfirmation() {

    // mise à jour de la variable globale de validation
    AllInputsValidated = radioBtnValidated && requiredInputsValidated;

    // si les boutons radio ET les autres champs requis sont valides
    if (AllInputsValidated) {
        console.log("valeur de  AllInputsValidated : " + AllInputsValidated);

        // suppression des éléments de la modale

        // Appel de la fonction créant la modale de confirmation
        console.log("Fonction appelée : createRegistrationIsConfirmed");
        createRegistrationIsConfirmed();

    }
}

//****** ECOUTEUR D'EVENEMENT SUBMIT SUR LE FORMULAIRE **************

form.addEventListener('submit', (e) => {

    // empêche le rechargement de la page    
    e.preventDefault();

    console.log("valeur de e : " + e);
    console.log(e);

    //Reset des variables de validation, avant les nouvelle boucles
    requiredInputsValidated = true;
    radioBtnValidated = false;

    // Appel de requiredFieldsInspection
    requiredFieldsInspection();

    // Appel de radioBtnInspection
    radioBtnInspection();

    // Appel de launchRegistrationConfirmed 
    launchRegistrationConfirmation();

});