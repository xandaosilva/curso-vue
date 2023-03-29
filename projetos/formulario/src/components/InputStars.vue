<template>
    <div>
        <i v-for="star in stars" :key="star.id" :class="star.style" @click="toAssess(star.id)"></i>
    </div>
</template>

<script>
    export default {
        name: "InputStars",
        data: () => ({
            stars: [],
            assessment: 0
        }),
        props: {
            numberStars: {
                type: Number,
                required: true
            }
        },
        methods:{
            initStars(){
                for(let i = 0; i < this.numberStars; i++){
                    this.stars[i] = { id: i, style: "bi bi-star star" };
                }
            },
            toAssess(star){
                this.initStars();
                this.assessment = star + 1;

                for(let i = 0; i < this.assessment; i++){
                    this.stars[i].style = "bi bi-star-fill star completed";
                }

                // this.$emit("toAssess", this.assessment);
                this.$emit("update:toAssess", this.assessment);
            }
        },
        created(){
            this.initStars();
        }
    }
</script>

<style scoped>
    .star{
        font-size: 1.5rem;
        color: #999999;
        margin-left: 1px;
        margin-right: 1px;
    }
    .completed{
        color: #FFCC00;
    }
</style>
