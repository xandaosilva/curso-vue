const vm = new Vue({
    el: "#app",
    data: {
        inputTipoDePao: "",
        inputSaladas: [],
        inputMolhos: [],
        inputHamburger: "",
        etapa: 1,
        inputNome: "",
        inputEndereco: "",
        novoPedidoAssincrono: null
    },
    methods: {
        fazerPedido(){
            if(this.inputTipoDePao && this.inputHamburger)
                this.etapa = 2;
            else 
                alert("Você deve selecionar pelo menos um tipo de pão e um hambúrger.");
        },
        confirmarPedido(){
            if(this.inputNome && this.inputEndereco){
                this.etapa = 3;
                this.novoPedidoAssincrono = setTimeout(() => this.novoPedido(), 7000);
            }
            else
                alert("Informe seu nome e seu endereço.");
        },
        novoPedido(){
            this.etapa = 1;
            this.inputTipoDePao = "";
            this.inputSaladas = [];
            this.inputMolhos = [];
            this.inputHamburger = "";
            this.inputNome = "";
            this.inputEndereco = "";
        },
    },
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
            if(this.inputSaladas.includes("alface"))
                return "assets/img/alface.png";
            return "assets/img/padrao/alface.png";
        },
        ketchup(){
            if(this.inputMolhos.includes("ketchup"))
                return "assets/img/ketchup.png";
            return "assets/img/padrao/molho.png";
        },
        maionese(){
            if(this.inputMolhos.includes("maionese"))
                return "assets/img/maionese.png";
            return "assets/img/padrao/molho.png";
        },
        mostarda(){
            if(this.inputMolhos.includes("mostarda"))
                return "assets/img/mostarda.png";    
            return "assets/img/padrao/molho.png";
        },
        hamburger(){
            switch(this.inputHamburger){
                case "bovino":
                    return "assets/img/bovino.png";
                case "frango":
                    return "assets/img/frango.png";
                case "soja":
                    return "assets/img/soja.png";
                default:
                    return "assets/img/padrao/hamburguer.png";
            }
        }
    },
    watch: {
        etapa(novoValor){
            if(novoValor === 1)
                clearTimeout(this.novoPedidoAssincrono);
        }
    }
})