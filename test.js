
function challenge (number) {
    if(String(number).length <= 1) {
        // console.log(number + '!');
        return number;
    } else {
        let arr = [...String(number)];
        const sum = arr.reduce((partialSum, a ) => partialSum + Number(a), 0);
        // console.log(sum);
        console.log('inside ' + sum);
        return challenge(sum);
    }
}
console.log(challenge(249857232342345428978));