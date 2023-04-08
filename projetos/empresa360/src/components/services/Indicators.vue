<template>
    <div>
        <h5>Indicadores</h5>
        <p>Poderíamos recuperar os indicadores do serviço id - {{ id }}</p>
    </div>
</template>

<script>
    export default {
        name: "Indicators",
        props: ["id"],
        created(){
            // console.log("Parâmetro via props", this.id);
        }
    }
</script>

<style scoped></style>
