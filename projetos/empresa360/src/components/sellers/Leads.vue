<template>
    <div>
        <h5>Leads</h5>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Telefone</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="object in obj" :key="object.id">
                    <td>{{ object.id }}</td>
                    <td>{{ object.name }}</td>
                    <td>{{ object.phone }}</td>
                    <td>
                        <!-- <RouterLink :to="`/home/sellers/leads/${lead.id}`" class="btn btn-sm btn-primary"> -->
                        <RouterLink :to="{ name: 'lead', params: { id: object.id, otherParam: `teste_${object.id}` } }" class="btn btn-sm btn-primary">
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
    name: "Leads",
    mixins: [ApiMixin],
    created() {
        this.getDataApi("http://localhost:3000/leads");
    },
    components: { RouterLink }
}
</script>

<style scoped></style>
