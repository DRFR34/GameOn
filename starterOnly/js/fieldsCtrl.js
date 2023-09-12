




//****** DECLARATION DES VARIABLES ***************

// Variable (boolean)  de vérification des inputs requis - initialisation à true - si un ou plus champs en erruer, passe à false.
let requiredInputsValidated = true;
console.log("requiredInputsValidated : " + requiredInputsValidated);

// Variable (boolean) de vérification des boutons radio - initialisation à false
let radioBtnValidated = false;
console.log("radioBtnValidated : " + radioBtnValidated);

// Variable (boolean) de validation globale des inputs → si true la confirmation d'inscription peur s'afficher
let AllInputsValidated = radioBtnValidated && requiredInputsValidated;
console.log("AllInputsValidated : " + AllInputsValidated);


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
    

    // variable qui va servir pour créer les  span d'erreurs
    let errorSpan; 

    // variable qui va servir pour créer les identifiants  des span d'erreurs
    let errorSpanId = ''; 
            console.log(errorSpanId);
    
    
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
                        console.log("requiredField.id pour first : " + requiredField.id);
                errorSpanId = 'firstErrorSpan'; 
                        console.log("errorSpanId first: " + errorSpanId);
                        console.log( "requiredField.value pour first : " + requiredField.value);
                // resetfieldErrorIndication(requiredField, errorSpanId);

                // si valeur ne correspond pas à la regex nameFieldsRegex
                        console.log("Prénom -  ne correspond pas à regex : " + (!requiredField.value.match(nameFieldsRegex)));
                if (!requiredField.value.match(nameFieldsRegex)) { 
                        
                    // la valeur de la variable requiredInputsValidated devient 'false'
                    requiredInputsValidated = false; 

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir au moins deux caractères"); 
                }
                break;

            case "last":  // id ="last"

                errorSpanId = 'lastErrorSpan';
                        console.log(errorSpanId);
                        console.log( "requiredField.value pour last : " + requiredField.value);
                        
                        

                // resetfieldErrorIndication(requiredField, errorSpanId);

                // si valeur ne correspond pas à la regex nameFieldsRegex
                        console.log("Nom - correspondance avec la regex : " + (!requiredField.value.match(nameFieldsRegex)));

                if (!requiredField.value.match(nameFieldsRegex)) { 
                    

                    // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                    requiredInputsValidated = false; 

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir au moins deux caractères"); 
                }
                break;

            case "email": // id ="email"

                        // console.log("requiredField.innerText " + requiredField.data);
                        // console.log("requiredField.id " + requiredField.id);

                errorSpanId = 'emailErrorSpan';
                        console.log(errorSpanId);
                        console.log( "requiredField.value pour email : " + requiredField.value);

                // resetfieldErrorIndication(requiredField, errorSpanId);

                // si valeur ne correspond pas à la regex nameFieldsRegex

                // if (!requiredField.value.match(emailFieldRegex)) {
                if (requiredField.innerText === emailFieldRegex) {

                    // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                    requiredInputsValidated = false;

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir une adresse e-mail valide");
                }
                break;

            case "birthdate":
                errorSpanId = 'birthdateErrorSpan';
                        console.log(errorSpanId);
                        console.log( "requiredField.value pour birthdate : " + requiredField.value);


                // resetfieldErrorIndication(requiredField, errorSpanId);
                if (requiredField.value === '') {

                    // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                    requiredInputsValidated = false;

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir votre date de naissance");
                }
                break;

            case "quantity":
                errorSpanId = 'quantityErrorSpan';
                        console.log( "quantity errorSpanId : " + errorSpanId);
                        console.log( "requiredField.value pour quantity : " + requiredField.value);


                // resetfieldErrorIndication(requiredField, errorSpanId);
                console.log("test du if de quantity"(requiredField.value < 0 || requiredField.value > 20));
                if (requiredField.value < 0 || requiredField.value > 20) {
                            console.log("quantity - test du if : "(requiredField.value < 0 || requiredField.value > 20));

                    // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                    requiredInputsValidated = false;

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir un nombre compris entre 0 et 20");
                }
                break;

            case "checkboxCondition1":
                errorSpanId = 'checkboxCondition1ErrorSpan';
                        console.log(errorSpanId);
                        console.log( "requiredField.value pour checkbox1 : " + requiredField.value);

                // resetfieldErrorIndication(requiredField, errorSpanId);
                if (!requiredField.checked) {

                    // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                    requiredInputsValidated = false;

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez accepter les conditions d'utilisations");
                }
                break;

            default: // utile ?
                null;

        }

        return requiredInputsValidated;


    });
    console.log("requiredInputsValidated en fin de requiredFieldsInspection() :" + requiredInputsValidated);
    
}

//fonction permettant la validation des boutons radio 
function radioBtnInspection() {
        console.log("Fonction appelée : radioBtnInspection");

    const locationButtonsList = document.querySelectorAll('input[name="location"]');
        console.log("locationButtonsList :" + locationButtonsList);
        console.log(locationButtonsList);

    for (let i = 0; i < locationButtonsList.length; i++) {
        if (locationButtonsList[i].checked) {
            
            // la valeur de la variable  radioBtnValidated devient 'true' → permet l'affichage du message d'inscription
            radioBtnValidated = true;

            // arrêt au premier bouton trouvé  
            break;       
        }
    }
            console.log("radioBtnValidated après contrôle :" + radioBtnValidated)
    // si aucun bouton n'est coché → affichage du message d'erreur        
    if (!radioBtnValidated) {
            console.log("Boutons radio - aucun n'est coché : " + !radioBtnValidated );
        
            // un seul bouton suffira pour sélectionner le parent
        requiredField = document.getElementById('location1');

        errorSpanId = "location1ErrorSpan";
        errorMessage = "Veuillez sélectionner un lieu";

       // appel de la fonction affichant l'erreur, avec les paramètres particuliers
        requiredFieldErrorIndication(requiredField, errorSpanId, errorMessage);
    }
}

// fonction permettant l'encadré rouge du champ en erreur et du message d'erreur correspondant aux paramètres    
function requiredFieldErrorIndication(requiredField, errorSpanId, errorMessage) {
            console.log("Fonction activée : requiredFieldErrorIndication");
    if (document.getElementById(errorSpanId)) {
            console.log("document.getElementById(errorSpanId) dans fct requiredFieldErrorIndication");
            console.log(document.getElementById(errorSpanId.value));
            document.getElementById(errorSpanId).remove();
        }
        // if (errorSpan) {
        //         console.log("if errorSpan validé");
        //     document.errorSpan.remove()
        // }
        requiredField.style.border = 'red solid 3px';
        let errorSpan = document.createElement('span');
        errorSpan.setAttribute('id', errorSpanId);
        errorSpan.textContent = errorMessage;
        errorSpan.classList.add('errorSpanStyle');
        requiredField.parentNode.appendChild(errorSpan);
    // }
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

    // //!test
    //         AllInputsValidated = true;


    if (AllInputsValidated) {
        console.log("valeur de  AllInputsValidated : " + AllInputsValidated);

        // Appel de la fonction créant la modale de confirmation
                console.log("Fonction appelée : createRegistrationIsConfirmed");
        createRegistrationIsConfirmed();

    }
}

//****** ECOUTEUR D'EVENEMENT SUR SUBMIT ***************

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