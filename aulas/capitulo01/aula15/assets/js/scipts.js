const vm = new Vue({
    el: "#app",
    data: {
        saldo: 2222
    },
    methods: {
        creditar(){
            this.saldo +=  parseFloat(valor.value);
        },
        debitar(){
            this.saldo -= parseFloat(valor.value);
        }
    }
})