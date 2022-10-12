const inpWidth = document.querySelectorAll(".params")[0];
const inpHeight = document.querySelectorAll(".params")[1];
const createBtn = document.querySelector('#create-btn');
const table = document.querySelector('#table');

createBtn.addEventListener('click', () => {
    let width = inpWidth.value;
    let heigth = inpHeight.value;

    //clear table div
    table.textContent = '';

    //create rows 
    for(let w = 0; w < width; w++) {
        const newRow = document.createElement('tr');
        //create columns in row
        for(let h = 0; h < heigth; h++) {
            const newCell = document.createElement('td');
            newRow.appendChild(newCell);
        }
        table.appendChild(newRow);
    }
    //create event listener for edditing cells
    table.addEventListener('mouseover', (event) => {
        // editCell(event);
        // setColorToCell(event)
        setColorToRow(event);
    });
})

function editCell(event) {
    if(event.target.tagName == "TD") {
        const currentCell = event.target;
        //create input and get value from targeted cell
        const input = document.createElement('input');
        input.value = currentCell.textContent;
        input.classList.add('cell-edit');
        //clear current cell and add input
        currentCell.textContent = '';
        currentCell.appendChild(input);
        //set input text to cell by bluring from input
        input.addEventListener('blur', () => {
            currentCell.textContent = input.value;

        })
        input.focus();
    }
}

function setColorToCell(event) {
    if(event.target.tagName == "TD") {
        const currentCell = event.target;
        currentCell.classList.toggle('green');
    }
}
function setColorToRow(event) {
    if(event.target.tagName == "TD") {
        const currentRow = event.target.parentNode;
        // console.log(currentRow);
        for(let cell of currentRow.children) {
            // console.log(cell);
            cell.classList.toggle('green');
        }
    }
}
