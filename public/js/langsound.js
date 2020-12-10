const playLang = document.querySelector(".audio")

let sound = async () => {
    var isixhosa = new Audio('sounds/isixhosa.mp3');
    isixhosa.play()
}

let sotho = async () => {
    var isisuthu = new Audio('sounds/isisuthu.mp3');
    isisuthu.play()
}
let venda = async () => {
    var tshiVenda = new Audio('sounds/venda.mp3');
    tshiVenda.play()
}



let ndebele = async () => {
    var isindebele = new Audio('sounds/isindebele.mp3');
    isindebele.play();
    
}

let xitsonga = async () => {
    var xitsonga = new Audio('sounds/xitsonga.mp3');
    xitsonga.play()
}

let afrikaans = async () => {
    var afrikaans = new Audio('sounds/afrikaans.mp3');
    afrikaans.play()
}




document.addEventListener("click", sound());
document.addEventListener("click", sotho());
document.addEventListener("click", venda());
document.addEventListener("click", ndebele());
document.addEventListener("click", afrikaans());
document.addEventListener("click", xitsonga());

