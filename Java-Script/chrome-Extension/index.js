let myInputs = [];
const inputEle = document.getElementById("input-element");
const clickedBtn = document.getElementById("input-btn");
const ulEle = document.getElementById("ul-ele");

clickedBtn.addEventListener("click", function() {
    myInputs.push(inputEle.value);
    console.log(myInputs);
});

for(let i = 0; i < myInputs.length; i++) {
    ulEle.textContent += myInputs[i] + " ";
}
