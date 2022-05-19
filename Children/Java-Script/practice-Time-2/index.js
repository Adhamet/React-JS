let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
let pass3 = document.getElementById("pass3");

let list = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345679!@#$%^&*()";

function randLetter() {
    let randomIndex = Math.floor(Math.random() * 70);
    return list[randomIndex];
}

function getPass() {
    let pass = "";
    for (let i = 0; i < 12; i++)
    {
        pass += randLetter();
    }
    return pass;
}

function putOutPass() {
    pass1.textContent = getPass();
    pass2.textContent = getPass();
    pass3.textContent = getPass();

    return 0;
}