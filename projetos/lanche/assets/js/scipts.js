const vm = new Vue({
    el: "#app",
    data: {
        inputTipoDePao: "",
    },
    methods: {},
    computed: {
        pao(){
            switch(this.inputTipoDePao){
                case "gergelim":
                    return ["assets/img/pao_gergelim_superior.png", "assets/img/pao_gergelim_inferior.png"];
                case "australiano":
                    return ["assets/img/pao_australiano_superior.png", "assets/img/pao_australiano_inferior.png"];
                default:
                    return ["assets/img/padrao/pao_superior.png", "assets/img/padrao/pao_inferior.png"];
            }
        },
        alface(){
            return "assets/img/padrao/alface.png";
        },
        ketchup(){
            return "assets/img/padrao/molho.png";
        },
        maionese(){
            return "assets/img/padrao/molho.png";
        },
        mostarda(){
            return "assets/img/padrao/molho.png";
        },
        hamburger(){
            return "assets/img/padrao/hamburguer.png";
        }
    }
})