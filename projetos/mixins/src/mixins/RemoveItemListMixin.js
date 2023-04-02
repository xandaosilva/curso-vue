export default {
    methods:{
        removeItem(){
            this.items.pop();
        }
    },
    created(){
        console.log("Remover Item Lista de Mixins criada.");
    }
}