<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <PesquisarVaga />
            </div>
        </div>
        <div class="row mt-5">
        <div class="col-4">
            <Indicador titulo="Vagas abertas" indicador="100" />
        </div>

        <div class="col-4">
            <Indicador titulo="Profissionais cadastrados" indicador="225" />
        </div>

        <div class="col-4">
            <Indicador titulo="Visitantes online" indicador="25" />
        </div>
    </div>
    </div>
</template>

<script>
import Indicador from "../comuns/Indicador.vue"
import PesquisarVaga from "../comuns/PesquisarVaga.vue"

export default{
    name: 'Home',
    components: {
        PesquisarVaga,
        Indicador
    }
}
</script>

<style>
</style>