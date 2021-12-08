$("document").ready(function () {
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
          console.log("Error Insercion");

          $("#modalMensaje .modal-header").addClass("modal-header-danger");
          $("#modalMensaje .modal-header h2").text(ret["mensaje"]);
          $("#modalMensaje .modal-body h3").text(ret["detalle"]);
          $("#modalMensaje").modal();

          $("#modalMensaje").on("shown.bs.modal", function () {
            $("#botonCerrar").focus();
          });
          $("#modalMensaje").on("hidden.bs.modal", function () {
            $("#modalMensaje .modal-header").removeClass("modal-header-danger");
          });
        } else {
          console.log("exito");
          $("#idUsuario").val(ret["detalle"]);

          $("#modalMensaje .modal-header").addClass("modal-header-success");
          $("#modalMensaje .modal-header h2").text(ret["mensaje"]);
          $("#modalMensaje .modal-body h3").text(
            "ID de Usuario : " + ret["detalle"]
          );
          $("#modalMensaje").modal();

          $("#modalMensaje").on("shown.bs.modal", function () {
            $("#botonCerrar").focus();
          });
          $("#modalMensaje").on("hidden.bs.modal", function () {
            $("#myModal .modal-header").removeClass("modal-header-success");
          });
        }
      },
      "json"
    );
  });
});
