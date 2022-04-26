const vm = new Vue({
    el: "#app",
    data: {
        saldo: 300.00,
        exibirSaldo: true,
        idade: 0,
        nota: 0
    },
    methods: {
        setIdade(){
            this.idade = inputIdade.value;
        },
        
        setNota(){
            this.nota = inputNota.value;
        }
    }
})