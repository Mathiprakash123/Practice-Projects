const totalDist = document.getElementById("dist");
const fuelEffi = document.getElementById("fuelEfficiency");
const cost = document.getElementById("totalCost");

const button = document.getElementById("btn");

const result = document.getElementById("Result");
button.addEventListener("click", (e) => {
    e.preventDefault();
    if (totalCost.value === "") {
        alert("Enter a Distance");

    }
    else {
        const distance = totalDist.value;

        const efficiency = fuelEffi.value;
        const totalCost = cost.value;

        const res = (distance / efficiency) * totalCost;

        result.textContent = "Total Amount: " + res.toFixed(2);
    }



});