$("document").ready(function () {
  
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
        } else {
          Swal.fire("Error");
        }
      },
      "json"
    );
  });
});
