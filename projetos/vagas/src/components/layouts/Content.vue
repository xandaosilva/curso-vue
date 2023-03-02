<template>
    <div>
        <p>Content</p>
        <Home />
        <Publish />
    </div>
</template>

<script>
    import Home from '../views/Home.vue'
    import Publish from '../views/Publish.vue'

    export default {
        name: "Content",
        components: {
            Home,
            Publish
        }
    }
</script>

<style></style>
