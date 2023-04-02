<template>
    <div>
        <h3>{{ title }}</h3>
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
        data: () => ({
            title: "Lista de Filmes"
        }),
        mixins: [ListMixin, RemoveItemListMixin],
        created(){
            console.log("Lista de Filmes criada.");
        }
    }
</script>

<style scoped></style>
