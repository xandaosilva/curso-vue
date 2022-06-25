<template>
  <div>
    <Topo />
    <Conteudo />
  </div>
</template>

<script>
import Conteudo from './components/layouts/Conteudo.vue'
import Topo from './components/layouts/Topo.vue'

export default {
  name: 'App',
  components: {
    Conteudo,
    Topo
  }
}
</script>

<style>
</style>
