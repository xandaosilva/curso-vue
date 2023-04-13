import Vuex from 'vuex';

export default new Vuex.Store({
    state:{
        titulo: "Emergências Médicas",
        equipe:{
            enfermeiro: "",
            socorrista: "",
            medico: "",
            carro: "",
            telefone: "",
            kitDeReanimacao: ""
        },
        enfermeiros: [],
        socorristas: [],
        medicos: [],
        equipamentos: {
            carros: [],
            telefones: [],
            kitsDeReanimacao: []
        }
    },
    getters:{
        totalEnfermeiros(state){
            return state.enfermeiros.length;
        },
        socorristasPorTurno(state){
            return (turno) => !turno ? state.socorristas : state.socorristas.filter(s => s.turno === turno);
        },
        totalSocorristas: state => state.socorristas.length,
        totalSocorristasPorTurno: (state, getters) => turno => getters.socorristasPorTurno(turno).length
    },
    mutations:{
        setItemEquipe: (state, item) => {
            let t = item.tipo;
            let d = item.dados;

            if(t === "enfermeiros") state.equipe.enfermeiro = d.nome;
            if(t === "socorristas") state.equipe.socorrista = d.nome;
            if(t === "medicos") state.equipe.medico = d.nome;
            if(t === "carros") state.equipe.carro = d.placa;
            if(t === "telefones") state.equipe.telefone = d.telefone;
            if(t === "kits-de-reanimacao") state.equipe.kitDeReanimacao = d.kit;
        },
        setEnfermeiros: (state, payload) => {
            state.enfermeiros = payload;
        },
        setSocorristas: (state, payload) => {
            state.socorristas = payload;
        },
        setMedicos: (state, payload) => {
            state.medicos = payload;
        },
        setCarros: (state, payload) => {
            state.equipamentos.carros = payload;
        },
        setTelefones: (state, telefones) => {
            state.equipamentos.telefones = telefones;
        },
        setKitsDeReanimacao: (state, payload) => {
            state.equipamentos.kitsDeReanimacao = payload;
        }
    },
    actions:{
        adicionarEquipamentos(context, { carros, telefones, kitsDeReanimacao }){
            context.commit("setCarros", carros);
            context.commit("setTelefones", telefones);
            context.commit("setKitsDeReanimacao", kitsDeReanimacao);
        }
    }
});
