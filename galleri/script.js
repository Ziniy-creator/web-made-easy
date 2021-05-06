let large = document.getElementById("box1");
let thumbnails = document.querySelectorAll(".thumbnails");


for(let index = 0; index < thumbnails.length; index++){
    thumbnails[index].addEventListener("click", (picture)=>{

       large.setAttribute("src", picture.target.dataset.src);
        console.log(large);

    });

}
