let counterElement = document.getElementById("counterValue");


function onIncrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterValue.textContent = updatedCounterValue;
}

function onDecrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterValue.textContent = updatedCounterValue;
}

function onReset() {
    let updatedCounterValue = 0;
    counterValue.textContent = updatedCounterValue;
}