const playLang = document.querySelector(".audio");


let sound = async () => {
    var isixhosa = new Audio('sounds/isixhosa.mp3');
    isixhosa.play()
}

let sotho = async () => {
    var isisuthu = new Audio('sounds/isisuthu.mp3');
    isisuthu.play()
}

let tsivenda= async () => {
    var vendaAudio = new Audio('sounds/venda.mp3');
    vendaAudio.play()
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
    var afrikaansAudio = new Audio('sounds/afrikaans.mp3');
    afrikaansAudio.play()
}
let jingglebell = async ()=> {
    var jinglebell = new Audio("sounds/Bell.mp3")
    jinglebell.play()

}




// document.addEventListener("click", sound());
document.addEventListener("click", sotho());
document.addEventListener("click", venda());
document.addEventListener("click", ndebele());
document.addEventListener("click", afrikaans());
document.addEventListener("click", xitsonga());






