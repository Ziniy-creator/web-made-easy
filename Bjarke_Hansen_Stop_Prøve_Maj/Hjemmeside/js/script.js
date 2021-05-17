//Gem imgs med classe slide og knappermed classe btn
let slide = document.querySelectorAll(".slide");
let btn = document.querySelectorAll(".btn");

for (let index = 0; index < slide.length; index++) {
    btn[index].addEventListener("click", (event) => {
        // Kalder picture event
        console.log(event);
        document.querySelector(".active").classList.remove("active");
        slide[index].classList.add("active");
        //tilføjer active til knapper
        document.querySelector(".btna").classList.remove("btna");
        btn[index].classList.add("btna");

    });
}