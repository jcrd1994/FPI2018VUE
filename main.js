new Vue
({
  el: "#principal",
  /*
      informacion a utilizar
  */
  data:
  {
    cantidad: 3,
    clientes: null,
    titulo: false,
    genero: false,
    nombre: true,
    apellido: true,
    correo: false,
    ciudad: true,
    busqueda: "",
    rechazados: 0,
    aceptados: 0,
    mostrar: null
  },
  /*
     metodos
  */
  methods:
  {
    traer: function()
    {
      axios
        .get('https://randomuser.me/api/?results=' + this.cantidad)
        .then(response => {this.clientes = response.data.results;})
    },
    aceptar: function(cli)
    {
      this.aceptados++;
      this.clientes.splice(cli,1);
    },
    rechazar: function(cli)
    {
      this.rechazados++;
      this.clientes.splice(cli,1);
    },
    cumpleFiltro: function(parametro){
      if (parametro.indexOf(this.busqueda) >=0){
        return true;
      }else{
        return false;
      }
    },
  },
  /*
      flitrador por nombre
  
  computed:
  {
    filtro: function()
    {
      if (this.clientes != null)
      {
        return this.clientes.filter(cliente =>
          {
          return cliente.name.first.toLowerCase().includes(this.busqueda.toLowerCase())+
          cliente.name.last.toLowerCase().includes(this.busqueda.toLowerCase());
        });
      }
    }
  }
*/})
