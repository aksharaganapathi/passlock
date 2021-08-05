let timeout;
let password = document.getElementById("password");
let result = document.getElementById("result")
let bar = document.getElementById("bar");
let textArea = document.getElementById("text");
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{10,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))')

function strengthChecker(passwordParameter) {
    if(strongPassword.test(passwordParameter)) {
        bar.style.backgroundColor = "green";
        let str = "Strong";
        let newStr = str.fontcolor("green");
        textArea.innerHTML = "Your password strength is: " + newStr;
        result.hidden = false;
    } else if(mediumPassword.test(passwordParameter)) {
        bar.style.backgroundColor = '#D3B535';
        let str = "Medium";
        let newStr = str.fontcolor("#D3B535");
        textArea.innerHTML = "Your password strength is: " + newStr;
        result.hidden = false;
    } else {
        bar.style.backgroundColor = 'red';
        let str = "Weak";
        let newStr = str.fontcolor("red");
        textArea.innerHTML = "Your password strength is: " + newStr;
        result.hidden = false;
    }
}

password.addEventListener("input", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => strengthChecker(password.value), 400);
    if(password.value.length !== 0) {
        bar.style.backgroundColor = "#7698e7"
    }
});

password.addEventListener("mouseover", function(){
    password.type = "text";
});

password.addEventListener("mouseout", function(){
    password.type = "password";
});
