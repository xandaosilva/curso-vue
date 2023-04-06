<template>
    <div>
        <h5>Contratos</h5>
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
                    <td>{{ object.leadId }}</td>
                    <td>{{ object.serviceId }}</td>
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
    mixins: [ApiMixin],
    created() {
        this.getDataApi("http://localhost:3000/contracts");
    },
    components: { RouterLink }
}
</script>

<style scoped></style>
