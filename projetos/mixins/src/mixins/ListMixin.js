export default{
    data: () => ({
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