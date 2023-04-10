<template>
    <div>
        <p>Identificador: {{ pokemon.id }}</p>
        <p>Nome: {{ pokemon.name }}</p>
        <p>Tipo: {{ pokemon.type }}</p>
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