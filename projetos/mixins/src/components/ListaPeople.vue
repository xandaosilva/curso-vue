<template>
    <div>
        <h3>{{ title }}</h3>
        <input type="text" placeholder="Nome da pessoa" v-model="item">
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
        name: "ListPeople",
        data: () => ({ 
            title: "Lista de Pessoas" 
        }),
        mixins: [ListMixin, RemoveItemListMixin]
    }
</script>

<style scoped></style>
