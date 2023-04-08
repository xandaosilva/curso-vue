<template>
    <div>
        <h5>Opções</h5>
        <p>Poderíamos recuperar as opções do serviço id - {{ id }}</p>
    </div>
</template>

<script>
    export default {
        name: "Options",
        props: ["id"],
        created(){
            // console.log("Parâmetro via props", this.id);
        },
        beforeRouteUpdate(){
            console.log("Guarda de rota beforeRouteUpdate.");
        }
    }
</script>

<style scoped></style>
