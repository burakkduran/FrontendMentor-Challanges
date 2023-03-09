const bill = document.querySelector("#bill");
const tip = document.querySelectorAll(".tip");
const customTip = document.querySelector("#customTip");
const people = document.querySelector("#people");

const tipAmount = document.querySelector("#tipAmount");
const totalTip = document.querySelector("#totalTip");

const reset = document.querySelector("#reset");

let currentBill = "";
let currentTip = "";
let currentPeople = "";



// Event Listeners

bill.addEventListener("input", billFunction);
tip.forEach((tip) => {
  tip.addEventListener("click", selectTip);
});
customTip.addEventListener("input", customButton);
customTip.addEventListener("click", removeActive);
people.addEventListener("input", peopleNumber);
reset.addEventListener("click", clearStatus);

// Status and Calculate

function checkStatus() {
  if (currentBill === "" || currentTip === "" || currentPeople === "") {
  } else {
    calculate();
  }
}

function clearStatus() {
  currentBill = "";
  currentTip = "";
  currentPeople = "";

  removeActive();

  tipAmount.innerText = "0.00";
  totalTip.innerText = "0.00";
  customTip.value = "";
  bill.value = "";
  people.value = "";
}

function calculate() {
  let totalBill = (currentBill * (currentTip + 100)) / 100;
  totalTip.innerText = Math.round((totalBill / currentPeople) * 100) / 100;
  tipAmount.innerText =
    Math.round(((currentBill * currentTip) / 100 / currentPeople) * 100) / 100;
}

// Bill

function billFunction() {
  currentBill = Number(bill.value);
  checkStatus();
}

// Tip

function customButton() {
  currentTip = Number(customTip.value);
  checkStatus();
}

function selectTip(event) {
  removeActive();
  event.currentTarget.classList.add("activate");
  currentTip = Number(event.currentTarget.getAttribute("data-value"));
  customTip.value = "";
  checkStatus();
}

function removeActive() {
  tip.forEach((tip) => {
    tip.classList.remove("activate");
  });
}

// People

function peopleNumber() {
  currentPeople = Number(people.value);
  checkStatus();
}
