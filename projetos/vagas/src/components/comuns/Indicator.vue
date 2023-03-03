<template>
    <div :class="styles">
        <p>{{ title }}</p>
        <h2>{{ indicator }}</h2>
    </div>
</template>

<script>
    export default{
        name: "Indicator",
        props: ["title", "indicator", "bg", "color"],
        computed:{
            styles(){
                return `h-100 p-5 rounded-3 border ${this.bg} ${this.color}`
            }
        }
    }
</script>

<style></style>
