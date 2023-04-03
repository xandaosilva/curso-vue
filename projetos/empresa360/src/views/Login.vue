<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <a class="navbar-brand" href="#">Empresa 360</a>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/">Voltar</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="row mt-5">
            <div class="col-6 offset-3">
                <div class="card">
                    <p class="card-header">Entrar</p>
                    <div class="card-body">
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="E-mail">
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" placeholder="Senha">
                        </div>
                        <button class="btn btn-primary" @click="navigateTo">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { RouterLink } from 'vue-router';

    export default {
        name: "Login",
        components: { RouterLink },
        methods: {
            navigateTo(){
                this.$router.push("/home");
                // this.$router.push({ path: "/home" });
                // this.$router.replace("/home");
                // this.$router.replace({ path: "/home" });
                // this.$router.forward();
                // this.$router.back();
                // this.$router.go(2);
            }
        }
    }
</script>

<style scoped></style>
