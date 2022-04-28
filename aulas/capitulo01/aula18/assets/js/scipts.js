const vm = new Vue({
    el: "#app",
    data: {
        pacientes: [],
    },
    methods: {
        adicionarPaciente(){
            this.pacientes.push({ nome: inputNome.value, idade: inputIdade.value, plano: inputPlano.value });
        }
    },
    computed: {
        ultimoPaciente(){
            let key = this.pacientes.length - 1;
            let txt = "";

            txt += `Paciente: ${this.pacientes[key].nome} - Idade: ${this.pacientes[key].idade} - Plano: ${this.pacientes[key].plano}`;
            
            return txt;
        },
        pacientesPlanoOuro(){
            return this.pacientes.filter((item) => item.plano === "ouro");
        }
    }
})