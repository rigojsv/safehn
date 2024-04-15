/*Menu*/ 

function onDocumentLoaded(){
    const menuHamburguesa = document.querySelector("header .hamburger");
    menuHamburguesa.addEventListener("click", menuToggle );
}

function menuToggle(){
    const navMenu = document.querySelector("header nav");
    navMenu.classList.toggle('hide');
}
document.addEventListener("DOMContentLoaded", onDocumentLoaded);


/*Faq*/

function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');
    
   
    if (answer.style.display === "none") {
        answer.style.display = "block";
        element.classList.add("active");
    } else {
        answer.style.display = "none";
        element.classList.remove("active");
    }
}
