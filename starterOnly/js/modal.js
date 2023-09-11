

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
 


// création de la modale de confirmation d'inscription
// function createRegistrationConfirmedModal(){
//   // corps de la modale
//   const modalBody = document.querySelector('.modal-body');
//   const modalBody = document.querySelector('.modal-body');
//   modalBody.innerHTML = '<h3>Merci pour <br> votre inscription</h3>';
//   modalBody.style.minHeight = '850px';
//   modalBody.style.textAlign = 'center';
//   modalBody.style.display = 'flex';
//   modalBody.style.flexDirection = 'column';
//   modalBody.style.justifyContent = "center";
//   modalBody.style.alignItems = "center";

//   // bouton de fermeture
//   const confirmationCloseBtn = document.createElement('button');
//   confirmationCloseBtn.textContent = "Fermer";
//   confirmationCloseBtn.classList.add('btn-submit');
//   confirmationCloseBtn.classList.add('button');
//   confirmationCloseBtn.style.position = 'absolute';
//   confirmationCloseBtn.style.bottom = '25px';    
//   modalBody.appendChild(confirmationCloseBtn); 
//   confirmationCloseBtn.addEventListener('click', closeModal);
// }