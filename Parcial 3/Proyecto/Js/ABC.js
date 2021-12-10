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
        if (ret["resultado"] != 0) {
          alert("Exito");
        } else {
          alert("Error");
        }
      },
      "json"
    );
  });
  //-----------------------------------------------------------------------------------------------
  //Listado de jugadores
  $("#tablaJugadores").DataTable({
    "ajax": {
      "url": "Php/Consulta.php",
      "dataSrc": "",
    },
    "columns": [
      { "data": "IdJugador" },
      { "data": "Nombre" },
      { "data": "ApellidoP" },
      { "data": "ApellidoM" },
      { "data": "FechaNac" },
      { "data": "Nacionalidad" },
      { "data": "Dorsal" },
      { "data": "Posicion" },
    ],
  });
  //--------------------------------------------------------------------------------------------------
  //Eliminar jugadores
  $("#btnEliminar").click(function () {
    var vid = $("#eliminar").val();

    if (confirm("Borrar")) {
      $.post(
        "./Php/Eliminar.php",
        { id: vid },
        function (ret) {
          alert("Borrado");
        },
        "json"
      );

      location.reload();

      $("input").val("");
    } else {
      alert("No se borra");
    }
  });
});
