window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");

    document.querySelector("#menu_knap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggle menu");
    document.querySelector("#menu_burger").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu_burger").classList.contains("hidden");

    if (erSkjult == true) {
        // menuen er nu skjult - ændre menuknap til tre streger
        document.querySelector("#menu_knap").textContent = "☰";
    } else {
        //menuen er nu vist - ændre menuknap til X
        document.querySelector("#menu_knap").innerHTML = "X";
    }
}
