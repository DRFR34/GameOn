

function editNav() {
  // var x = document.getElementById("myTopnav");
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//********************************************************* */
//** Variables ciblant les Elements DOM
//********************************************************* */
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
  console.log(modalBtn)
const formData = document.querySelectorAll(".formData");
// Ajouté - DOM 
const closeModalSpan = document.querySelector(".close")

//






// form.addEventListener('submit', (event) =>{
//   console.log("event : " + event);
//   event.preventDefault();  // Empêcher la soumission du formulaire tant que toutes les conditions ne sont pas réunies.
//   requiredFieldsList.forEach ((requiredField) => {  // la boucle parcours la liste des champs requis, si l'un des champs est non valide, renvoie false, change leur style
//     console.log( "requiredField : Id = " + requiredField.id + " isValidate : " + requiredField.validateField);
    
//     if(! (requiredField)){
//         // if(1 > 0){
//       AllFieldsAreValid = false;
//       console.log( "AllFieldsAreValid : " + AllFieldsAreValid); // true | false
//       requiredField.style.border = "yellow 4px solid";
//       return AllFieldsAreValid ;
//     }
//   })
// })



// launch modal event
// launch modal form 
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  modalbg.style.display = "block";
}

// Ajouté - close modal
closeModalSpan.addEventListener("click" , closeModal);  // fonction closemodal utilisée pour les croix de fermeture et pour le bouton fermer du message de validation
function closeModal() {
  modalbg.style.display = "none";
}
 


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

