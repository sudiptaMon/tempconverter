document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
})
let first = document.getElementById("first-text");
let first_unit = document.getElementById("first-unit");
let last = document.getElementById("last-text");
let sec_unit = document.getElementById("sec-unit");

function change() {
    document.querySelector('form').reset();
    if (first.textContent === "Celcius") {
        // console.log("inner");
        first.textContent = "Farenhite";
    } else if (first.textContent === 'Farenhite') {
        first.textContent = "Celcius";
    }

    if (last.textContent === 'Farenhite') {
        last.textContent = "Celcius";
    } else if (last.textContent === 'Celcius') {
        last.textContent = "Farenhite";

    }

    
}
function convert() {
    let t = document.getElementById("first").value;
    // console.log(temp);

    let temp = parseFloat(t);
    console.log(first.textContent)

    if (first.textContent === 'Celcius') {

        let ans = (temp * (9 / 5)) + 32;

        let display = document.getElementById("ans");
        display.value = ans+" °F";
    } else {
        let ans = 5 / 9 * (temp - 32);
        let display = document.getElementById("ans");
        display.value = ans+" °C";

    }



}



document.getElementById("change").addEventListener('click', change);
document.getElementById("btn").addEventListener('click', convert)