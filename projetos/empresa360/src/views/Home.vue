<template>
    <div>
        <nav class="navbar navbar-light bg-light top-menu">
            <div class="container">
                <RouterLink class="navbar-brand" to="/home">Empresa 360</RouterLink>
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
                <RouterLink class="list-group-item list-group-item-action" to="/home/dashboard" exact-active-class="active"><i class="bi bi-speedometer2"></i> Dashboard</RouterLink>
                <RouterLink class="list-group-item list-group-item-action" to="/home/sellers" exact-active-class="active"><i class="bi bi-cart"></i> Vendas</RouterLink>
                <RouterLink class="list-group-item list-group-item-action" to="/home/sellers/leads" exact-active-class="active"><i class="bi bi-caret-right"></i> Leads</RouterLink>
                <RouterLink class="list-group-item list-group-item-action" :to="{ name: 'contracts' }" exact-active-class="active"><i class="bi bi-caret-right"></i> Contratos</RouterLink>
                <RouterLink class="list-group-item list-group-item-action" :to="{ name: 'services' }" exact-active-class="active"><i class="bi bi-card-checklist"></i> Serviços</RouterLink>
            </div>
            <div class="w-100">
                <nav aria-label="breadcrumb" class="pt-1 ps-3">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>
                <div class="container-fluid">
                    <RouterView />
                </div>
            </div>
        </div>
        <div class="footer">
            <RouterView name="footer" />
        </div>
    </div>
</template>

<script>
    import { RouterLink, RouterView } from 'vue-router';

    export default {
        name: "Home",
        components: { RouterLink, RouterView }
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

    .footer{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #ccc;
        text-align: center;
    }

    /* .router-link-active{
        color: #fff;
        background-color: #65a1fa;
        border-color: #65a1fa;
    } */

    /* .router-link-exact-active{
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
    } */
</style>
