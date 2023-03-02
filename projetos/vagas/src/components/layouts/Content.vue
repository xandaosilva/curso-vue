<template>
    <div>
        <h1>Component Content</h1>
        <p>Propriedade $style: {{ $style }}</p>
        <div :class="$style['test-1']">Teste</div>
        <div :id="$style['test-2']">Teste</div>
        <Home />
        <Publish />
    </div>
</template>

<script>
    import Home from '@/components/views/Home.vue'
    import Publish from '@/components/views/Publish.vue'

    export default {
        name: "Content",
        components: {
            Home,
            Publish
        }
    }
</script>

<style module>
    .test-1{
        background-color: red;
    }
    #test-2{
        background-color: yellow;
    }
</style>
