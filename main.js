// fare una chiamata ajax per recuperare una decina di dischi musicali e utilizzando vue, stampare a schermo una card per ogni album.

var app = new Vue ({

    el: "#root",
    data: {
        album: [],
    },

    mounted() {
        const self = this;
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then(function(risposta) {
            self.album = risposta.data.response

        });
    },



//end vue
});
