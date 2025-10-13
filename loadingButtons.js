import { loadingImg, textChecker } from "./loadingImg.js";

export function createMassenge () {

    textChecker.update(false)

    let button = document.querySelector(".button");
    let wrapper = document.querySelector(".buttons");
    let div = document.querySelector(".terpilaImg");
    button.remove();
    wrapper.remove();
    div.classList.add('animDown');
    div.innerHTML = "Нет, ты терпила!"
    var buttonTrue = document.querySelector('.buttonTrue')
    if (buttonTrue != undefined) {
        buttonTrue.remove();
                    }
    
    setTimeout(() => {
        div.innerHTML = "Потерпи ещё ещё";
        setTimeout(() => {
            var allEl = document.querySelectorAll(".classAll");
            allEl.forEach(function (el) {
                el.remove();
            });
            loadingImg();
        }, 5000)
    }, 5000)
    
    return
};