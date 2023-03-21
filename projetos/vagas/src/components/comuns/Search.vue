<template>
    <div class="h-100 p-5 bg-light border rounded-3">
        <h2>Pesquisar vagas</h2>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label for="">Título da vaga</label>
                    <input type="text" class="form-control" placeholder="Pesquise por palavras chaves, por exemplo 'Python', 'Pleno' e 'Analista'" v-model="title">
                    <small class="form-text text-muted">Informe palavras que estejam relacionadas com o título da vaga que você procura</small>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <button class="btn btn-outline-dark mt-2" type="button" @click="searchVacancy()">Buscar</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Search",
        data: () => ({
            title: ""
        }),
        methods: {
            searchVacancy(){
                this.emitter.emit("filterVacancies", { title: this.title });
            }
        }
    }
</script>

<style scoped></style>
