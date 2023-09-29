





// variable pour test
    //let testCases = false;

//****** DECLARATION DES VARIABLES ***************

// Variable (boolean)  de vérification des inputs requis - initialisation à true - si un ou plus champs en erruer, passe à false.
let requiredInputsValidated = true;
console.log("requiredInputsValidated : " + requiredInputsValidated);

// Variable (boolean) de vérification des boutons radio - initialisation à false
let radioBtnValidated = 0;
console.log("radioBtnValidated : " , radioBtnValidated);



// variable récupérant la date de naissance
let birthdate = document.getElementById('birthdate') ;
console.log("birthdate : " + " type : " + typeof(birthdate) + " ; valeur de birthdate : " + birthdate );

// variables de validité de chaque champ
let firstIsValid;   
let lastIsValid; 
let emailIsValid; 
let birthdateIsValid; 
let quantityIsValid;
let checkboxTermsOfUseIsVAlid;
let AllInputsValidated = 0; 
// Variable (boolean) de validation globale des inputs → si true la confirmation d'inscription peur s'afficher



//****** DEFINITION DES REGEX ***************

const nameFieldsRegex = /^[a-zA-Z][A-Za-zÀ-ÖØ-öø-ÿ]{1,50}$/;
const emailFieldRegex = /^[a-z][\w-]+@[\w-]+\.[a-z]{2,4}$/;
const quantityFieldRegex = /[0-9]/;


//****** APPEL DES FONCTIONS par défault

// requiredFieldsInspection();
//         console.log("(i)→ firstIsValid : ", firstIsValid);
// btnSubmitActivation()



// launchRegistrationConfirmation();
        console.log( '=>>>>>>>>', AllInputsValidated);






//****** DECLARATION DES FONCTIONS ***************

