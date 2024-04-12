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
