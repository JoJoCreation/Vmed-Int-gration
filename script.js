// <!-- Mon Code JavaScript -->

// Défilement des images !

// Sélectionner toutes les images du carrousel
const slides = document.querySelectorAll(".carousel-slide");
let currentSlide = 0;

// Afficher la première image
slides[currentSlide].classList.add("active");

// Fonction pour passer à l'image suivante
function nextSlide() {
  slides[currentSlide].classList.remove("active"); // Retirer l'image active
  currentSlide = (currentSlide + 1) % slides.length; // Passer à l'image suivante
  slides[currentSlide].classList.add("active"); // Ajouter la classe active à la nouvelle image
}

// Fonction pour revenir à l'image précédente
function previousSlide() {
  slides[currentSlide].classList.remove("active"); // Retirer l'image active
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Passer à l'image précédente
  slides[currentSlide].classList.add("active"); // Ajouter la classe active à la nouvelle image
}

// Script pour l'accordéon
var accordions = document.querySelectorAll(".accordion");

accordions.forEach(function (accordion) {
  accordion.addEventListener("click", function () {
    this.classList.toggle("active"); // Ajoute ou enlève la classe active

    var panel = this.nextElementSibling;

    // Si le panneau est ouvert, on le cache, sinon on l'affiche
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
