<template>
    <div>
        <h3>Home</h3>
        <RouterLink to="/login">Navegar para "/login"</RouterLink>
    </div>
</template>

<script>
    import { RouterLink } from 'vue-router';

    export default {
        name: "Home",
        components: { RouterLink }
    }
</script>

<style scoped></style>
