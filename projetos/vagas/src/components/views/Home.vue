<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <Search />
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-4">
                <Indicator />
            </div>
            <div class="col-4">
                <Indicator />
            </div>
            <div class="col-4">
                <Indicator />
            </div>
        </div>
    </div>
</template>

<script>
    import Indicator from '@/components/comuns/Indicator.vue';
    import Search from '@/components/comuns/Search.vue';

    export default{
        name: "Home",
        components: {
            Indicator,
            Search
        }
    }
</script>

<style scoped></style>
