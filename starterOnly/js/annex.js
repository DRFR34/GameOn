






//******************************** 
// Récupération des boutons radio
//******************************** 

// const locationButtonsList = document.querySelectorAll('input[name = "location"]');
//         console.log("locationButtonsList :" + locationButtonsList);
//         console.log(document.querySelectorAll('input[name = "location"]'));
// let locationBtn = "";
// for (let i = 0 ; i< locationButtonsList.length; i++) {
//     if (locationButtonsList[i].checked) {
//         locationBtn = locationButtonsList[i].value;
//        console.log("locationBtn :" + locationBtn.value)
//     }
// }


//******************************** 
// Récupération case à cocher
//******************************** 
//  let checkboxCondition1 = document.getElementById('checkboxCondition1');
//  let checkboxCondition1Status = checkboxCondition1.checked;
//  console.log("checkboxCondition1Status :" +  checkboxCondition1Status);
//  checkboxCondition1.addEventListener('click', ()=> {
//     console.log("checkboxCondition1Status :" +  checkboxCondition1Status);
//     console.log("checkboxCondition1 est coché" );
//     console.log(checkboxCondition1.checked)
//  })



 //******************************** 
// Récupération des imput required
//******************************** 
// let requiredFieldsList = form.querySelectorAll("input[required]"); // retourne la NodeList de tous les inputs requis
//     console.log( "requiredFieldsList : " + requiredFieldsList); // node list
// let AllFieldsAreValid = true; // valeur true si tous les champs sont valides
//     console.log( "AllFieldsAreValid : " + AllFieldsAreValid)


// Déclaration d'une variable booléenne  de vérification des inputs requis (sauf boutons radio) → Boolean.




// créer une collection de tous les champs requis  → Nodelist
// let requiredInputsList = document.querySelectorAll('input[required]');
//     console.log("liste des inputs required : ");
//     console.log(requiredInputsList);


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
	
	
	
//** Validation des inputs



//* input first (prénom)

// const first= document.getElementById('first');

// Regex
// let nameFieldsRegex = /[a-zA-Z]/; 

// conditions de validation
// function firstRegexCtrl() {
  
//   if (first.value.match(nameFieldsRegex)) {
//     return true;   
//   }else {
//     return false;   
//   }
// }


// console.log( "firstRegexCtrl:" + firstRegexCtrl())  ;
 

// // Listener'SUBMIT' du formulaire
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
// cslg(e);
// console.log("valeur de e" + e );

  
// message de validation 

// if(isValidForm()) faire une boucle
//switch case tableau erreur avec valeur objet code erreur  => message par code erreur

//  const errors = [ {code: 'name', message: 'veuillez entrer un prénom'} ] // objet  + refaire une variable pour nom et prénom


//  getErrorMessage(errorCode) { 
//   return errors.find(o => o.code === errorCode);
// }


// déclaration fonction

// objet de type 
// [
// {selecteurDuChamp: "" , etatDuChamp:"" }  
// {selecteurDuChamp: "" , etatDuChamp:"" }   
// ]
/*******
 * Message de confirmation si les controles sont ok
 *********/





    
  // ! retirer la span si présente
  //!     if (document.getElementById('myspan')){
  // !      document.getElementById('myspan').remove();

  //     }
    // // si les RegEx ne sont pas respectées => apparition du texte d'erreur
    // const firstDivContainer = document.querySelector('.firstDivContainer');
    // // const child = firstDivContainer.lastElementChild;
    
    // const firstErrorSpan = document.createElement('span');
    // firstErrorSpan.setAttribute('id', 'myspan')
    // firstErrorSpan.textContent = "Veuillez entrer au moins deux caractères";
    // firstErrorSpan.classList.add('errorSpanStyle');
   
    // firstDivContainer.appendChild(firstErrorSpan);

//   }
  
// });

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
	
	
// let todayDate = Date()	;
// console.log("Aujourd'hui : " + todayDate);
// let birthdate = document.getElementById('birthdate').value ;
// console.log("birthdate : " + " type : " + typeof(birthdate) + "valeur de birthdate : " + birthdate );
	
	
// ===========================================
//! création d'un objet regroupant les valeurs des champs
// let registeredParticipant = {
// 	firstName : "",
// 	lastName : "",
// 	email : "",
// 	birthDate : "",
// 	quantity : "",
// 	location : "",
// 	checkboxTermsOfUse : "",
// 	checkboxOptin : ""
// };