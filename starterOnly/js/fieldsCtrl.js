

// variable pour test
let testCases = false;

//****** DECLARATION DES VARIABLES ***************

// Variable (boolean)  de vérification des inputs requis - initialisation à true - si un ou plus champs en erruer, passe à false.
let requiredInputsValidated = true;
console.log("requiredInputsValidated : " + requiredInputsValidated);

// Variable (boolean) de vérification des boutons radio - initialisation à false
let radioBtnValidated = false;
console.log("radioBtnValidated : " + radioBtnValidated);

// Variable (boolean) de validation globale des inputs → si true la confirmation d'inscription peur s'afficher
let AllInputsValidated = false;
console.log("AllInputsValidated : " + AllInputsValidated);

//!test
// let todayDate = Date()	;
// console.log("Aujourd'hui : " + todayDate);
// let birthdate = document.getElementById('birthdate').value ;

let birthdate = document.getElementById('birthdate') ;
console.log("birthdate : " + " type : " + typeof(birthdate) + " ; valeur de birthdate : " + birthdate );





//****** DEFINITION DES REGEX ***************


const nameFieldsRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ-]{2,}/;
const emailFieldRegex = /^[\w_-]+@[\w-]+\.[a-z]{2,4}$/;
// verification de la date de naissance par rapport au indication dans le html
//const birthdateIsValid = (birthdate.value<birthdate.min || birthdate.value>birthdate.max);
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
                resetfieldErrorIndication(requiredField, errorSpanId);

                // si valeur ne correspond pas à la regex nameFieldsRegex
                        console.log("Prénom -  ne correspond pas à regex : " + (!requiredField.value.match(nameFieldsRegex)));
                if (!requiredField.value.match(nameFieldsRegex)) { 
                // if (testCases) {        
                    // la valeur de la variable requiredInputsValidated devient 'false'
                    requiredInputsValidated = false; 

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Votre prénom doit comporter au moins deux lettres"); 
                }
                break;

            case "last":  // id ="last"

                errorSpanId = 'lastErrorSpan';
                        console.log(errorSpanId);
                        console.log( "requiredField.value pour last : " + requiredField.value);
                        
                        
                //  suppression des indications d'erreurs éventuelles crées lors d'un précédent submit
                resetfieldErrorIndication(requiredField, errorSpanId);

                // si valeur ne correspond pas à la regex nameFieldsRegex
                        console.log("Nom - correspondance avec la regex : " + (!requiredField.value.match(nameFieldsRegex)));

                if (!requiredField.value.match(nameFieldsRegex)) { 
                        // if (testCases) {    

                    // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                    requiredInputsValidated = false; 

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Votre nom doit comporter au moins deux lettres"); 
                }
                break;

            case "email": // id ="email"

                        // console.log("requiredField.innerText " + requiredField.data);
                        // console.log("requiredField.id " + requiredField.id);

                errorSpanId = 'emailErrorSpan';
                        console.log(errorSpanId);
                        console.log( "requiredField.value pour email : " + requiredField.value);

                // suppression des indications d'erreurs éventuelles crées lors d'un précédent submit
                resetfieldErrorIndication(requiredField, errorSpanId);

                // si valeur ne correspond pas à la regex nameFieldsRegex

                if (!requiredField.value.match(emailFieldRegex)) {
                // if (requiredField.innerText === emailFieldRegex) {

                    // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                    requiredInputsValidated = false;

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir une adresse e-mail valide");
                }
                break;

            case "birthdate":
                        console.log("birthdate :  " + requiredField.value);
                        console.log(requiredField);
                        
                errorSpanId = 'birthdateErrorSpan';
                        console.log(errorSpanId);
                        console.log( "requiredField.value pour birthdate : " + requiredField.value);
                        console.log( requiredField.value);


                // suppression des indications d'erreurs éventuelles crées lors d'un précédent submit
                resetfieldErrorIndication(requiredField, errorSpanId);
                        console.log("birthdate.min : " , birthdate.min);
                        console.log("birthdate.max  : ", birthdate.max  );

                // détermination de l'âge selon la date de naissance → majorité                
                let diffDates = Date.now() - requiredField.valueAsNumber;
                        console.log("diff :" , diffDates);
                // conversion des ms en années, arrondi à l'entier inférieur       
                let userAge = Math.floor (diffDates / 31556952000); //           
                        console.log( "userAge : ", userAge);

                // utilisateur mineur
                if (userAge < 18) { 
                // if (!birthdateIsValid) {
                // if (testCases) {

                    // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                    requiredInputsValidated = false;

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Nous sommes désolés, vous devez être majeur(e) pour participer");
                }

                // aucune date saisie
                if (requiredField.value === "") { 
                // if (!birthdateIsValid) {
                // if (testCases) {

                    // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                    requiredInputsValidated = false;

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir votre date de naissance");
                }

                // date saisie trop ancienne
                if (requiredField.value < birthdate.min && requiredField.value !== "") { 
                // if (!birthdateIsValid) {
                // if (testCases) {

                    // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                    requiredInputsValidated = false;

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Cette date est trop ancienne, merci de la corriger");
                }

                break;

            case "quantity":
                errorSpanId = 'quantityErrorSpan';
                        console.log( "quantity errorSpanId : " + errorSpanId);
                        console.log( "requiredField.value pour quantity : " + requiredField.value);


                // suppression des indications d'erreurs éventuelles crées lors d'un précédent submit
                resetfieldErrorIndication(requiredField, errorSpanId);
                
                if (!requiredField.value.match(quantityFieldRegex) && (requiredField.value ==='' || requiredField.value< 0 || requiredField.value > 50)) {
                    // if (testCases) {
                            // console.log("quantity - test du if : " + (requiredField.value ==='' || requiredField.value< 0 || requiredField.value > 50));

                    // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                    requiredInputsValidated = false;

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir un nombre compris entre 0 et 20");
                }
                break;

            case "checkboxTermsOfUse":
                errorSpanId = 'checkboxTermsOfUseErrorSpan';
                        console.log(errorSpanId);
                        console.log( "requiredField.value pour checkbox1 : " + requiredField.value);

                // suppression des indications d'erreurs éventuelles crées lors d'un précédent submit
                resetfieldErrorIndication(requiredField, errorSpanId);

                if (!requiredField.checked) {
                    // if (testCases) {

                    // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                    requiredInputsValidated = false;

                    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                    requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez accepter les conditions d'utilisations");
                }
                break;

            // default: // utile ?
            //     null;

        }

        return requiredInputsValidated;


    });
    console.log("requiredInputsValidated en fin de requiredFieldsInspection() :" + requiredInputsValidated);
    
}

