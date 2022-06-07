const vm = new Vue({
    el: "#app",
    data: {
        resultado: ""
    },
    methods: {
        cadastrar(){
            let nome = this.$refs.inputNome.value;
            let comentario = this.$refs.formulario[1].value;
            this.resultado = `${nome} comentou: ${comentario}`;   
        }
    },
    computed:{}
})