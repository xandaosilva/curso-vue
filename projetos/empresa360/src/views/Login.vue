<template>
    <div>
        <h3>Login</h3>
        <RouterLink to="/home">Navegar para "/home"</RouterLink>
    </div>
</template>

<script>
    import { RouterLink } from 'vue-router';

    export default {
        name: "Login",
        components: { RouterLink }
    }
</script>

<style scoped></style>
