export default {
    data: () => ({
        dataLead: {}
    }),
    methods: {
        getDataApi(url) {
            fetch(url).then(response => response.json()).then(response => this.dataLead = response);
        }
    },
}
