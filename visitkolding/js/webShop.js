let shoppingCart = [];
let shoppingCartBtn = document.getElementById("shoppingCartBtn");
let btns = document.getElementById("gridcontainer").getElementsByTagName("button");

for (let i = 0; i < btns.length; i++) {
    if (btns[i].innerText == "Køb nu") {
        btns[i].addEventListener("click", function () {
            alert("Unexpected exception!");
        });
    } else if (btns[i].innerText == "Tilføj til kurv") {
        btns[i].addEventListener("click", function () {
            shoppingCart.push(btns[i]);
            shoppingCartBtn.getElementsByTagName("div")[0].innerText = shoppingCart.length;
        });
    };
};

shoppingCartBtn.addEventListener("click", function () {
    console.log(shoppingCart);
    shoppingCart = [];
    shoppingCartBtn.getElementsByTagName("div")[0].innerText = shoppingCart.length;
    alert("Unexpected exception!");
});