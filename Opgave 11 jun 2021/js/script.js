//Gem  panel klasse og knappermed classe btn
let panel = document.querySelectorAll(".panel");
let btn = document.querySelectorAll(".accordion");

for (let index = 0; index < panel.length; index++) {
    btn[index].addEventListener("click", (event) => {
        // Kalder panel event
        console.log(event);
        
        panel[index].classList.toggle("active");
        //tilføjer active til knapper
       
        btn[index].classList.toggle("btnactive");

    });
}


function formValidate(){

 
if (!(document.getElementById("name").value.length > 5)){
      
      console.log("navn er ikke valideret");
    }

    if (!(document.getElementById("email").value.length > 7 && 
        document.getElementById("email").value.includes("@") &&
        document.getElementById("email").value.includes("."))){
    
        console.log("email er ikke valideret");
    }
      

    else{
    
        console.log("alt er valideret")
        return true;
    
        }   
}


function menudropdown(){

    document.getElementById("dropdownmenu").classList.toggle("activedrop");
    
}
