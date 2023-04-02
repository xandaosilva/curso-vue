export default{
    data: () => ({
        title: "Lista padrão",
        items: [],
        item: ""
    }),
    methods:{
        addItem(){
            this.items.push(this.item);
            this.item = "";
        }
    },
    created(){
        console.log("Lista de Mixins criada.");
    }
}