//fonction permettant la validation des boutons radio 
function radioBtnInspection() {
        console.log("Fonction appelée : radioBtnInspection");
        radioBtnValidated = false;
    const locationButtonsList = document.querySelectorAll('input[name="location"]');
        console.log("locationButtonsList :" + locationButtonsList);
        console.log(locationButtonsList);
        requiredField = document.getElementById('location1');
        errorSpanId = "location1ErrorSpan";
        errorMessage = "Veuillez sélectionner un lieu";
        resetfieldErrorIndication(requiredField, errorSpanId);
    for (let i = 0; i < locationButtonsList.length; i++) {
        if (locationButtonsList[i].checked) {
            
            // la valeur de la variable  radioBtnValidated devient 'true' → permet l'affichage du message d'inscription
            radioBtnValidated = true;

            // arrêt au premier bouton trouvé  
            break;       
        }
    }
        console.log("état des variables en fin d'inspection des btn radio : ");
        console.log("radioBtnValidated : " + radioBtnValidated);
        console.log( "AllInputsValidated : " + AllInputsValidated);
    // si aucun bouton n'est coché → affichage du message d'erreur        
    if (!radioBtnValidated) {
            console.log("Boutons radio - aucun n'est coché : " + !radioBtnValidated );
        
            // un seul bouton suffira pour sélectionner le parent
        // requiredField = document.getElementById('location1');
        // errorSpanId = "location1ErrorSpan";
        // errorMessage = "Veuillez sélectionner un lieu";

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

    // sélection du corps de la modale
    let modalBody = document.querySelector('.modal-body');
    
    // supression des éléments précédents du fromulaire
    let form = document.getElementById('form')
    console.log(form);
    modalBody.removeChild(form)
    
    
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
            console.log("fonction appelée : resetfieldErrorIndication");
    requiredField.style.border = 'none';
            console.log("requiredField : " + requiredField);
            console.log("requiredField.style.border" + requiredField.style.border);
    
            console.log("errorSpanId dans fct reset : ");
            console.log(errorSpanId);
    document.getElementById(errorSpanId);
            console.log("document.getElementById(errorSpanId)");
            console.log(document.getElementById(errorSpanId));
    if (document.getElementById(errorSpanId)) {
        document.getElementById(errorSpanId).remove();

    }
}

// fonction d'affichage de la confirmation d'inscription, si tous les champs sont ok
function launchRegistrationConfirmation() {
        console.log("Fonction appelée : launchRegistrationConfirmation");

    // //!test
        //         AllInputsValidated = true;
    AllInputsValidated = radioBtnValidated && requiredInputsValidated;

    if (AllInputsValidated) {
        console.log("valeur de  AllInputsValidated : " + AllInputsValidated);

        // suppression des éléments de la modale

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