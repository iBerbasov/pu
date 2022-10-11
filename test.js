const widthInput = document.querySelector('#width');
const heightInput = document.querySelector('#height');
const btn = document.querySelector('#create-table');
const inputsBox = document.querySelector('#inputs-wrapper');
const table = document.querySelector('#table');

let employees = [
	{name: 'Igor', age: 30, salary: 400},
	{name: 'Misha', age: 31, salary: 500},
	{name: 'Katya', age: 32, salary: 600},
];

let header1 = document.createElement('th');
header1.textContent="Name";
let header2 = document.createElement('th');
header2.textContent="Age";
let header3 = document.createElement('th');
header3.textContent="Salary";

table.appendChild(header1);
table.appendChild(header2);
table.appendChild(header3);

for(let emp of employees) {
    // console.log(emp.name);
    // console.log(emp.age);
    // console.log(emp.salary);
    const newRow = document.createElement('tr');

    const name = document.createElement('td');
    name.textContent = emp.name;
    const age = document.createElement('td');
    age.textContent = emp.age;
    const salary = document.createElement('td');
    salary.textContent = emp.salary;

    newRow.appendChild(name);
    newRow.appendChild(age);
    newRow.appendChild(salary);

    table.appendChild(newRow);

}

table.addEventListener('click', (event) => {
    if(event.target.tagName == 'TD') {
        alert(event.target.textContent)
    }
});

