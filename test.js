// let hundreds = {1:'сто',
// 	2:'двести',
// 	3:'триста',
// 	4:'четыреста',
// 	5:'пятьсот',
// 	6:'шестьсот',
// 	7:'семьсот',
// 	8:'восемьсот',
// 	9:'девятьсот'};
// let tens = {1:'десять',
// 	2:'двадцать',
// 	3:'тридцать',
// 	4:'сорок',
// 	5:'пятьдесят',
// 	6:'шестьдесят',
// 	7:'семьдесят',
// 	8:'восемьдесят',
// 	9:'девяносто'};
// let ones = {1:'один',
// 	2:'два',
// 	3:'три',
// 	4:'четыре',
// 	5:'пять',
// 	6:'шесть',
// 	7:'семь',
// 	8:'восемь',
// 	9:'девять'};

// function getNumGrades(number) {
// 	return String(number).length;
// }

// function changeDigitToWord(digit, wordsArr) {
// 	if (String(digit).length > 1) return console.log('error with number');

// 	return wordsArr[digit] + ' ';
// }

// function numberToWords(number) {
// 	let grade = getNumGrades(number);
// 	let result = '';
// 	// switch(grade) {
// 	// 	case '1': 
// 	// 		return result = changeDigitToWord(number, ones);
// 	// 	case '2':
// 	// 		result += changeDigitToWord(String(number).charAt(0), tens);
// 	// 		result += changeDigitToWord(String(number).charAt(1), ones);
// 	// 		return result;
// 	// 	case '3':
// 	// 		result += changeDigitToWord(String(number).charAt(2), hundreds);	
// 	// 		result += changeDigitToWord(String(number).charAt(0), tens);
// 	// 		result += changeDigitToWord(String(number).charAt(1), ones);
// 	// 		return result;
// 	// 	default: console.log('error changing number to word');
// 	// }

// 	if (grade == 1) {
// 		return result += changeDigitToWord(number, ones);
// 	} else if (grade == 2) {
// 		result += changeDigitToWord(String(number).charAt(0), tens);
// 		result += changeDigitToWord(String(number).charAt(1), ones);
// 		return result;
// 	} else if (grade == 3) {
// 		result += changeDigitToWord(String(number).charAt(0), hundreds);	
// 		result += changeDigitToWord(String(number).charAt(1), tens);
// 		result += changeDigitToWord(String(number).charAt(2), ones);
// 		return result;
// 	} else {
// 		console.log('error changing number to word');
// 	}
// }

// console.log(numberToWords(982));
// // console.log(numberToWords);
let str = 'str';

(function() {
	console.log(1);
})();