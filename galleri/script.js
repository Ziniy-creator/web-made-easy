let large = document.getElementById("box1");
let thumbnails = document.querySelectorAll(".thumbnails");


for(let index = 0; index < thumbnails.length; index++){
    thumbnails[index].addEventListener("click", (picture)=>{


       large.setAttribute("src", picture.target.dataset.src);
       

       document.querySelector(".active").classList.remove("active");
       thumbnails[index].classList.add("active");
       
     

    });



}
