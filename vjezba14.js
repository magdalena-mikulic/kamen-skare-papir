//VJEZBA 1

// let niz = ["kamen", "škare", "papir"];


// let randBroj = Math.floor(Math.random() * 3);
// console.log(niz[randBroj]);


//Vjezba2
// let niz = ["kamen", "skare", "papir"];



// let kompOdabir = ''
// function dajRandom() {
//     let randBroj = Math.floor(Math.random() * 3);
//     kompOdabir = niz[randBroj]
//     console.log(kompOdabir)
// }

// let buttonKamen = document.querySelector(".kamen");
// let buttonSkare = document.querySelector(".skare");
// let buttonPapir = document.querySelector(".papir");

// buttonKamen.addEventListener("click", function () {
//     dajRandom();
//     if (kompOdabir == "kamen") {
//         console.log("Nerješeno");
//     } else if (kompOdabir == "skare") {
//         console.log("Pobjedili ste!")
//     } else {
//         console.log("Izgubili ste!")
//     }


// });
// buttonSkare.addEventListener("click", function () {
//     dajRandom();
//     if (kompOdabir == "skare") {
//         console.log("Nerješeno");
//     } else if (kompOdabir == "papir") {
//         console.log("Pobjedili ste!")
//     } else {
//         console.log("Izgubili ste!")
//     }


// });
// buttonPapir.addEventListener("click", function () {
//     dajRandom();
//     if (kompOdabir == "papir") {
//         console.log("Nerješeno");
//     } else if (kompOdabir == "skare") {
//         console.log("Izgubili ste!")
//     } else {
//         console.log("Pobjedili ste!")
//     }


// });

//VJEZBA 3


// let niz = ["kamen", "skare", "papir"];

// let kompOdabir = ''
// function dajRandom() {
//     let randBroj = Math.floor(Math.random() * 3);
//     kompOdabir = niz[randBroj]
//     console.log(kompOdabir)
// }

// let buttonKamen = document.querySelector(".kamen");
// let buttonSkare = document.querySelector(".skare");
// let buttonPapir = document.querySelector(".papir");
// let rezultat = document.querySelector("#rezultat");

// buttonKamen.addEventListener("click", function () {
//     dajRandom();
//     if (kompOdabir == "kamen") {
//         console.log("Nerješeno");
//         rezultat.textContent = "Nerjeseno!"
//     } else if (kompOdabir == "skare") {
//         console.log("Pobjedili ste!")
//         rezultat.textContent = "Pobjedili ste!"
//     } else {
//         console.log("Izgubili ste!")
//         rezultat.textContent = "Izgubili ste!"
//     }


// });
// buttonSkare.addEventListener("click", function () {
//     dajRandom();
//     if (kompOdabir == "skare") {
//         console.log("Nerješeno");
//         rezultat.textContent = "Nerjeseno!"

//     } else if (kompOdabir == "papir") {
//         console.log("Pobjedili ste!")
//         rezultat.textContent = "Pobjedili ste!"
//     } else {
//         console.log("Izgubili ste!")
//         rezultat.textContent = "Izgubili ste!"
//     }


// });
// buttonPapir.addEventListener("click", function () {
//     dajRandom();
//     if (kompOdabir == "papir") {
//         console.log("Nerješeno");
//         rezultat.textContent = "Nerjeseno!"

//     } else if (kompOdabir == "skare") {
//         console.log("Izgubili ste!")
//         rezultat.textContent = "Izgubili ste!"
//     } else {
//         console.log("Pobjedili ste!")
//         rezultat.textContent = "Pobjedili ste!"
//     }


// });


//VJEZBa 4
let niz = ["kamen", "skare", "papir"];
let korisnik = 0;
let racunalo = 0;

let kompOdabir = ''
function dajRandom() {
    let randBroj = Math.floor(Math.random() * 3);
    kompOdabir = niz[randBroj]
    console.log(kompOdabir)
}

let buttonKamen = document.querySelector(".kamen");
let buttonSkare = document.querySelector(".skare");
let buttonPapir = document.querySelector(".papir");
let rezultat = document.querySelector("#rezultat");
let rezultatKorisnika = document.querySelector("#rezKor");
let rezultatRacunala = document.querySelector("#rezRac");

buttonKamen.addEventListener("click", function () {
    dajRandom();
    if (kompOdabir == "kamen") {
        console.log("Nerješeno");
        rezultat.textContent = "Nerjeseno!"
    } else if (kompOdabir == "skare") {
        console.log("Pobjedili ste!")
        rezultat.textContent = "Pobjedili ste!"
        korisnik++;
        rezultatKorisnika.textContent = "Rezultat korisnika:" + korisnik;
    } else {
        console.log("Izgubili ste!")
        rezultat.textContent = "Izgubili ste! "
        racunalo++;
        rezultatRacunala.textContent = "Rezultat racunala:" + racunalo;
    }


});
buttonSkare.addEventListener("click", function () {
    dajRandom();
    if (kompOdabir == "skare") {
        console.log("Nerješeno");
        rezultat.textContent = "Nerjeseno!"

    } else if (kompOdabir == "papir") {
        console.log("Pobjedili ste!")
        rezultat.textContent = "Pobjedili ste!"
        korisnik++;
        rezultatKorisnika.textContent = "Rezultat korisnika:" + korisnik;
    } else {
        console.log("Izgubili ste!")
        rezultat.textContent = "Izgubili ste!"
        racunalo++;
        rezultatRacunala.textContent = "Rezultat racunala:" + racunalo;
    }



});
buttonPapir.addEventListener("click", function () {
    dajRandom();
    if (kompOdabir == "papir") {
        console.log("Nerješeno");
        rezultat.textContent = "Nerjeseno!"

    } else if (kompOdabir == "skare") {
        console.log("Izgubili ste!")
        rezultat.textContent = "Izgubili ste!"
        racunalo++;
        rezultatRacunala.textContent = "Rezultat racunala:" + racunalo;
    } else {
        console.log("Pobjedili ste!")
        rezultat.textContent = "Pobjedili ste!"
        korisnik++;
        rezultatKorisnika.textContent = "Rezultat korisnika:" + korisnik;
    }


});