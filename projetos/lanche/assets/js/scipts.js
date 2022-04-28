const vm = new Vue({
    el: "#app",
    data: {},
    methods: {},
    computed: {
        pao(){
            return ["assets/img/padrao/pao_superior.png", "assets/img/padrao/pao_inferior.png"];
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