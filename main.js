// fare una chiamata ajax per recuperare una decina di dischi musicali e utilizzando vue, stampare a schermo una card per ogni album.

var app = new Vue ({

    el: "#root",
    data: [],

    mounted() {
        const self = this;
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then(function(risposta) {
            self.data = risposta.data.response
            console.log(self.data);
        });
    },



//end vue
});
