<template>
    <div class="card">
        <div class="card-header bg-primary text-white">{{ obj.service }}</div>
        <div class="card-body">
            <p class="card-text">{{ obj.description }}</p>
        </div>
    </div>
</template>

<script>
    import ApiMixin from '@/mixins/ApiMixin.js';

    export default {
        name: "Service",
        mixins: [ApiMixin],
        props: ["id"],
        created(){
            this.getDataApi(`http://localhost:3000/services/${this.id}`);
        },
        beforeRouteUpdate(to){
            if(to.params.id !== undefined){
                this.getDataApi(`http://localhost:3000/services/${to.params.id}`);
            }
        },
        // watch:{
        //     $route(to){
        //         if(to.params.id !== undefined){
        //             this.getDataApi(`http://localhost:3000/services/${to.params.id}`);
        //         }
        //     }
        // },
    }
</script>

<style scoped></style>
