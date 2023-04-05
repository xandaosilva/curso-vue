export default {
    data: () => ({
        obj: {}
    }),
    methods: {
        getDataApi(url) {
            fetch(url).then(response => response.json()).then(response => this.obj = response);
        }
    },
}
