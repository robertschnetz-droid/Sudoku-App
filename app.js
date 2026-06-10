const nieuweSudokuKnop = document.getElementById("nieuweSudoku");
const titel = document.getElementById("titel");
const sudokuLijst = document.getElementById("sudokuLijst");
const sudokuBord = document.getElementById("sudokuBord");
const vastzettenKnop = document.getElementById("vastzettenKnop");
const opslaanKnop = document.getElementById("opslaanKnop");
const ladenKnop = document.getElementById("ladenKnop");
const terugKnop = document.getElementById("terugKnop");
let huidigeSudoku = "";

nieuweSudokuKnop.addEventListener("click", function () {
    const nummer = prompt("Welk puzzelnummer wil je aanmaken?");
    huidigeSudoku = nummer;
const bestaandeSudokus = sudokuLijst.getElementsByTagName("li");


let bestaatAl = false;

for (let i = 0; i < bestaandeSudokus.length; i++) {
    if (bestaandeSudokus[i].textContent.startsWith(nummer)) {
        bestaatAl = true;
    }
}
    

    if (bestaatAl) {
    alert("Sudoku " + nummer + " bestaat al.");
} else {
    const nieuweRegel = document.createElement("li");
nieuweRegel.innerHTML = "<a href='#'>" + nummer + " ❌</a>";

nieuweRegel.addEventListener("click", function () {
    huidigeSudoku = nummer;
    sudokuLijst.style.display = "none";
    nieuweSudokuKnop.style.display = "none";
    titel.style.display = "none";
    vastzettenKnop.style.display = "block";
    opslaanKnop.style.display = "block";
    ladenKnop.style.display = "block";
    terugKnop.style.display = "block";
        sudokuBord.innerHTML =
        "<h2>Sudoku " + nummer + "</h2>" +
        "<table border='1'>" +
        "<tr><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td></tr>" +
        "<tr><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td></tr>" +
        "<tr><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td></tr>" +
        "<tr><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td></tr>" +
        "<tr><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td></tr>" +
        "<tr><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td></tr>" +
        "<tr><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td></tr>" +
        "<tr><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td></tr>" +
        "<tr><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td></tr>" +
        "</table>";
});

sudokuLijst.appendChild(nieuweRegel);
let opgeslagenSudokus = JSON.parse(localStorage.getItem("sudokuLijst")) || [];
opgeslagenSudokus.push(nummer);
localStorage.setItem("sudokuLijst", JSON.stringify(opgeslagenSudokus));

}
});

vastzettenKnop.addEventListener("click", function () {
    const vakjes = sudokuBord.getElementsByTagName("input");

    for (let i = 0; i < vakjes.length; i++) {
        if (vakjes[i].value !== "") {
            vakjes[i].style.color = "red";
            vakjes[i].disabled = true;
        }
    }
});

opslaanKnop.addEventListener("click", function () {
    const vakjes = sudokuBord.getElementsByTagName("input");
const waarden = [];

for (let i = 0; i < vakjes.length; i++) {
    waarden.push({
    waarde: vakjes[i].value,
    vastgezet: vakjes[i].disabled
});
}

localStorage.setItem("sudoku" + huidigeSudoku, JSON.stringify(waarden));
alert("Sudoku opgeslagen");
});

ladenKnop.addEventListener("click", function () {
    const opgeslagenData = localStorage.getItem("sudoku" + huidigeSudoku);

    if (opgeslagenData) {
        const waarden = JSON.parse(opgeslagenData);
        const vakjes = sudokuBord.getElementsByTagName("input");

        for (let i = 0; i < vakjes.length; i++) {
            vakjes[i].value = waarden[i].waarde;
            vakjes[i].disabled = waarden[i].vastgezet;
            if (waarden[i].vastgezet) {
    vakjes[i].style.color = "red";
}
        }

        alert("Sudoku geladen!");
    } else {
        alert("Geen opgeslagen sudoku gevonden.");
    }
});
const opgeslagenSudokus = JSON.parse(localStorage.getItem("sudokuLijst")) || [];

for (let i = 0; i < opgeslagenSudokus.length; i++) {
    const nieuweRegel = document.createElement("li");
    nieuweRegel.innerHTML = "<a href='#'>" + opgeslagenSudokus[i] + " ❌</a>";
    nieuweRegel.addEventListener("click", function () {
        huidigeSudoku = opgeslagenSudokus[i];
    sudokuLijst.style.display = "none";
    titel.style.display = "none";
    nieuweSudokuKnop.style.display = "none";
vastzettenKnop.style.display = "block";
opslaanKnop.style.display = "block";
ladenKnop.style.display = "block";
terugKnop.style.display = "block";
sudokuBord.innerHTML =
        "<h2>Sudoku " + opgeslagenSudokus[i] + "</h2>" +
        "<table border='1'>" +
        "<tr><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td></tr>" +
        "<tr><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td></tr>" +
        "<tr><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td></tr>" +
        "<tr><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td></tr>" +
        "<tr><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td></tr>" +
        "<tr><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td></tr>" +
        "<tr><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td></tr>" +
        "<tr><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td></tr>" +
        "<tr><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td><td><input size='1'></td></tr>" +
        "</table>";
});
terugKnop.addEventListener("click", function () {

    sudokuBord.innerHTML = "";

    sudokuLijst.style.display = "block";
    titel.style.display = "block";
    nieuweSudokuKnop.style.display = "block";

    vastzettenKnop.style.display = "none";
    opslaanKnop.style.display = "none";
    ladenKnop.style.display = "none";
    terugKnop.style.display = "none";

});
    sudokuLijst.appendChild(nieuweRegel);
}