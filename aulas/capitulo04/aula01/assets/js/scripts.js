const BoasVindasVueApp = {
    data(){
        return{
            titulo: "Boas vindas",
            descricao: "Configurando projeto Vue na versão 3.2.10"
        };
    }
};

Vue.createApp(BoasVindasVueApp).mount("#app");
