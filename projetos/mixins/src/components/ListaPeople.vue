<template>
    <div>
        <h3>Lista de Pessoas</h3>
        <input type="text" placeholder="Nome da pessoa" v-model="item">
        <button type="button" @click="addItem">Adicionar</button>
        <ul>
            <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    import ListMixin from '@/mixins/ListMixin.js';

    export default{
        name: "ListPeople",
        mixins: [ListMixin]
    }
</script>

<style scoped></style>
