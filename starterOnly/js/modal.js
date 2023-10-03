//****** Variables ciblant les Elements DOM ******/

const modalbg = document.querySelector(".bground");
const modalBtns = document.querySelectorAll(".modal-btn");
const closeModalSpan = document.querySelector(".close");


//****** Fonctions ******/

//***  fct d'ouverture de la modale

// cible = croix de fermeture et  bouton fermer du message de validation
modalBtns.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  modalbg.style.display = "block";
}

//*** fct closemodal utilisée pour les croix de fermeture et pour le bouton fermer du message de validation

// cible = croix de fermeture et  bouton fermer du message de validation
closeModalSpan.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
}

//*** fct d'ouverture / fermeture du menu burger - listener plutôt que onclick

// cible = conteneur des icônes du menu burger (ajout/supression d'une classe au clic → display none / block)
iconsBox.addEventListener('click', () => {
  navLinksBox.classList.toggle('active');
  iconsBox.classList.toggle('active');
});