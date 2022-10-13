const inputs = document.querySelectorAll('.data-input');
const getBtn = document.querySelector('#get-users');
const addBtn = document.querySelector('#add-user');

getBtn.addEventListener('click', () => {
    let users = localStorage.getItem('users')
    let arr = JSON.parse(users);
    arr.forEach(element => {
        console.log(`Name: ${element.name} Surname: ${element.surname}`);
    });
})

addBtn.addEventListener('click', () => {
    let newUser = getNewUserArr();
    localStorage.setItem('users', addNewUserToJsonString(newUser))
})

function addNewUserToJsonString(userArr) {
    let users = localStorage.getItem('users')
    let arr = JSON.parse(users);
    arr.push({
        "surname":userArr[0],
        "name":userArr[1],
        "age":userArr[2],
    })
    return JSON.stringify(arr);
}

function getNewUserArr() {
    let surname = inputs[0].value;
    let name = inputs[1].value;
    let age = inputs[2].value;

    return [surname, name, age];
}

