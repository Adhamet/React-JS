let myInputs = [];
const inputEle = document.getElementById("input-element");
const clickedBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEle = document.getElementById("ul-ele");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderInput(myInputs);
}

function renderInput(leads) {
    let listItems = "";
    for(let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'> ${leads[i]}</a>
            </li>`;
    }
    ulEle.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myInputs = [];
    renderInput(myInputs);
})

clickedBtn.addEventListener("click", function() {
    myInputs.push(inputEle.value);
    inputEle.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myInputs));
    console.log(leadsFromLocalStorage);
    renderInput(myInputs);
});

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
        myInputs.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myInputs));
        renderInput(myLeads);
    });
});

