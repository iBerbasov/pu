const btn = document.querySelector('#get-users');
const btn2 = document.querySelector('#add-user');
const data = document.querySelector('#date-inp')

btn.addEventListener('click', () => {
    console.log(data.value);
    console.log('new version');
})

btn2.addEventListener('click', () => {
    let now = new Date();
    console.log(now);
    data.value = now;
    
})
