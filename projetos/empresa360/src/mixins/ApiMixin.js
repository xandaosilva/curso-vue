export default {
    data: () => ({
        obj: {}
    }),
    methods: {
        getDataApi(url, queryParams = {}) {
            Object.keys(queryParams).forEach(key => {
                if(queryParams[key] === ""){
                    delete queryParams[key];
                }
            });

            const urlQueryParams = new URLSearchParams(queryParams).toString();
            const urlCompleted = urlQueryParams ? `${url}&${urlQueryParams}` : url;
            fetch(urlCompleted).then(response => response.json()).then(response => this.obj = response);
        }
    },
}
