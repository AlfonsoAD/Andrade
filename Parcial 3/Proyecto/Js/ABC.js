$("document").ready(function () {
  //Función para limpiar
  function Limpiar() {
    document.getElementById("idNombre").value = "";
    document.getElementById("idApellidoP").value = "";
    document.getElementById("idApellidoM").value = "";
    document.getElementById("idFechaN").value = "";
    document.getElementById("idNacion").value = "";
    document.getElementById("idPosicion").value = "";
    document.getElementById("idDorsal").value = "";
  }
  //--------------------------------------------------------------------------------------------
  //Realizar una alta en la base de datos
  $("#btnRegistrar").click(function () {
    var vnombre = $("#idNombre").val();
    var vapp = $("#idApellidoP").val();
    var vapm = $("#idApellidoM").val();
    var vfecn = $("#idFechaN").val();
    var vnac = $("#idNacion").val();
    var vpos = $("#idPosicion").val();
    var vdor = $("#idDorsal").val();

    $.post(
      "./Php/RegistrarJugador.php",
      {
        nom: vnombre,
        app: vapp,
        apm: vapm,
        fecn: vfecn,
        nac: vnac,
        pos: vpos,
        dor: vdor,
      },
      function (ret) {
        if (ret["resultado"] == 0) {
          console.log("Exito");
          Swal.fire("Exito");
          Limpiar();
        } else {
          Swal.fire("Error");
        }
      },
      "json"
    );
  });
  //-----------------------------------------------------------------------------------------------
 //Listado de jugadores
  $('#tablaUsuarios').DataTable( {
    "ajax":{
        "url": "baseDeDatos/consulta.php",
        "dataSrc":""
    },
    "columns":[
        {"data": "user_id"},
        {"data": "username"},
        {"data": "first_name"},
        {"data": "last_name"},
        {"data": "gender"},
        {"data": "password"},
        {"data": "status"}
    ]  
  });
});
