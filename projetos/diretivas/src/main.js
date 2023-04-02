import { createApp } from 'vue';
import App from './App.vue';

const Vue = createApp(App);

Vue.directive("teste", {
    created(){
        console.log("A diretiva foi aplicada com sucesso.");
    }
});

Vue.directive("texto", {
    created(el, binding){
        if(binding.value?.color){
            el.style.color = binding.value.color;
        }
        
        if(binding.value?.size){
            el.style.fontSize = binding.value.size;
        }
        
        let totalCharacters = 25;
        if(binding.value?.totalLetters){
            totalCharacters = binding.value.totalLetters;
        }

        let text = el.innerText;
        let textLength = text.length;
        let textModified = "";
        
        if(textLength > totalCharacters){
            textModified = text.substring(0, (totalCharacters - 3))  + "...";
        }
        else{
            textModified = text;
        }

        el.innerText = textModified;

        console.log("Texto original:", text);
        console.log("Tamanho do texto:", textLength);
        console.log("Texto modificado:", textModified);
    }
});

Vue.directive("position", {
    created(el, binding){
        console.log(el, binding.arg, binding.value);
        const possiblePositions = ["relative", "fixed", "absolute"];

        if(possiblePositions.includes(binding.arg)){
            el.style.position = binding.arg;
            el.style.top = `${binding.value}px`;
        }
    }
});

Vue.directive("information", {
    created(el, binding){
        console.log(el, binding.arg, binding.modifiers, binding.value);

        let func = function(){
            let informationSpan = document.createElement("span");
            
            informationSpan.style.position = "absolute";
            informationSpan.style.background = "#ddd";
            informationSpan.style.padding = "2px";
            informationSpan.innerText = binding.value;

            el.appendChild(informationSpan);

            informationSpan.addEventListener("click", (event) => {
                event.stopPropagation();
                informationSpan.remove();
            });
        }

        if(binding.modifiers["oneClickMouse"]){
            el.addEventListener("click", func);
        }

        if(binding.modifiers["doubleClickMouse"]){
            el.addEventListener("dblclick", func);
        }
    }
});

Vue.mount('#app');
