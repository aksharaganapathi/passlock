const result = document.getElementById('password');
const length = document.getElementById('length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generate = document.getElementById('generate');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

generate.addEventListener('click', () => {
	createPassword();
})

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

document.getElementById("length").oninput = function() {
    let val = document.getElementById("length").value //gets the oninput value
   	document.getElementById('val').innerText = val
};

document.getElementById("copy").addEventListener("click", function(){
	let copyText = document.getElementById("password");
	let temp = document.createElement("textarea");
	document.body.appendChild(temp);
	temp.value= copyText.innerText

	if(temp.value === ""){
		alert("Nothing to copy");
		temp.remove();
		return;
	}

	temp.select();
	document.execCommand("copy");
	temp.remove();
	alert("Copied Password!");
});

function createPassword(){
	const tempLength = parseInt(length.value);
	const hasLower = lowercase.checked;
	const hasUpper = uppercase.checked;
	const hasNumber = numbers.checked;
	const hasSymbol = symbols.checked;
	
	result.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, tempLength);
};

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	if(typesCount === 0) {
		return '';
	}
	
	for (let i = 0; i < length; i++) {
		const rand = Math.floor(Math.random() * typesArr.length);
		generatedPassword += randomFunc[Object.keys(typesArr[rand])[0]]();
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
};

createPassword();