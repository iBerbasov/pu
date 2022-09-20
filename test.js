const button = document.querySelector('#button');
button.addEventListener('click', clearParags);

function clearParags() {
    let parags = document.querySelectorAll('.parag');
    parags.forEach(element => {
        element.textContent = "Cleared text";
    });
}