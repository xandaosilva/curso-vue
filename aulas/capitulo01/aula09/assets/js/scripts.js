const vm = new Vue({
    el: '#app',
    data: {
        cor: 'branco',
        posicaoX: 0,
        posicaoY: 0
    },
    methods: {
        mudarCor(cor){
            this.cor = cor
        },
        coordenadas(e){
            this.posicaoX = e.clientX;
            this.posicaoY = e.clientY;
            console.log(e.clientX, e.clientY);
        }
    }
});