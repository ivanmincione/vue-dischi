// fare una chiamata ajax per recuperare una decina di dischi musicali e utilizzando vue, stampare a schermo una card per ogni album.

var app = new Vue ({

    el: "#root",
    data: {
        album: [],
        selected: "All types",
        typeAlbum: [],
    },

    mounted() {
        const self = this;
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then(function(risposta) {
            self.album = risposta.data.response
            console.log(self.album);

            self.album.forEach((item, i) => {
                if(!self.typeAlbum.includes(item.genre)) {
                    self.typeAlbum.push(item.genre)
                    console.log(self.typeAlbum);
                }

            });

        });
    },



//end vue
});





//
//
// filteredList(){
//     // creo variabile per salvare i dati in input trasformati
//     var userSearch = this.search.toLowerCase();
//     // ciclo per cercare corrispondenza dei dati
//     this.contacts.forEach((user, i) => {
//         if(user.name.toLowerCase().includes(userSearch)){
//             user.visible = true;
//         }else {
//             user.visible = false;
//         }
//     });
//
// },
