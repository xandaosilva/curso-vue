function modificarTexto(){
    let texto = document.querySelector("p").innerText;
    texto += "@";
    document.querySelector("p").innerText = texto;
}

const vm = new Vue({
    el: "#app",
    data: {
        texto: "DOM e Virtual DOM"
    },
    methods: {
        modificarTextoVD(){
            this.texto += "@";
        }
    },
    computed:{}
})