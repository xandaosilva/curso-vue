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
    }
}