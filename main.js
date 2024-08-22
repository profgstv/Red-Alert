let userName = "";
let virgula = ", "
let nameIsCalled = document.querySelector("#userName");

while(userName == "") {
    userName = prompt("What is your name?");
}

if(userName == null) {
    userName = "";
    virgula = "";
} else{
    nameIsCalled.textContent = virgula + userName;
}

