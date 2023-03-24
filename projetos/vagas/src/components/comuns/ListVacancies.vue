<template>
    <div class="row mt-5" v-for="(vacancy, index) in vacancies" :key="index">
        <div class="col">
            <Vacancy v-bind="vacancy" />
        </div>
    </div>
</template>

<script>
    import Vacancy from '@/components/comuns/Vacancy.vue';

    export default{
        name: "ListVacancies",
        data: () => ({
            vacancies: []
        }),
        components: {
            Vacancy
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
