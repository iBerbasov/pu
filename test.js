let elem = document.querySelector('button');

elem.addEventListener('click', function(event) {
	console.log(event.code);
    if(event.altKey) {
        console.log('alt down');
    }
    if(event.shiftKey) {
        console.log('shift down');
    }
    if(event.ctrlKey) {
        console.log('ctrl down');
    }
});