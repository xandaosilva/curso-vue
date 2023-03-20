<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <h4>Apresente a sua vaga para milhares de profissionais e de graça</h4>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <label class="form-label">Título da vaga</label>
                <input type="text" class="form-control" v-model="title">
                <div class="form-text">Por exemplo: Programador JavaScript e VueJS.</div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <label class="form-label">Descrição da vaga</label>
                <textarea class="form-control" v-model="description"></textarea>
                <div class="form-text">Informe os detalhes da vaga.</div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <label for="" class="form-label">Salário</label>
                <input type="number" class="form-control" v-model="salary">
                <div class="form-text">Informe o salário.</div>
            </div>
            <div class="col">
                <label for="" class="form-label">Modalidade</label>
                <select class="form-select" v-model="modality">
                    <option value="" disabled>Selecione</option>
                    <option value="1">Home Office</option>
                    <option value="2">Presencial</option>
                </select>
                <div class="form-text">Informe onde as atividades serão realizadas.</div>
            </div>
            <div class="col">
                <label for="" class="form-label">Tipo</label>
                <select class="form-select" v-model="type">
                    <option value="" disabled>Selecione</option>
                    <option value="1">CLT</option>
                    <option value="2">PJ</option>
                </select>
                <div class="form-text">Informe o tipo de contratação.</div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <button type="submit" class="btn btn-primary" @click="createVacancy()">Cadastrar</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Publish",
        data: () => ({
            title: "",
            description: "",
            salary: "",
            modality: "",
            type: "",
        }),
        methods: {
            createVacancy(){
                let currentDate = new Date(Date.now());
                let vacancies = JSON.parse(localStorage.getItem("vacancies"));
                
                if(!vacancies){
                    vacancies = [];
                }

                let vacancy = {
                    title: this.title, 
                    description: this.description, 
                    salary: this.salary, 
                    modality: this.modality, 
                    type: this.type,
                    publication: currentDate.toISOString()
                }

                vacancies.push(vacancy);
                localStorage.setItem("vacancies", JSON.stringify(vacancies));
                this.emitter.emit("alert");
                this.clearForm();
            },
            clearForm(){
                this.title = "";
                this.description = "";
                this.salary = "";
                this.modality = "";
                this.type = "";
            }
        }
    }
</script>

<style scoped></style>
