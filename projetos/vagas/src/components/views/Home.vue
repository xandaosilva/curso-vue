<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <Search />
            </div>
        </div>
        <div class="row mt-5" v-for="(vacancy, index) in vacancies" :key="index">
            <div class="col">
                <!-- <Vacancy 
                    :title="vacancy.title" 
                    :description="vacancy.description" 
                    :salary="vacancy.salary" 
                    :modality="vacancy.modality" 
                    :type="vacancy.type"
                    :publication="vacancy.publication"
                /> -->
                <Vacancy v-bind="vacancy" />
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
    import Vacancy from '@/components/comuns/Vacancy.vue';

    export default{
        name: "Home",
        components: {
            Indicator,
            Search,
            Vacancy
        },
        data: () => ({
            usersOnline: 0,
            vacancies: []
        }),
        methods:{
            getUsersOnline(){
                this.usersOnline = Math.floor(Math.random() * 101);
            }
        },
        created(){
            setInterval(this.getUsersOnline, 1000);
        },
        activated(){
            this.vacancies = JSON.parse(localStorage.getItem("vacancies"));
        },
        mounted(){
            this.emitter.on("filterVacancies", vacancy => {
                const vacancies = JSON.parse(localStorage.getItem("vacancies"));
                this.vacancies = vacancies.filter(reg => reg.title.toLowerCase().includes(vacancy.title.toLowerCase()));
            });
        }
    }
</script>

<style scoped></style>
