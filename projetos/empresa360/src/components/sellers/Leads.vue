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
                <tr v-for="lead in dataLead" :key="lead.id">
                    <td>{{ lead.id }}</td>
                    <td>{{ lead.name }}</td>
                    <td>{{ lead.phone }}</td>
                    <td>
                        <RouterLink :to="`/home/sellers/leads/${lead.id}`" class="btn btn-sm btn-primary">
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
