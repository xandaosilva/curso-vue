const vm = new Vue({
    el: "#app",
    data: {
        tamanhoTexto: 30
    },
    methods: {},
    computed:{
        estilo(){
            let width = Math.floor((Math.random() * 100) + 100);
            let height = Math.floor((Math.random() * 100) + 100);
            let background = "blue";
            let horas = new Date();

            if(horas.getHours() > 18){
                background = "red";
            }

            return{
                background: background,
                width: width + "px", 
                height: height + "px", 
                padding: 10 + "px",
                color: "white",
                fontSize: this.tamanhoTexto + "px",
                fontWeight: "bold"
            }
        }
    }
})