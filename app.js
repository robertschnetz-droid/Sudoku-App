const nieuweSudokuKnop = document.getElementById("nieuweSudoku");
const titel = document.getElementById("titel");
const sudokuLijst = document.getElementById("sudokuLijst");
const sudokuBord = document.getElementById("sudokuBord");
const vastzettenKnop = document.getElementById("vastzettenKnop");
const opslaanKnop = document.getElementById("opslaanKnop");
const terugKnop = document.getElementById("terugKnop");
const verwijderenKnop = document.getElementById("verwijderenKnop");
const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");
const popup3 = document.getElementById("popup3");
const popup4 = document.getElementById("popup4");
const popup5 = document.getElementById("popup5");
const popup6 = document.getElementById("popup6");
const popup7 = document.getElementById("popup7");
const popup8 = document.getElementById("popup8");
const popup9 = document.getElementById("popup9");
const popupBackspace = document.getElementById("popupBackspace");
let huidigeSudoku = "";
let geselecteerdVakje = null;

nieuweSudokuKnop.addEventListener("click", function () {
    const nummer = prompt("Welk puzzelnummer wil je aanmaken?");
    if (nummer === null || nummer === "") {
    return;
}
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
    terugKnop.style.display = "block";
        verwijderenKnop.style.display = "block";
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
        const vakjes = sudokuBord.getElementsByTagName("input");

for (let j = 0; j < vakjes.length; j++) {

    vakjes[j].addEventListener("click", function () {

        if (geselecteerdVakje) {
    geselecteerdVakje.style.border = "";
}

geselecteerdVakje = this;
geselecteerdVakje.style.border = "3px solid blue";

const popup = document.getElementById("popupMenu");

popup.style.display = "block";
const rect = this.getBoundingClientRect();

popup.style.left = rect.left + "px";
popup.style.top = (rect.bottom + window.scrollY + 5) + "px";

    });

}
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

verwijderenKnop.addEventListener("click", function () {

    if (confirm("Weet je zeker dat je Sudoku " + huidigeSudoku + " wilt verwijderen?")) {

        localStorage.removeItem("sudoku" + huidigeSudoku);

        let opgeslagenSudokus = JSON.parse(localStorage.getItem("sudokuLijst")) || [];

        opgeslagenSudokus = opgeslagenSudokus.filter(function(item) {
            return item != huidigeSudoku;
        });

        localStorage.setItem("sudokuLijst", JSON.stringify(opgeslagenSudokus));

        location.reload();
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
terugKnop.style.display = "block";
verwijderenKnop.style.display = "block";
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
        const vakjes = sudokuBord.getElementsByTagName("input");

for (let j = 0; j < vakjes.length; j++) {

    vakjes[j].addEventListener("click", function () {

        if (geselecteerdVakje) {
    geselecteerdVakje.style.border = "";
}

geselecteerdVakje = this;
geselecteerdVakje.style.border = "3px solid blue";

const popup = document.getElementById("popupMenu");

popup.style.display = "block";
const rect = this.getBoundingClientRect();

popup.style.left = rect.left + "px";
popup.style.top = (rect.bottom + window.scrollY + 5) + "px";

    });

}
        const opgeslagenData = localStorage.getItem("sudoku" + huidigeSudoku);

if (opgeslagenData) {
    const waarden = JSON.parse(opgeslagenData);
    const vakjes = sudokuBord.getElementsByTagName("input");

    for (let j = 0; j < vakjes.length; j++) {
        vakjes[j].value = waarden[j].waarde;
        vakjes[j].disabled = waarden[j].vastgezet;

        if (waarden[j].vastgezet) {
            vakjes[j].style.color = "red";
        }
    }
}
});
terugKnop.addEventListener("click", function () {

    sudokuBord.innerHTML = "";

    sudokuLijst.style.display = "block";
    titel.style.display = "block";
    nieuweSudokuKnop.style.display = "block";

    vastzettenKnop.style.display = "none";
    opslaanKnop.style.display = "none";
    terugKnop.style.display = "none";
    toets1.style.display = "none";
    toets2.style.display = "none";
    toets3.style.display = "none";
    toets4.style.display = "none";
    toets5.style.display = "none";
    toets6.style.display = "none";
    toets7.style.display = "none";
    toets8.style.display = "none";
    toets9.style.display = "none";
    verwijderenKnop.style.display = "none";

});

    sudokuLijst.appendChild(nieuweRegel);
}

popup1.addEventListener("click", function () {
    if (geselecteerdVakje && !geselecteerdVakje.disabled) {
        geselecteerdVakje.value = "1";
        document.getElementById("popupMenu").style.display = "none";
    }
});

popup2.addEventListener("click", function () {
    if (geselecteerdVakje && !geselecteerdVakje.disabled) {
        geselecteerdVakje.value = "2";
        document.getElementById("popupMenu").style.display = "none";
    }
});

popup3.addEventListener("click", function () {
    if (geselecteerdVakje && !geselecteerdVakje.disabled) {
        geselecteerdVakje.value = "3";
        document.getElementById("popupMenu").style.display = "none";
    }
});

popup4.addEventListener("click", function () {
    if (geselecteerdVakje && !geselecteerdVakje.disabled) {
        geselecteerdVakje.value = "4";
        document.getElementById("popupMenu").style.display = "none";
    }
});

popup5.addEventListener("click", function () {
    if (geselecteerdVakje && !geselecteerdVakje.disabled) {
        geselecteerdVakje.value = "5";
        document.getElementById("popupMenu").style.display = "none";
    }
});

popup6.addEventListener("click", function () {
    if (geselecteerdVakje && !geselecteerdVakje.disabled) {
        geselecteerdVakje.value = "6";
        document.getElementById("popupMenu").style.display = "none";
    }
});

popup7.addEventListener("click", function () {
    if (geselecteerdVakje && !geselecteerdVakje.disabled) {
        geselecteerdVakje.value = "7";
        document.getElementById("popupMenu").style.display = "none";
    }
});

popup8.addEventListener("click", function () {
    if (geselecteerdVakje && !geselecteerdVakje.disabled) {
        geselecteerdVakje.value = "8";
        document.getElementById("popupMenu").style.display = "none";
    }
});

popup9.addEventListener("click", function () {
    if (geselecteerdVakje && !geselecteerdVakje.disabled) {
        geselecteerdVakje.value = "9";
        document.getElementById("popupMenu").style.display = "none";
    }
});

popupBackspace.addEventListener("click", function () {
    if (geselecteerdVakje && !geselecteerdVakje.disabled) {
        geselecteerdVakje.value = "";
        document.getElementById("popupMenu").style.display = "none";
    }
});