<template>
    <div>
        <h5>Vendas</h5>
        <hr>
        <RouterView />
    </div>
</template>

<script>
import { RouterView } from 'vue-router';

    export default {
    name: "Sellers",
    components: { RouterView }
}
</script>

<style scoped></style>
