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

 
if (document.getElementById("name").value.length > 5){
      
      console.log("navn er valideret");

    if (document.getElementById("email").value.length > 7 && document.getElementById("email").value.includes("@")){
    
        console.log("email er valideret");
       
    }
      
       
        return true;
    }

    else{
    
        console.log("intet er valideret")
        return false;
    
        }   


}

function menudropdown(){

    document.getElementById("dropdownmenu").classList.toggle("activedrop");
    
}