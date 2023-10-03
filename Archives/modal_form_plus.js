
// ! séparation du js  et du Html → event listener plutôt que onclick
// const burgerIcon = document.getElementById('burgerIcon');
// burgerIcon.addEventListener("click", editNav);



// function editNav() {
//   //! var x = document.getElementById("myTopnav"); + renommage de x en myTopNav
//   let nav = document.getElementById("nav");
//   if (nav.className === "nav") {
//     nav.className += " responsive";
//   } else {
//     nav.className = "nav";
//   }
// }

// Affichage du menu burger, et le changement d'icône au clic
iconsBox.addEventListener('click', ()=>{
  navLinksBox.classList.toggle('active');
  iconsBox.classList.toggle('active');
})

//********************************************************* */
//** Variables ciblant les Elements DOM
//********************************************************* */
const modalbg = document.querySelector(".bground");
const modalBtns = document.querySelectorAll(".modal-btn");
  console.log(modalBtns)
// const formData = document.querySelectorAll('[data-jsSelector="formData"]');
// Ajouté - DOM 
const closeModalSpan = document.querySelector(".close");

// launch modal form 
modalBtns.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
  form.querySelector('.btn-submit').setAttribute("disabled", "");
  requiredFieldsInspection();
  radioBtnInspection()
  
}

// close modal
closeModalSpan.addEventListener("click" , closeModal);  // fonction closemodal utilisée pour les croix de fermeture et pour le bouton fermer du message de validation
function closeModal() {
  modalbg.style.display = "none";
}
