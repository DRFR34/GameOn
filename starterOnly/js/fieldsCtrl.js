// Listener'SUBMIT' du formulaire
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//   console.log("valeur de e" + e );


// })


// form.addEventListener('submit', (event) =>{
//     console.log("event : " + event);
//     event.preventDefault();  // Empêcher la soumission du formulaire tant que toutes les conditions ne sont pas réunies.
//     requiredFieldsList.forEach ((requiredField) => {  // la boucle parcours la liste des champs requis, si l'un des champs est non valide, renvoie false, change leur style
//       console.log( "requiredField : Id = " + requiredField.id + " isValidate : " + requiredField.validateField);
      
//       if(! (requiredField)){
//           // if(1 > 0){
//         AllFieldsAreValid = false;
//         console.log( "AllFieldsAreValid : " + AllFieldsAreValid); // true | false
//         requiredField.style.border = "yellow 4px solid";
//         return AllFieldsAreValid ;
//       }
//     })
//   })


//****** DECALARATION DES VARIABLES ***************

// Variable (boolean)  de vérification globale - initialisation à true
let requiredInputsValidated = true;
        console.log("requiredInputsValidated : " + requiredInputsValidated);

// Variable (boolean) de vérification des boutons radio - initialisation à false
let radioBtnValidated = false;

// Variable (boolean) de validation globale des inputs
let AllInputsValidated = radioBtnValidated && requiredInputsValidated;


//****** DEFINITION DES REGEX ***************


const nameFieldsRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ-]{2,}/;
const emailFieldRegex = /^[\w_-]+@[\w-]+\.[a-z]{2,4}$/;
const birthdateFieldRegex = /[]/;
const quantityFieldRegex = /[0-9]/;


//****** DECALARATION DES FONCTIONS ***************

// Fonction testant les champs requis, sauf boutons radio
function requiredFieldsInspection (){

    // Trouver les inputs avec l'attribut required → NodeList
    const requiredFieldsList = document.querySelectorAll ( 'input[required]');
    console.log("requiredFieldsList :" + requiredFieldsList);
    console.log(requiredFieldsList);

    // Faire un switch de vérification pour chaque type de champ
    requiredFieldsList.forEach ((requiredField) => {
        requiredField.addEventListener ("input", (e) => {  // écouteur d'évènement
        switch (e.target.id) { // choisir selon l'identifiant
            case "first" || "last" :  //dans le cas où l'input est de type texte, alors :
                if (!e.target.value.match(nameFieldsRegex)) { // si valeur ne correspond pas à la regex nameFieldsRegex
                    requiredInputsValidated = false; // la valeur de la variable requiredInputsValidated devient 'false'
                    requiredFieldErrorIndication (e.target, firstErrorSpan,"Veuillez saisir au moins deux caractères"); // appeler la fonction pour indiquer l'erreur, avec le paramètre " Veuillez entrer au moins deux caractères"
                }
                break;
            case "email":
                if (!e.target.value.match(emailFieldRegex)) {
                    requiredInputsValidated = false;
                    requiredFieldErrorIndication (e.target, emailErrorSpan,"Veuillez saisir une adresse e-mail valide");
                }
        
        case "birthdate" :
                if (e.target.value === '') {
                    requiredInputsValidated = false;
                    requiredFieldErrorIndication (e.target, birthdateErrorSpan,"Veuillez saisir votre date de naissance");
                }  
                break; 
        
            case "quantity" :
                if (e.target.value < 0 || e.target.value> 20) {
                    requiredInputsValidated = false;
                    requiredFieldErrorIndication (e.target, quantityErrorSpan,"Veuillez saisir un nombre compris entre 0 et 20");
                }
            break;

            case "checkboxCondition1" :
                if (!e.target.value) {
                    requiredInputsValidated = false;
                    requiredFieldErrorIndication (e.target, checkboxCondition1ErrorSpan,"Veuillez accepter les conditions d'utilisations");
                }
            }
            return requiredInputsValidated;
        });       
        
    }) ;
}

//fonction permettant la validation des boutons radio 
function radioBtnInspection() {
    const locationButtonsList = document.querySelectorAll('input[name = "location"]');
            console.log("locationButtonsList :" + locationButtonsList);
            console.log(locationButtonsList);
    let locationBtn = "";
    for (let i = 0 ; i< locationButtonsList.length; i++) {
        if (locationButtonsList[i].checked) {
            locationBtn = locationButtonsList[i].value;
        console.log("locationBtn :" + locationBtn)
        }
    }
}

// fonction permettant l'encadré rouge du champ en erreur et du message d'erreur correspondant     
function requiredFieldErrorIndication (currentEle, idName, errorMessage){

    alert(message);
    if (document.getElementById(idName)){
        document.getElementById(idName).remove();
    }
    currentEle.style.border = 'red solid 3px';
    let errorSpan = document.createElement('span');
    errorSpan.setAttribute('id', idName);
    errorSpan.textContent = errorMessage;
    errorSpan.classList.add('errorSpanStyle');
    currentEle.nextSibling(errorSpan);
}

// fonction d'affichage de la confirmation d'inscription, si tous les champs sont ok
function launchRegistrationConfirmed() {
	if (AllInputsValidated) {
		    console.log ("valeur AllInputsValidated : " + AllInputsValidated);

        // Appel de la fonction créant la modele de confirmation
        createRegistrationConfirmedModal();
	}
}


//****** ECOUTEUR D'EVENEMENT SUR SUBMIT ***************

form.addEventListener('submit', (e) => {
    e.preventDefault();
        console.log("valeur de e" + e );
    // Appel de requiredFieldsInspection
    requiredFieldsInspection();

    // Appel de radioBtnInspection
    radioBtnInspection();

    // Appel de launchRegistrationConfirmed
    launchRegistrationConfirmed();

    

});

 





//******************************** 
// Récupération case à cocher
//******************************** 
//  let checkboxCondition1 = document.getElementById('checkboxCondition1');
//  let conditionsAccepted = checkboxCondition1.checked;
//  console.log("conditionsAccepted :" +  conditionsAccepted);
//  checkboxCondition1.addEventListener('click', () => {
//     console.log("checkboxCondition1Status :" +  checkboxCondition1Status);
//     console.log("checkboxCondition1 est coché");
//     console.log(checkboxCondition1.checked)
//  })




// Pseudo code 
    //   Ecouter le clic sur btn submit
	// empêcher le rechargement de la page  - prévenir le comportement par défault
	// event.preventDefault();
	//si click {
		// reset de requiredInputsCtrl à la valeur true
		// pour chaque élément de la liste des champs requis {
	// 		vérifNomChamp ( ) 
	// 			{
	// 				nomChamp
	// 				let nomChampRegex = 
	// 				let nomChamp = 
	// 				ajouter 
	// 				supprimer la span si elle existe ( evite  les accumulations de message  si plusieurs submit  avec erreurs
	// 				si (valeur nomChamp ne correspond pas à la nomChampRegex ) 
	// 					{
	// 					mettre requiredInputsVerif = false
	// 					Function errorMessage (nomChamp) {
	// 						ajouter style bordure
	// 						ajouter une span
	// 						ajouter style span 
	// 						ajouter le texte nomChampErrorTxt
	// 						}
	// 					}
	// 			}
			
	// }
	
	
	
	
	
	
	
	
	
	



// fonction d'affichage de la confirmation d'inscription, si tous les champs sont ok
function launchRegistrationConfirmed() {
	if (AllInputsValidated) {
		console.log ("valeur AllInputsValidated : " + AllInputsValidated);
        createRegistredModal();
	}
}
