<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <Search />
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-4">
                <Indicator title="Vagas abertas" indicator="25" bg="bg-dark" color="text-white" />
            </div>
            <div class="col-4">
                <Indicator title="Profissionais cadastrados" indicator="300" bg="bg-dark" color="text-white" />
            </div>
            <div class="col-4">
                <Indicator title="Visitantes online" :indicator="usersOnline" bg="bg-light" color="text-dark" />
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
        },
        data: () => ({
            usersOnline: 0
        }),
        methods:{
            getUsersOnline(){
                this.usersOnline = Math.floor(Math.random() * 101);
            }
        },
        created(){
            setInterval(this.getUsersOnline, 1000);
        }
    }
</script>

<style scoped></style>
