<template>
    <div class="card">
        <div class="card-header bg-dark text-white">{{ title }}</div>
        <div class="card-body">
            <p>{{ description }}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Salário: R${{ salary }} | Modalidade: {{ modality }} | Tipo: {{ type }} | Publicação: {{ publication }}</small>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Vacancy",
        props: ["title", "description", "salary", "modality", "type", "publication"]
    }
</script>

<style scoped></style>
