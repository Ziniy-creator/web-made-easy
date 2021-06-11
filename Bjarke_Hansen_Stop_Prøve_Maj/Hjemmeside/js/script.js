//Gem img tags med class slide og knapper med class btn
let slide = document.querySelectorAll(".slide");
let btn = document.querySelectorAll(".btn");

for (let index = 0; index < slide.length; index++) {
    btn[index].addEventListener("click", (event) => {
        // Kalder picture event
        console.log(event);
        document.querySelector(".active").classList.remove("active");
        slide[index].classList.toggle("active");
        //tilføjer active til knapper
        document.querySelector(".btna").classList.remove("btna");
        btn[index].classList.toggle("btna");

    });
}