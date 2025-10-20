import { createMassenge } from "./loadingButtons.js";
import { mainScene } from "./mainScene.js";

export const textChecker = {
    value: true,
    update: function(newValue) {
        this.value = newValue;
    }
};

export function loadingImg() {
    textChecker.update(true)

    setTimeout (() => {
        let div = document.createElement('div');
        div.classList.add('terpilaImg');
        div.classList.add('classAll');
        div.innerHTML = "<p>Терпение</p>";
        document.body.append(div);
        setTimeout (() => {
            div.classList.add('animUp');

            setTimeout(() => {
                let wrapper = document.createElement('div');
                wrapper.classList.add('buttons');
                wrapper.classList.add('classAll');

                let button = document.createElement('button');
                button.classList.add('button');
                button.classList.add('buttonFalse');
                button.classList.add('classAll');
                button.innerHTML = "<p>Я не терпила...</p>";
                button.classList.add('buttonFalse');

                wrapper.appendChild(button);
                document.body.append(wrapper);
    
                button.addEventListener("click", createMassenge);

                setTimeout (() => {
                    if (textChecker.value == false) {
                        return
                    }
    
                    let buttonTrue = document.createElement('button');
                    buttonTrue.classList.add('button');
                    buttonTrue.classList.add('classAll');
                    buttonTrue.innerHTML = "<p>Я терпила...</p>";
                    buttonTrue.classList.add('buttonTrue');

                    wrapper.appendChild(buttonTrue);
                    document.body.append(wrapper);
    
                    buttonTrue.addEventListener("click", createMassenge);
                    function createMassenge () {
                        var allEl = document.querySelectorAll(".classAll");
                        allEl.forEach(function (el) {
                            el.remove();
                            })
                            mainScene();
                    };
    
                    
                }, 60000)
        }, 5000)
                    
                }, 250000)

    }, 120000)

}