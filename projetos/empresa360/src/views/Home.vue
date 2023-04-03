<template>
    <div>
        <nav class="navbar navbar-light bg-light top-menu">
            <div class="container">
                <a class="navbar-brand" href="#">Empresa 360</a>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/">Sair</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="d-flex">
            <div class="list-group left-menu">
                <a class="list-group-item list-group-item-action" href="#"><i class="bi bi-speedometer2"></i> Dashboard</a>
            </div>
            <div class="w-100">
                <nav aria-label="breadcrumb" class="pt-1 ps-3">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>
                <div class="container-fluid">
                    <h1 class="mt-4">Visões relacionadas ao menu</h1>
                    <p>Aqui podemos apresentar as views de acordo com as opções do menu.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { RouterLink } from 'vue-router';

    export default {
        name: "Home",
        components: { RouterLink }
    }
</script>

<style scoped>
    .top-menu {
        border-bottom: solid 1px #ccc;
    }

    .left-menu {
        border-right: solid 1px #ccc;
        width: 250px;
    }

    .list-group-item {
        border-top: none;
        border-right: none;
    }
</style>
