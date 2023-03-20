<template>
    <div class="card">
        <div class="card-header bg-dark text-white">
            <div class="row">
                <div class="col d-flex justify-content-between">
                    <div>{{ title }}</div>
                    <div>
                        <div class="form-check form-switch">
                            <input type="checkbox" class="form-check-input" v-model="liked">
                            <label class="form-check-label">Favoritar</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
        data: () => ({
            liked: false
        }),
        watch: {
            liked(value){
                if(value){
                    this.emitter.emit("likeVacancy", this.title);
                }
                else{
                    this.emitter.emit("dislikeVacancy", this.title);
                }
            }
        },
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
        },
        methods: {
            
        }
    }
</script>

<style scoped></style>
