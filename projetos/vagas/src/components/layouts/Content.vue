<template>
    <div>
        <KeepAlive>
            <component :is="content" />
        </KeepAlive>
    </div>
</template>

<script>
    import Home from '@/components/views/Home.vue';
    import Publish from '@/components/views/Publish.vue';

    export default {
        name: "Content",
        props: {
            content: {
                type: String,
                required: true
            }
        },
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
