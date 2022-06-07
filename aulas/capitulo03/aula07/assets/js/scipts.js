const vm = new Vue({
    template: `
        <div>
            <h1>{{ texto1 }}</h1>
            <h1>{{ texto2 }}</h1>
        </div>
    `,
    data: {
        texto1: "Template",
        texto2: "Formas alternativas de carregar o template"
    },
    methods: {},
    computed:{}
})

vm.$mount("#app");
