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
            vacancies: [
                {
                    title: 'Analista Programador PHP Pleno',
                    description: 'Profissional com conhecimentos em PHP, Laravel e MySQL. Necessário 3 anos de experiências. Atuará na manutenção de sistemas legados da empresa.',
                    salary: 6000,
                    modality: 'Home Office',
                    type: 'PJ',
                    publication: '2021-10-10'
                },
                {
                    title: 'Programador JavaScript Angular',
                    description: 'Profissional com conhecimentos avançados em JavaScript e Angular.',
                    salary: 5000,
                    modality: 'Presencial',
                    type: 'CLT',
                    publication: '2021-10-07'
                },
                {
                    title: 'Programador JavaScript Vue',
                    description: 'Profissional com conhecimentos avançados em JavaScript e Vue.',
                    salary: 5000,
                    modality: 'Home Office',
                    type: 'CLT',
                    publication: '2021-10-06'
                },
                {
                    title: 'Analista de Banco de Dados Sênior',
                    description: 'Domínio dos bancos de dados SQL Server, Oracle, Postgre e MySQL',
                    salary: 9000,
                    modality: 'Presencial',
                    type: 'PJ',
                    publication: '2021-10-06'
                },
                {
                    title: 'Programador Web Júnior',
                    description: 'Conhecimentos básicos em HTML, CSS, JavaScript, Bootstrap, PHP e MySQL',
                    salary: 3000,
                    modality: 'Presencial',
                    type: 'CLT',
                    publication: '2021-10-05'
                }
            ]
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
