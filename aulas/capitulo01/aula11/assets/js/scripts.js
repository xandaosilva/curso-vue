const vm = new Vue({
    el: "#app",
    data: {},
    methods:{
        selecionarElementoFilho(){
            console.log(inputTexto, `tipo: ${inputTexto.type}, valor ${inputTexto.value}`);
            console.log(opcoes, `tipo: ${opcoes.type}, valor: ${opcoes.value}`);
            console.log(paragrafo);
            console.log(bloco.innerHTML);
        }
    }
})
