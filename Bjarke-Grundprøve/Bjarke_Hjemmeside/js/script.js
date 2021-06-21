//Gem  panel klasse og knappermed classe btn
let panel = document.querySelectorAll(".panel");
let btn = document.querySelectorAll(".accordionbtn");

for (let index = 0; index < panel.length; index++) {
    btn[index].addEventListener("click", (event) => {
        // Kalder panel event
        console.log(event);
        
        panel[index].classList.toggle("active");
        //tilføjer active til knapper
       
        btn[index].classList.toggle("btnactive");

    });
}

function menudropdown(){

    document.getElementById("dropdownmenu").classList.toggle("activedrop");
    
}
