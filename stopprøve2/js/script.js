//Gem  panel klasse og knappermed classe btn
let panel = document.querySelectorAll(".panel");
let btn = document.querySelectorAll(".accordion");

for (let index = 0; index < panel.length; index++) {
    btn[index].addEventListener("click", (event) => {
        // Kalder panel event
        console.log(event);
        document.querySelector(".active").classList.remove("active");
        panel[index].classList.add("active");
        //tilføjer active til knapper
        document.querySelector(".btna").classList.remove("btna");
        btn[index].classList.add("btna");

    });
}