let services = [];
const total = document.getElementById("totalAmountPrice");

const washBtn = document.getElementById("washy-btn");
const firstLine = document.getElementById("lineOne");

const mowBtn = document.getElementById("mowLawn-btn");
const secondLine = document.getElementById("lineTwo");

const weedsBtn = document.getElementById("pullWeeds-btn");
const thirdLine = document.getElementById("lineThree");

const inV_Button = document.getElementById("invoice");

washBtn.addEventListener("click", function() {
    firstLine.innerHTML = 
    `
    <p id = "left">Wash Car</p> <p id="right">$10</p>
    <button id = "removeWashy">Remove</button>
    `

    if(total.textContent == "$") total.textContent = "$10";
    else if(total.textContent == "$20") total.textContent = "$30";
    else if(total.textContent == "$30") total.textContent = "$40";
    else if(total.textContent == "$50") total.textContent = "$60";
});

mowBtn.addEventListener("click", function() {
    secondLine.innerHTML =
    `
    <p id = "left">Mow Lawn</p> <p id="right">$20</p>
    <button id = "removeLawny">Remove</button>
    `

    if(total.textContent == "$") total.textContent = "$20";
    else if(total.textContent == "$10") total.textContent = "$30";
    else if(total.textContent == "$30") total.textContent = "$50";
    else if(total.textContent == "$40") total.textContent = "$60";
});

weedsBtn.addEventListener("click", function() {
    thirdLine.innerHTML =
    `
    <p id = "left">Pull Weeds</p> <p id="right">$30</p>
    <button id = "removeWeedy">Remove</button>
    `

    if(total.textContent == "$") total.textContent = "$30";
    else if(total.textContent == "$20") total.textContent = "$50";
    else if(total.textContent == "$10") total.textContent = "$40";
    else if(total.textContent == "$30") total.textContent = "$60";
});

inV_Button.addEventListener("click", function() {
    firstLine.innerHTML = ``;
    secondLine.innerHTML = ``;
    thirdLine.innerHTML = ``;
    total.textContent = "$";
});

/* BIG FAIL
if(rmvWashBtn) {
    rmvWashBtn.addEventListener("click", function() {
        firstLine.innerHTML = ``;
        if(total.textContent == "$10") total.textContent = "$0";
        else if(total.textContent == "$30") total.textContent = "$20";
        else if(total.textContent == "$40") total.textContent = "$30";
        else if(total.textContent == "$60") total.textContent = "$50";
    });
}

if(rmvMowBtN) {
    rmvMowBtn.addEventListener("click", function() {
        secondLine.innerHTML = ``;
        if(total.textContent == "$20") total.textContent = "$0";
        else if(total.textContent == "$30") total.textContent = "$10";
        else if(total.textContent == "$50") total.textContent = "$30";
        else if(total.textContent == "$60") total.textContent = "$40";
    });
}

if(rmvWeedsBtn) {
    rmvWeedsBtn.addEventListener("click", function() {
        thirdLine.innerHTML = ``;
        if(total.textContent == "$30") total.textContent = "$0";
        else if(total.textContent == "$40") total.textContent = "$10";
        else if(total.textContent == "$50") total.textContent = "$20";
        else if(total.textContent == "$60") total.textContent = "$30";
    });
}
*/
