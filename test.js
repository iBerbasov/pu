const div = document.querySelector('#elem');

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9, 10 , 11 , 'sds']];
let table = createTableByArr(arr);

div.appendChild(table);

function createTableByArr(array) {
    const table = document.createElement('table');

    for(let row of array) {
        const newRow = document.createElement('tr');
        for(let cellData of row) {
            const newCell = document.createElement('td');
            newCell.textContent = cellData;
            newRow.appendChild(newCell);
        }
        table.appendChild(newRow);
    }

    return table;
}