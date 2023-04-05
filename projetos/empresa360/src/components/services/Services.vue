<template>
    <div>
        <h5>Serviços</h5>
        <hr>
        <div class="row">
            <div class="col mb-2" v-for="object in obj" :key="object.id">
                <div class="card" style="width: 11rem;">
                    <img :src="`/img/${object.icon}`" alt="Serviços" class="card-img-top">
                    <div class="card-body text-center">
                        <p class="card-text">{{ object.service }}</p>
                    </div>
                </div>
            </div>
        </div>
        <RouterView class="mt-3" />
    </div>
</template>

<script>
    import ApiMixin from '@/mixins/ApiMixin';
    import { RouterView } from 'vue-router';

    export default {
    name: "Services",
    mixins: [ApiMixin],
    created() {
        this.getDataApi("http://localhost:3000/services");
    },
    components: { RouterView }
}
</script>

<style scoped></style>
