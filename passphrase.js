const result = document.getElementById('result');
const password = document.getElementById('password');
const generate = document.getElementById('generate');
let symbolChecker = new RegExp('(?=.*[^A-Za-z0-9])')

password.addEventListener("input", () => {
    let passphrase = password.value;
    generatePassphrase(passphrase);
});

const generatePassphrase = (passphrase) => {
    let passArr = passphrase.split("");
    let finalPass = "";
    
    for(let i = 0; i < passArr.length; i++) {
        if(passArr[i] === "6"){
            passArr[i] = "9";
        } else if(passArr[i] === "9"){
            passArr[i] = "6";
        } else if(passArr[i] === "$"){
            passArr[i] = "S";
        } else if(passArr[i] === "S"){
            passArr[i] = "$";
        } else if(passArr[i] === "E"){
            passArr[i] = "3";
        } else if(passArr[i] === "3"){
            passArr[i] = "E";
        } else if(passArr[i] === "D"){
            passArr[i] = "B";
        } else if(passArr[i] === "B"){
            passArr[i] = "D";
        } else if(passArr[i] === "W"){
            passArr[i] = "M";
        } else if(passArr[i] === "M"){
            passArr[i] = "W";
        } else if(passArr[i] === "O"){
            passArr[i] = "0";
        } else if(passArr[i] === "0"){
            passArr[i] = "O";
        } else if(passArr[i] === "a" || passArr[i] === "A"){
            passArr[i] = "@";
        } else if(passArr[i] === "@"){
            let random = Math.random();
            if(random >= 0.5){
                passArr[i] = "A";
            } else {
                passArr[i] = "a";
            }
        } else if(passArr[i] === "d"){
            passArr[i] = "b";
        } else if(passArr[i] === "b"){
            passArr[i] = "d";
        } else if(passArr[i] === "m"){
            passArr[i] = "w";
        } else if(passArr[i] === "w"){
            passArr[i] = "m";
        } else {
            if(symbolChecker.test(passArr[i])) {
                passArr[i] = getRandomSymbol();
            }
            
            if(/^[A-Z]$/i.test(passArr[i])){
                let random = Math.random();
    
                if(random >= 0.5){
                    passArr[i] = passArr[i].toUpperCase();
                } else {
                    passArr[i] = passArr[i].toLowerCase();
                }
            }
    
            if(isNaN(passArr[i]) == false){
                let random = Math.floor((Math.random() * 10));
                console.log(random);
                passArr[i] = random.toString();
            }
        }
    }

    finalPass = passArr.join("");
    result.innerText = finalPass;
}

const getRandomSymbol = () => {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

document.getElementById("copy").addEventListener("click", () => {
	let copyText = document.getElementById("result");
	let temp = document.createElement("textarea");
	document.body.appendChild(temp);
	temp.value = copyText.innerText;

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

password.addEventListener("mouseover", () => {
    password.type = "text";
});

password.addEventListener("mouseout", () => {
    password.type = "password";
});
