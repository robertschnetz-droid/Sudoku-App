const nieuweSudokuKnop = document.getElementById("nieuweSudoku");
const titel = document.getElementById("titel");
const sudokuLijst = document.getElementById("sudokuLijst");
const sudokuBord = document.getElementById("sudokuBord");
const vastzettenKnop = document.getElementById("vastzettenKnop");
const ontgrendelKnop = document.getElementById("ontgrendelKnop");
const opslaanKnop = document.getElementById("opslaanKnop");
const terugKnop = document.getElementById("terugKnop");
const verwijderenKnop = document.getElementById("verwijderenKnop");
const afrondenKnop = document.getElementById("afrondenKnop");
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
verwijderenKnop.style.display = "none";
afrondenKnop.style.display = "none";
ontgrendelKnop.style.display = "none";

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
nieuweRegel.innerHTML = "<a href='#'>" + nummer + " 🆕</a>";

nieuweRegel.addEventListener("click", function () {
    huidigeSudoku = nummer;
    sudokuLijst.style.display = "none";
    nieuweSudokuKnop.style.display = "none";
    titel.style.display = "none";
    vastzettenKnop.style.display = "block";
    opslaanKnop.style.display = "block";
    terugKnop.style.display = "block";
        verwijderenKnop.style.display = "block";
        ontgrendelKnop.style.display = "block";
        afrondenKnop.style.display = "block";
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

    vakjes[j].readOnly = true;

    vakjes[j].addEventListener("click", function () {

        if (geselecteerdVakje) {
    geselecteerdVakje.style.border = "";
}

geselecteerdVakje = this;
this.blur();
geselecteerdVakje.style.border = "3px solid blue";

const popup = document.getElementById("popupMenu");

popup.style.display = "block";
const rect = this.getBoundingClientRect();

popup.style.left = (window.innerWidth - popup.offsetWidth) / 2 + "px";
popup.style.top = (rect.bottom + window.scrollY + 5) + "px";

    });

}
});

let bestaandeRegels = sudokuLijst.getElementsByTagName("li");
let ingevoegd = false;

for (let i = 0; i < bestaandeRegels.length; i++) {
    let bestaandNummer = Number(
        bestaandeRegels[i].textContent.replace("🆕", "").trim()
    );

    if (Number(nummer) < bestaandNummer) {
        sudokuLijst.insertBefore(nieuweRegel, bestaandeRegels[i]);
        ingevoegd = true;
        break;
    }
}

if (!ingevoegd) {
    sudokuLijst.appendChild(nieuweRegel);
}
let opgeslagenSudokus = JSON.parse(localStorage.getItem("sudokuLijst")) || [];

opgeslagenSudokus.push({
    nummer: nummer,
    status: "🆕"
});

opgeslagenSudokus.sort(function(a, b) {
    return Number(a.nummer) - Number(b.nummer);
});

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
let bezig = false;

for (let i = 0; i < vakjes.length; i++) {
    waarden.push({
    waarde: vakjes[i].value,
    vastgezet: vakjes[i].disabled
});
if (vakjes[i].value !== "" && vakjes[i].disabled === false) {
    bezig = true;
}
}

localStorage.setItem("sudoku" + huidigeSudoku, JSON.stringify(waarden));
let opgeslagenSudokus = JSON.parse(localStorage.getItem("sudokuLijst")) || [];

for (let i = 0; i < opgeslagenSudokus.length; i++) {
    if (opgeslagenSudokus[i].nummer == huidigeSudoku) {
        opgeslagenSudokus[i].status = bezig ? "⏳" : "🆕";
    }
}

localStorage.setItem("sudokuLijst", JSON.stringify(opgeslagenSudokus));

alert("Sudoku opgeslagen");
});

afrondenKnop.addEventListener("click", function () {
     const vakjes = sudokuBord.getElementsByTagName("input");
const waarden = [];
let bezig = false;

for (let i = 0; i < vakjes.length; i++) {
    waarden.push({
    waarde: vakjes[i].value,
    vastgezet: vakjes[i].disabled
});
if (vakjes[i].value !== "" && vakjes[i].disabled === false) {
    bezig = true;
}
}

localStorage.setItem("sudoku" + huidigeSudoku, JSON.stringify(waarden));
let opgeslagenSudokus = JSON.parse(localStorage.getItem("sudokuLijst")) || [];

for (let i = 0; i < opgeslagenSudokus.length; i++) {
    if (opgeslagenSudokus[i].nummer == huidigeSudoku) {
        opgeslagenSudokus[i].status = "✅";
    }
}

localStorage.setItem("sudokuLijst", JSON.stringify(opgeslagenSudokus));

location.reload();
    

});

ontgrendelKnop.addEventListener("click", function () {

    if (confirm("Weet je het zeker?")) {

        const vakjes = sudokuBord.getElementsByTagName("input");

        for (let i = 0; i < vakjes.length; i++) {

            vakjes[i].disabled = false;

        }

    }

});

verwijderenKnop.addEventListener("click", function () {

    if (confirm("Weet je zeker dat je Sudoku " + huidigeSudoku + " wilt verwijderen?")) {

        localStorage.removeItem("sudoku" + huidigeSudoku);

        let opgeslagenSudokus = JSON.parse(localStorage.getItem("sudokuLijst")) || [];

        opgeslagenSudokus = opgeslagenSudokus.filter(function(item) {
        return item.nummer != huidigeSudoku;
        });

        localStorage.setItem("sudokuLijst", JSON.stringify(opgeslagenSudokus));

        location.reload();
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
    verwijderenKnop.style.display = "none";
    ontgrendelKnop.style.display = "none";
    afrondenKnop.style.display = "none";
    location.reload();

});
const opgeslagenSudokus =
    JSON.parse(localStorage.getItem("sudokuLijst")) || [];

opgeslagenSudokus.sort(function(a, b) {
    return Number(a.nummer) - Number(b.nummer);
});

for (let i = 0; i < opgeslagenSudokus.length; i++) {
    const nieuweRegel = document.createElement("li");
    nieuweRegel.innerHTML = "<a href='#'>" + opgeslagenSudokus[i].nummer + " " + opgeslagenSudokus[i].status + "</a>";
    nieuweRegel.addEventListener("click", function () {
        huidigeSudoku = opgeslagenSudokus[i].nummer;
    sudokuLijst.style.display = "none";
    titel.style.display = "none";
    nieuweSudokuKnop.style.display = "none";
vastzettenKnop.style.display = "block";
opslaanKnop.style.display = "block";
terugKnop.style.display = "block";
verwijderenKnop.style.display = "block";
ontgrendelKnop.style.display = "block";
afrondenKnop.style.display = "block";
sudokuBord.innerHTML =
        "<h2>Sudoku " + opgeslagenSudokus[i].nummer + "</h2>" +
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
this.blur();
geselecteerdVakje.style.border = "3px solid blue";

const popup = document.getElementById("popupMenu");

popup.style.display = "block";
const rect = this.getBoundingClientRect();

popup.style.left = (window.innerWidth - popup.offsetWidth) / 2 + "px";
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