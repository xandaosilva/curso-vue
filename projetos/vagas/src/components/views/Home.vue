<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <div class="h-100 p-5 bg-light border rounded-3">
                    <h2>Pesquisar vagas</h2>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="">Título da vaga</label>
                                <input type="text" class="form-control" placeholder="Pesquise por palavras chaves, por exemplo 'Python', 'Pleno' e 'Analista'">
                                <small class="form-text text-muted">Informe palavras que estejam relacionadas com o título da vaga que você procura</small>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                    <div class="col">
                        <button class="btn btn-outline-dark mt-2" type="button">Buscar</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-4">
                <div class="h-100 p-5 rounded-3 border bg-dark text-white">
                    <p>Vagas abertas</p>
                    <h2>25</h2>
                </div>
            </div>
            <div class="col-4">
                <div class="h-100 p-5 rounded-3 border bg-dark text-white">
                    <p>Profissionais cadastrados</p>
                    <h2>125</h2>
                </div>
            </div>
            <div class="col-4">
                <div class="h-100 p-5 rounded-3 border bg-light text-dark">
                    <p>Visitantes online</p>
                    <h2>15</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Home"
    }
</script>

<style scoped></style>
