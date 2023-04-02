<template>
  <div style="display: flex; flex-direction: row;">
    <div style="flex-basis: 33%;">
      <ListGames />
    </div>
    <div style="flex-basis: 33%;">
      <ListMovies />
    </div>
    <div style="flex-basis: 33%;">
      <ListaPeople />
    </div>
  </div>
</template>

<script>
  import ListGames from '@/components/ListGames.vue';
  import ListMovies from '@/components/ListMovies.vue';
  import ListaPeople from '@/components/ListaPeople.vue';

  export default {
    name: 'App',
    components: {
      ListGames,
      ListMovies,
      ListaPeople
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
