<template>
    <div>
        <div v-if="tipo === 'socorristas'">
            <select class="form-control form-control-sm" v-model="turno">
                <option value="">Todos</option>
                <option value="manhã">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
            </select>
        </div>
        <item v-for="(item, indice) in itens" :key="indice" :dados="item" />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Item from '@/components/Item.vue'

export default {
    name: 'ListaItens',
    data: () => ({
        turno: ""
    }),
    components: { 
        Item
    },
    props: {
        tipo: String
    },
    computed:{
        ...mapState({
            enfermeiros: state => state.enfermeiros,
            //socorristas: state => state.socorristas,
            medicos: state => state.medicos,
            carros: state => state.equipamentos.carros,
            telefones: state => state.equipamentos.telefones,
            kitsDeReanimacao: state => state.equipamentos.kitsDeReanimacao
        }),
        itens(){
            switch(this.tipo){
                case "enfermeiros": return this.enfermeiros;
                case "socorristas": return this.$store.getters.socorristasPorTurno(this.turno);
                case "medicos": return this.medicos;
                case "carros": return this.carros;
                case "telefones": return this.telefones;
                case "kits-de-reanimacao": return this.kitsDeReanimacao;
            }
            return [];
        }
    }
}
</script>