// Descrizione:
// Genera 10 mail tramite api e stampale in una lista
// API: https://flynn.boolean.careers/exercises/api/random/mail
// NOTE:
// come detto va bene che ciò accada al mounted, come abbiam fatto stamattina;
// apritevi prima la Api sul browser così vedete che vi ritorna;
// tutto fatto con axios in Vue
var app = new Vue ({
  el: '#app',

  data: {
    listamail: []
  },//FINE DATA

  mounted: function () {

    for (var i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(risposta => {
        var mail = risposta.data.response;
        this.listamail.push(mail);
      });
    };
  }
});
