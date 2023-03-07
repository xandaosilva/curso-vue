<template>
    <div class="card">
        <div class="card-header bg-dark text-white">{{ title }}</div>
        <div class="card-body">
            <p>{{ description }}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Salário: R${{ salary }} | Modalidade: {{ getModality }} | Tipo: {{ getType }} | Publicação: {{ getPublication }}</small>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Vacancy",
        props: {
            title: {
                type: String,
                required: true,
                validator(p){
                    if(p.length < 10)
                        return false;
                    return true;
                }
            }, 
            description: {
                type: String,
                required: true,
                default: "O contratante não adicionou uma descrição para esta vaga."
            }, 
            salary: {
                type: Number,
                required: true
            }, 
            modality: {
                type: String,
                required: true
            }, 
            type: {
                type: String,
                required: true
            }, 
            publication: {
                type: String,
                required: true
            }
        },
        computed: {
            getModality(){
                switch(this.modality){
                    case "1": return "Home Office";
                    case "2": return "Presencial";
                }
                return "";
            },
            getType(){
                switch(this.type){
                    case "1": return "CLT";
                    case "2": return "PJ";
                }
                return "";
            },
            getPublication(){
                let currentDate = new Date(this.publication);
                return currentDate.toLocaleDateString("pt-BR");
            }
        }
    }
</script>

<style scoped></style>
