<template>
    <div>
        <div class="card mb-4">
            <div class="card-header">Contratos</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-6">
                        <label class="form-label">ID Contrato:</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-6">
                        <label class="form-label">Data início:</label>
                        <div class="input-group">
                            <input type="date" class="form-control">
                            <input type="date" class="form-control">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-primary">Pesquisar</button>
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
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="object in obj" :key="object.id">
                    <td>{{ object.id }}</td>
                    <td>{{ object.lead.name }}</td>
                    <td>{{ object.service.service }}</td>
                    <td>{{ object.initial_date }}</td>
                    <td>{{ object.final_date }}</td>
                    <td>
                        <RouterLink :to="{ name: 'lead', params: { id: object.id } }" class="btn btn-sm btn-primary">
                            <i class="bi bi-pencil-square" style="cursor: pointer;"></i>
                        </RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import ApiMixin from '@/mixins/ApiMixin';
    import { RouterLink } from 'vue-router';

    export default {
    name: "Contracts",
    data: () => ({
        paramsRelationship: "_expand=lead&_expand=service"
    }),
    mixins: [ApiMixin],
    created() {
        const queryParams = new URLSearchParams(this.$route.query).toString();
        const url = `http://localhost:3000/contracts?${this.paramsRelationship}&${queryParams}`;
        this.getDataApi(url);
    },
    beforeRouteUpdate(to, from, next){
        const queryParams = new URLSearchParams(to.query).toString();
        const url = `http://localhost:3000/contracts?${this.paramsRelationship}&${queryParams}`
        this.getDataApi(url);
        next();
    },
    components: { RouterLink }
}
</script>

<style scoped></style>
