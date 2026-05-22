// GET ELEMENTS
const billInput = document.getElementById("bill");
const customTipInput = document.getElementById("customTip");
const peopleInput = document.getElementById("people");

const tipAmountText = document.getElementById("tipAmount");
const grandTotalText = document.getElementById("grandTotal");
const perPersonText = document.getElementById("perPerson");

const billError = document.getElementById("billError");
const tipError = document.getElementById("tipError");
const peopleError = document.getElementById("peopleError");

const resetBtn = document.getElementById("resetBtn");

let selectedTip = 10;
function setTip(value) {
    selectedTip = value;
    customTipInput.value = "";
    document.querySelectorAll(".tip-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    calculate();
}

// CUSTOM TIP
customTipInput.addEventListener("input", () => {
    selectedTip = Number(customTipInput.value);
    calculate();
});
billInput.addEventListener("input", calculate);
peopleInput.addEventListener("input", calculate);

function calculate() {
    const bill = parseFloat(billInput.value);
    const people = parseInt(peopleInput.value);
    let hasError = false;
    if (isNaN(bill) || bill <= 0) {
        billError.textContent = "Bill must be greater than 0";
        hasError = true;}
        else {
        billError.textContent = "";}

    if (selectedTip < 0 || selectedTip > 100) {
        tipError.textContent = "Tip must be between 0 and 100";
        hasError = true;
    } else {
        tipError.textContent = "";
    }

    if (isNaN(people) || people < 1) {
        peopleError.textContent = "At least 1 person required";
        hasError = true;
    } else {
        peopleError.textContent = "";
    }

    if (hasError) {
        tipAmountText.textContent = "Rs 0.00";
        grandTotalText.textContent = "Rs 0.00";
        perPersonText.textContent = "Rs 0.00";
        return;
    }

    // CALCULATIONS
    const tipAmount = (bill * selectedTip) / 100;
    const grandTotal = bill + tipAmount;
    const perPerson = grandTotal / people;

    // UPDATE UI
    tipAmountText.textContent = `Rs ${tipAmount.toFixed(2)}`;
    grandTotalText.textContent = `Rs ${grandTotal.toFixed(2)}`;
    perPersonText.textContent = `Rs ${perPerson.toFixed(2)}`;
}

// RESET
resetBtn.addEventListener("click", () => {
  billInput.value = "";
  customTipInput.value = "";
  peopleInput.value = "1";
  selectedTip = 10;

  billError.textContent = "";
  tipError.textContent = "";
  peopleError.textContent = "";

  tipAmountText.textContent = "Rs 0.00";
  grandTotalText.textContent = "Rs 0.00";
  perPersonText.textContent = "Rs 0.00";
});