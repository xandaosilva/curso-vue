const vm = new Vue({
    el: "#app",
    data: {
        cursos: ["Lógica de programação", "Engenharia de software", "Python", "React", "UML"],
        cursos2: {
            1000: { titulo: "Python básico", descricao: "Aprenda os conceitos básicos de Python" },
            1001: { titulo: "UML", descricao: "Domine a UML" }
        },
        publicacoes:[
            { id: 1, publicacao: "Publicação 1" },
            { id: 2, publicacao: "Publicação 2" },
            { id: 3, publicacao: "Publicação 3" },
        ],
        comentarios:[
            { id: 1, comentario: "Comentário 1" },
            { id: 2, comentario: "Comentário 2" },
            { id: 3, comentario: "Comentário 3" },
        ],
    },
    methods: {
        misturarArray(){
            let misturado = [];

            misturado[0] = this.publicacoes[2];
            misturado[1] = this.publicacoes[0];
            misturado[2] = this.publicacoes[1];

            this.publicacoes = misturado;
        },
        adicionarElemento(){
            this.comentarios.push({ id: 4, comentario: "Novo comentário adicionado" });
        },
        removerElemento(){
            this.comentarios.pop();
        },
        modificarElemento(){
            this.$set(this.comentarios, 1, { id: 2, comentario: "Comentário 2 atualizado" });
        }
    }
})