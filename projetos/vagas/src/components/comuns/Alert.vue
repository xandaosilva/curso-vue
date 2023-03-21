<template>
    <div :class="alertStyle" role="alert">
        <slot name="title"></slot>
        <hr>
        <slot name="description"></slot>
    </div>
</template>

<script>
    export default{
        name: "Alert",
        props: { type: String },
        computed: {
            alertStyle(){
                switch(this.type){
                    case "error":
                        return "alert alert-danger";
                    case "success":
                        return "alert alert-success";
                    default:
                        return "alert alert-success";
                }
            }
        }
    }
</script>

<style scoped></style>
