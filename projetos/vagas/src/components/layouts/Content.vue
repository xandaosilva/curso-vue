<template>
    <div>
        <h1>Component Content</h1>
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
        },
        methods: {

        },
        beforeCreate(){
            console.log("Before create");
        },
        created() {
            console.log("Created");
        },
        beforeMount() {
            console.log("Before mount");
        },
        mounted() {
            console.log("Mounted");
        },
        beforeUpdate() {
            console.log("Before update");
        },
        updated() {
            console.log("Updated");
        },
        beforeUnmount() {
            console.log("Befora unmount");
        },
        unmounted() {
            console.log("Unmounted");
        },
        errorCaptured() {
            console.log("Error captured");
        },
        renderTracked() {
            console.log("Render tracked");
        },
        renderTriggered() {
            console.log("Render triggered");
        },
        activated() {
            console.log("Activated");
        },
        deactivated() {
            console.log("Deactivated");
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
