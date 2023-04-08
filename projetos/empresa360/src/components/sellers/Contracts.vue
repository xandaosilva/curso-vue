<template>
    <div>
        <div class="card mb-4">
            <div class="card-header">Contratos</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-6">
                        <label class="form-label">ID Contrato:</label>
                        <input type="text" class="form-control" v-model="formSearch.id_like">
                    </div>
                    <div class="col-6">
                        <label class="form-label">Data início:</label>
                        <div class="input-group">
                            <input type="date" class="form-control" v-model="formSearch.initial_date_gte">
                            <input type="date" class="form-control" v-model="formSearch.initial_date_lte">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-primary" @click="handleSearch">Pesquisar</button>
            </div>
        </div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Lead</th>
                    <th scope="col">Serviço</th>
                    <th scope="col">Data inicial</th>
                    <th scope="col">Data final</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="object in obj" :key="object.id">
                    <td>{{ object.id }}</td>
                    <td>{{ object.lead.name }}</td>
                    <td>{{ object.service.service }}</td>
                    <td>{{ object.initial_date }}</td>
                    <td>{{ object.final_date }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import ApiMixin from '@/mixins/ApiMixin';

    export default {
    name: "Contracts",
    data: () => ({
        paramsRelationship: "_expand=lead&_expand=service",
        formSearch: {
            id_like: "",
            initial_date_gte: "",
            initial_date_lte: ""
        }
    }),
    methods: {
        handleSearch(){
            const url = `http://localhost:3000/contracts?${this.paramsRelationship}`;
            this.getDataApi(url, this.formSearch);
        }
    },
    mixins: [ApiMixin],
    created() {
        const url = `http://localhost:3000/contracts?${this.paramsRelationship}`;
        this.getDataApi(url,this.$route.query);
    },
    beforeRouteUpdate(to, from, next){
        const url = `http://localhost:3000/contracts?${this.paramsRelationship}`;
        this.getDataApi(url, to.query);
        next();
    }
}
</script>

<style scoped></style>
