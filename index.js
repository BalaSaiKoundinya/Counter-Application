let counterElement = document.getElementById("counterValue");


function onIncrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterValue.textContent = updatedCounterValue;

    if (updatedCounterValue>0) {
        counterElement.style.color = "Green";
    } 
    else if (updatedCounterValue<0){
        counterElement.style.color = "red";
    }
    else {
        counterElement.style.color = "blue"
    }
}

function onDecrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterValue.textContent = updatedCounterValue;

    if (updatedCounterValue>0) {
        counterElement.style.color = "Green";
    } 
    else if (updatedCounterValue<0){
        counterElement.style.color = "red";
    }
    else {
        counterElement.style.color = "blue"
    }
}

function onReset() {
    let updatedCounterValue = 0;
    counterValue.textContent = updatedCounterValue;
    counterElement.style.color = "blue";
}