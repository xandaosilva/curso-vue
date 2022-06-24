<template>
    <div>
        <p>Conteúdo</p>
        <Home />
        <PublicarVaga />
    </div>
</template>

<script>
import Home from '../views/Home.vue'
import PublicarVaga from '../views/PublicarVaga.vue'

export default {
    name: 'Conteudo',
    components: {
        Home,
        PublicarVaga
    }
}
</script>

<style>
</style>
