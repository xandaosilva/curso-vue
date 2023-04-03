<template>
    <div>
        <h5>Detalhes da lead</h5>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Id</label>
            <div class="col-sm-10">
                <input type="text" class="form-control-plaintext" :value="dataLead.id" readonly>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Nome</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="dataLead.name">
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Telefone</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="dataLead.phone">
            </div>
        </div>
        <div class="col-auto">
            <button type="button" class="btn btn-primary">Atualizar</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Lead",
        data: () => ({
            dataLead: null
        }),
        methods: {
            getDataApi() {
                fetch(`http://localhost:3000/leads/${this.$route.params.id}`).then(response => response.json()).then(response => this.dataLead = response);
            }
        },
        created(){
            this.getDataApi();
        }
    }
</script>

<style scoped></style>
