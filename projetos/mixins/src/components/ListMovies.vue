<template>
    <div>
        <h3>Lista de Filmes</h3>
        <input type="text" placeholder="Nome do filme" v-model="item">
        <button type="button" @click="addItem">Adicionar</button>
        <button type="button" @click="removeItem">Remover</button>
        <ul>
            <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    import ListMixin from '@/mixins/ListMixin.js';
    import RemoveItemListMixin from '@/mixins/RemoveItemListMixin';

    export default{
        name: "ListMovie",
        mixins: [ListMixin, RemoveItemListMixin]
    }
</script>

<style scoped></style>
