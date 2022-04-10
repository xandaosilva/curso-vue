const vm = new Vue({
    el:"#app",
    data:{
        msg: "",
        cliques: 0,
        formulario: "",
        teclas: ""
    },
    methods:{
        prevenirComportamentoPadrao(){
            this.msg = "Comportamento padrão ativado";
        },
        executarUmaVez(){
            this.cliques += 1;
        },
        prevenirUmaVez(){
            this.formulario = "Prevenindo o comportamento padrão";
        },
        capturandoTeclas(event){
            this.teclas += event.key;
        }
    }
});