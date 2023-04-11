<template>
    <div>
        <div v-if="!pokemon.id">
            Selecione um pokémon
        </div>
        <div v-else>
            <table class="table text-white">
                <tbody>
                    <tr v-for="(skill, index) in pokemon.skills" :key="index">
                        <td>{{ skill }}</td>
                        <td class="d-flex justify-content-end">
                            <button type="button" class="btn btn-danger btn-sm" @click="$emit('handleRemoveSkill', index)">x</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <input type="text" class="form-control" placeholder="Adicionar habilidade" v-model="skillPokemon" @keyup.enter="handleAddSkill">
        </div>
    </div>
</template>

<script>
export default{
    name: "Habilidades",
    data: () => ({
        skillPokemon: ""
    }),
    props:{
        pokemon: Object
    },
    methods:{
        handleAddSkill(){
            this.$emit("handleAddSkill", this.skillPokemon);
            this.skillPokemon = "";
        }
    }
}
</script>

<style scoped>
.table td {
    border: none;
}
</style>