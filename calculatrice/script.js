let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Erreur";
    }
}

function toggleSign() {
    if (display.value) {
        if (display.value.charAt(0) === "-") {
            display.value = display.value.slice(1);
        } else {
            display.value = "-" + display.value;
        }
    }
}
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key)) {
        // Si c'est un chiffre (0-9)
        appendValue(key);
    } else if (["+", "-", "*", "/", "%", "."].includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        event.preventDefault(); // empêche le rechargement de la page
        calculate();
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } else if (key === "c" || key === "C") {
        clearDisplay();
    }
});
