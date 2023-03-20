<template>
    <div>
        <div class="div-btn">
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Vagas favoritas</button>
        </div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Vagas favoritadas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="list-group">
                    <li class="list-group-item" v-for="(vacancy, index) in vacancies" :key="index">{{ vacancy }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "VacanciesFavorites",
        data: () => ({
            vacancies: []
        }),
        mounted(){
            this.emitter.on("likeVacancy", (title) => {
                this.vacancies.push(title);
            });

            this.emitter.on("dislikeVacancy", (title) => {
                let index = this.vacancies.indexOf(title);
                if(index !== -1){
                    this.vacancies.splice(index, 1);
                }
            });
        }
    }
</script>

<style scoped>
    .div-btn{
        position: absolute;
        z-index: 1;
        top: 70px;
        right: 0px;
    }
</style>
