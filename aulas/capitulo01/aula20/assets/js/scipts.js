const vm = new Vue({
    el: "#app",
    data: {
        paciente: "",
        pacientes:[
            { nome: "Jorge", idade: 25 },
            { nome: "Joao", idade: 37 },
            { nome: "José", idade: 16 },
            { nome: "Júnior", idade: 48 },
            { nome: "Júlio", idade: 77 },
        ],
        lista:[],
    },
    methods: {},
    watch: {
        paciente(valorNovo){
            this.lista = this.pacientes.filter((p) => p.nome.match(valorNovo));
        }
    }
})