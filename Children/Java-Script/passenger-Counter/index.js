let countEle = document.getElementById("count-ele");

let a = 0;
let saves = 0;
function increment() {
    a++;
    countEle.innerText = a;
}

let saveEle = document.getElementById("save-ele");

function save() {
    console.log(a);

    if (saves == 0) {
        saveEle.innerText += " " + a;
    }
    else {
        saveEle.innerText += " - " + a;
    }
    saves++;

    a = 0;
    countEle.innerText = a;
}



