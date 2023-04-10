<template>
    <div>
        <div v-if="!pokemon.id">
            Selecione um pokémon
        </div>
        <div v-else>
            <p>Identificador: {{ pokemon.id }}</p>
            <p>Nome: {{ pokemon.name }}</p>
            <p>Tipo: {{ pokemon.type }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sobre",
    props:{
        pokemon: Object
    }
}
</script>