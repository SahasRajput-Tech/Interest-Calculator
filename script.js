function calculate() { // Added braces around function body

    const totalAmount = document.getElementById("total-amount"); // Corrected variable name and element ID
    const principalInput = document.getElementById("principal"); // Corrected variable name and element ID
    const rateInput = document.getElementById("rate"); // Corrected variable name and element ID
    const yearsInput = document.getElementById("years"); // Corrected variable name and element ID

    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value / 100); // Dividing by 100 to get the decimal value of the percentage
    let years = Number(yearsInput.value);

    if (principal < 0 || isNaN(principal)) {
        principal = 0;
        principalInput.value = 0; // Corrected assignment
    }

    if (rate < 0 || isNaN(rate)) {
        rate = 0;
        rateInput.value = 0; // Corrected assignment
    }

    if (years < 0 || isNaN(years)) {
        years = 0;
        yearsInput.value = 0; // Corrected assignment
    }

    const result = principal * Math.pow((1 + rate), years); // Corrected mathematical expression

    totalAmount.textContent = result.toLocaleString(undefined, { style: "currency", currency: "INR" }); // Corrected toLocaleString() method syntax
}
