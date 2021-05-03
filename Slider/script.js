const images = document.querySelectorAll("#slider img");
const btn = document.querySelectorAll("#btns a");

for(let index = 0; index < btn.length; index++){   
    
    

    btn[index].addEventListener("click", (event)=>{

    for(let index2 = 0; index2 < images.length; index2++){
        console.log(index);
    if(images.index2 === btn.index2){
        images[index2].classList.add("show");
    }
    else{
        images[index2].classList.add("hide");
    }
}
              
    });

}
