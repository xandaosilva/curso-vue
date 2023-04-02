<template>
    <div>
        <h3>Lista de Filmes</h3>
        <input type="text" placeholder="Nome do filme" v-model="movie">
        <button type="button" @click="addMovie">Adicionar</button>
        <ul>
            <li v-for="(movie, index) in movies" :key="index">{{ movie }}</li>
        </ul>
    </div>
</template>

<script>
    export default{
        name: "ListMovie",
        data: () => ({
            movies: [],
            movie: ""
        }),
        methods:{
            addMovie(){
                this.movies.push(this.movie);
                this.movie = "";
            }
        }
    }
</script>

<style scoped></style>
