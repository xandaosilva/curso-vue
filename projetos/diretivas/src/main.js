import { createApp } from 'vue';
import App from './App.vue';

const Vue = createApp(App);

Vue.directive("teste", {
    created(){
        console.log("A diretiva foi aplicada com sucesso.");
    }
});

Vue.directive("texto", {
    created(el){
        el.style.color = "cyan";
        el.style.fontSize = "2rem";
        
        let text = el.innerText;
        let textLength = text.length;
        let textModified = "";

        if(textLength > 25){
            textModified = text.substring(0, 22)  + "...";
        }
        else{
            textModified = text;
        }


        el.innerText = textModified;

        console.log(el);
        console.log("Texto original:", text);
        console.log("Tamanho do texto:", textLength);
        console.log("Texto modificado:", textModified);
    }
});

Vue.mount('#app');
