const playLang = document.querySelector(".audio")

let sound = async () => {
    var isixhosa = new Audio('sounds/isixhosa.mp3');
    isixhosa.play()
}

let sotho = async () => {
    var isisuthu = new Audio('sounds/isisuthu.mp3');
    isisuthu.play()
}

function venda(){
    var isivenda = new Audio('sounds/venda.mp3');
    isivenda.play()
}

let ndebele = async () => {
    var isindebele = new Audio('sounds/isindebele.mp3');
    isindebele.play()
}




document.addEventListener("click", sound());
document.addEventListener("click", sotho());
document.addEventListener("click", venda());
document.addEventListener("click", ndebele());


// playLang.innerHTML = bell.play()
