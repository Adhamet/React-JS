let myInputs = [];
const inputEle = document.getElementById("input-element");
const clickedBtn = document.getElementById("input-btn");
const ulEle = document.getElementById("ul-ele");

clickedBtn.addEventListener("click", function() {
    myInputs.push(inputEle.value);
    renderInput();
    console.log(myInputs);
});

function renderInput() {
    let listItems = "";
    for(let i = 0; i < myInputs.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myInputs[i]}'> ${myInputs[i]}</a>
            </li>`;
    }
    ulEle.innerHTML = listItems;
}
