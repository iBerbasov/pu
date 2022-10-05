const div = document.querySelector('div');
const p = document.querySelector('p');

div.addEventListener('click', function(event) {
    let elem = event.target;
    if(elem.tagName === 'LI'){
        elem.textContent += "!";
    } else if (elem.tagName === 'UL') {
        let newRow = elem.children[0].cloneNode(true);
        newRow.textContent = elem.children.length + 1;
        elem.append(newRow);
    } else {
        console.log('div click');
    }
})
