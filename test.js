const input = document.getElementById('inp');
const button = document.getElementById('btn');
const hint = document.querySelector('.hint');

input.addEventListener('input', function() {
    console.log(this.value.length);
    this.classList = '';
    if(this.value.length <= 5) {
        hint.textContent = (5 - this.value.length) + " chars left";
        this.classList.add('right');
    } else {
        hint.textContent = (this.value.length - 5) + " chars exceeded";
        this.classList.add('wrong');
    }
})

button.addEventListener('click', () => {
    input.focus();
})