// Fonction testant les champs requis, sauf les boutons radio
function requiredFieldsInspection() {
            console.log("====== *** Fonction appelée : requiredFieldsInspection");
    
    // variable qui va servir pour créer les  span d'erreurs
    // let errorSpan; 

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
                // écouteur d'évènement sut l'input (blur = à la perte du focus)
                requiredField.addEventListener("blur",(e) => {

                    // suppression des affichages d'erreur créés lors d'une saisie précédente
                    resetfieldErrorIndication(requiredField, errorSpanId);

                    // si valeur ne correspond pas à la regex nameFieldsRegex
                    if (!requiredField.value.match(nameFieldsRegex)) { 
                           
                        // la valeur de la variable requiredInputsValidated devient 0
                                console.log("firstIsValid avant : ", firstIsValid);
                        firstIsValid = 0;  
                                console.log("firstIsValid après : ", firstIsValid);
                                       
                        // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                        requiredFieldErrorIndication(requiredField, errorSpanId, "Votre prénom doit comporter au moins deux lettres"); 
                    } else {
                        // la valeur de la variable requiredInputsValidated devient 1 
                        firstIsValid = 1;
                                console.log("(i)→ firstIsValid après : ", firstIsValid);
                                console.log("(i)→ AllInputsValidated : " + AllInputsValidated);
                        // teste si le bouton submit doit être activé ou pas
                        btnSubmitActivation();
                    }   
                });
                break;

            case "last":  // id ="last"

                errorSpanId = 'lastErrorSpan';
                        console.log(errorSpanId);
                        console.log( "requiredField.value pour last : " + requiredField.value);
                        
                //!f+
                requiredField.addEventListener("blur",(e) => {       
                    // suppression des affichages d'erreur créés lors d'une saisie précédente
                    resetfieldErrorIndication(requiredField, errorSpanId);

                    // si valeur ne correspond pas à la regex nameFieldsRegex
                            console.log("(i)→ Nom - correspond  à la regex : " , (requiredField.value.match(nameFieldsRegex)));

                    if (!requiredField.value.match(nameFieldsRegex)) { 
                            // if (testCases) {    

                        // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                        lastIsValid = 0;
                                console.log("firstIsValid après : ", firstIsValid); 

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
                        console.log(errorSpanId);
                        console.log( "requiredField.value pour email : " + requiredField.value);
               
                // écouteur d'évènement sur l'input (blur = à la perte du focus)
                requiredField.addEventListener("blur",(e) => {

                    // suppression des affichages d'erreur créés lors d'une saisie précédente
                    resetfieldErrorIndication(requiredField, errorSpanId);

                    // si valeur ne correspond pas à la regex nameFieldsRegex
                    if (!requiredField.value.match(emailFieldRegex)) {
                        // la valeur de la variable requiredInputsValidated devient 0
                        emailIsValid = 0;
                                console.log("(i)→ emailIsValid : ", emailIsValid);
                                
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
                        console.log( "requiredField.value pour birthdate : " + requiredField.value);
                        console.log( requiredField.value);

                // écouteur d'évènement sur l'input (blur = à la perte du focus)
                requiredField.addEventListener("blur",(e) => { 

                    // suppression des indications d'erreurs éventuelles crées lors d'un précédent submit
                    resetfieldErrorIndication(requiredField, errorSpanId);
                            console.log("birthdate.min : " , birthdate.min);
                            console.log("birthdate.max  : ", birthdate.max  );

                    // détermination de l'âge selon la date de naissance → majorité                
                    let diffDates = Date.now() - requiredField.valueAsNumber;
                            console.log("diff :" , diffDates);

                    // conversion des ms en années ( 31556952000 ms/an) + arrondi à l'entier inférieur       
                    let userAge = Math.floor (diffDates / 31556952000); //           
                            console.log( "userAge : ", userAge);

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
                    // if (!birthdateIsValid) {
                    // if (testCases) {

                        // la valeur de la variable requiredInputsValidated devient ou reste 'false' → empèche l'affichage du message d'inscription
                        birthdateIsValid = 0;

                        // appel de la fonction affichant l'erreur, avec les paramètres particuliers
                        requiredFieldErrorIndication(requiredField, errorSpanId, "Veuillez saisir votre date de naissance");

                        // teste si le bouton submit doit être activé ou pas
                        btnSubmitActivation();

                    }
                    //date saisie trop ancienne ( en référence à l'attirbut min placé dans la balise HTML de l'input)
                    else if (requiredField.value < birthdate.min && requiredField.value !== "") { 
                    // if (!birthdateIsValid) {
                    // if (testCases) {

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
                        console.log("birthdateIsValid :", birthdateIsValid);
                        // teste si le bouton submit doit être activé ou pas
                        btnSubmitActivation();
                    }
                   
                });
                break;

            case "quantity":
                errorSpanId = 'quantityErrorSpan';
                        console.log( "quantity errorSpanId : " + errorSpanId);
                        console.log( "requiredField.value pour quantity : " + requiredField.value);

                // écouteur d'évènement sur l'input (blur = à la perte du focus)
                requiredField.addEventListener("blur",(e) => {
                    // suppression des indications d'erreurs éventuelles crées lors d'un précédent submit
                    resetfieldErrorIndication(requiredField, errorSpanId);
                    
                            console.log( "MathSign : ", Math.sign(requiredField.value));
                            console.log( "typeof ", typeof requiredField.value);
                    if ( Math.sign(requiredField.value)=== -1 || requiredField.value > 50 || requiredField.value ==="") { 

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
                        console.log(errorSpanId);
                        console.log( "requiredField.value pour checkbox1 : " + requiredField.value);
                
                // écouteur d'évènement sur l'input (blur = à la perte du focus)
                requiredField.addEventListener("change",() => {

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
                        console.log("checkboxTermsOfUseIsVAlid :", checkboxTermsOfUseIsVAlid);
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
        console.log("Fonction appelée : radioBtnInspection");
    radioBtnValidated = 0;
    const locationButtonsList = document.querySelectorAll('input[type=radio][name="location"]');
    locationButtonsList.forEach(locationButton => locationButton.addEventListener('change', () => {
        if (locationButton.value) {
            radioBtnValidated = 1;
            console.log("radioBtnValidated :", radioBtnValidated);
            btnSubmitActivation() 

        }
    }));
    //     console.log("locationButtonsList :" + locationButtonsList);
    //     console.log(locationButtonsList);
    // requiredField = document.getElementById('location1');
    // errorSpanId = "location1ErrorSpan";
    // errorMessage = "Veuillez sélectionner un lieu";
    // resetfieldErrorIndication(requiredField, errorSpanId);
    // for (let i = 0; i < locationButtonsList.length; i++) {
    //     if (locationButtonsList[i].checked) {
            
    //         // la valeur de la variable  radioBtnValidated devient 'true' → permet l'affichage du message d'inscription
    //         radioBtnValidated = 1;

    //         // arrêt au premier bouton trouvé  
    //         break;       
    //     }
    // }
    //     console.log("état des variables en fin d'inspection des btn radio : ");
    //     console.log("radioBtnValidated : " + radioBtnValidated);
    //     console.log( "AllInputsValidated : " + AllInputsValidated);
    // // si aucun bouton n'est coché → affichage du message d'erreur        
    // if (radioBtnValidated === 0) {
    //         console.log("Boutons radio - aucun n'est coché : " + !radioBtnValidated );
        
    //         // un seul bouton suffira pour sélectionner le parent
    //     // requiredField = document.getElementById('location1');
    //     // errorSpanId = "location1ErrorSpan";
    //     // errorMessage = "Veuillez sélectionner un lieu";

    //    // appel de la fonction affichant l'erreur, avec les paramètres particuliers
    //     requiredFieldErrorIndication(requiredField, errorSpanId, errorMessage);
    // } else {

    // }
}

// fonction permettant l'encadré rouge du champ en erreur et du message d'erreur correspondant aux paramètres    
function requiredFieldErrorIndication(requiredField, errorSpanId, errorMessage) {
            console.log("===== *** Fonction appelée : requiredFieldErrorIndication");
    if (document.getElementById(errorSpanId)) {
            console.log("document.getElementById(errorSpanId) dans fct requiredFieldErrorIndication");
            console.log(document.getElementById(errorSpanId.value));
            document.getElementById(errorSpanId).remove();
    }
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
            console.log("====== *** Fonction appelée : createRegistrationIsConfirmed");


    // sélection du corps de la modale
    let modalBody = document.querySelector('.modal-body');

    
    // supression des éléments précédents du formulaire
    const form = document.getElementById('form')
    console.log(form);
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
            console.log("====== *** fonction appelée : resetfieldErrorIndication");
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

//fonction pour réactiver le bouton de soumission
function btnSubmitActivation(){
    AllInputsValidated = firstIsValid * lastIsValid * radioBtnValidated * emailIsValid * birthdateIsValid * quantityIsValid * checkboxTermsOfUseIsVAlid;
            console.log("(i)→ AllInputsValidated : " + AllInputsValidated);
    if(AllInputsValidated) {
            console.log("===== *** BtnSubmitActivation appelée");
        form.querySelector('.btn-submit').removeAttribute("disabled", "");
        form.addEventListener('submit', (e)=>{
            e.preventDefault();
            createRegistrationIsConfirmed();
        });
    } else {
        form.querySelector('.btn-submit').setAttribute("disabled", "");  
    }
}

// fonction d'affichage de la confirmation d'inscription, si tous les champs sont ok
// function launchRegistrationConfirmation() {
//         console.log("====== *** Fonction appelée : launchRegistrationConfirmation");

//     //AllInputsValidated = firstIsValid && lastIsValid && emailIsValid;

   
//         console.log("valeur de  AllInputsValidated : " + AllInputsValidated);

//         // réactivation du bouton de soumission
//         form.querySelector('.btn-submit').removeAttribute("disabled", "");

//         // Appel de la fonction créant la modale de confirmation
//                 console.log("Fonction appelée : createRegistrationIsConfirmed");
//         createRegistrationIsConfirmed();
    
// }




