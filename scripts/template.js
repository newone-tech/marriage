let myImgs = [
    "./assets/img/Almorzando.jpg",
    "./assets/img/Banios_1.jpg",
    "./assets/img/Banios_2.jpg",
    "./assets/img/Conejos.jpg",
    "./assets/img/Cuadron.jpg",
    "./assets/img/Fiestas_Pillaro.jpg",
    "./assets/img/Inicios.jpeg",
    "./assets/img/Manabi_0.jpeg",
    "./assets/img/Manabi_1.jpg",
    "./assets/img/Manabi_2.jpg",
    "./assets/img/Manabi_4.jpg",
    "./assets/img/Manabi_5.jpg",
    "./assets/img/Manabi_6.jpg",
    "./assets/img/Mindo_1.jpg",
    "./assets/img/Primer_desayuno.jpeg",
    "./assets/img/Compromiso.jpg",
    "./assets/img/Vangoh_1.jpg",
    "./assets/img/Vangoh_2.jpeg",
    "./assets/img/Vangoh_3.jpeg",
    "./assets/img/Vangoh_4.jpeg",
    "./assets/img/Vangoh_5.jpeg",
    "./assets/img/Vangoh_6.jpeg",
    "./assets/img/XD.jpeg"
];

// "includes/header.html"
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

//For Mobile Navigation Menu
function myFunction() {
    var x = document.getElementById("myLinks");
    
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    } 
    
  }