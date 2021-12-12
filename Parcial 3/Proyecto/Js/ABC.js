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
  //-------------------------------------------------------------------------------------------
  //Funcion de alerta
  function MostrarAlerta(titulo, descripcion, tipoError) {
    Swal.fire(titulo, descripcion, tipoError);
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
    if (vnombre | vapp | vapm | vfecn | vnac | vpos | (vdor == "")) {
      MostrarAlerta("Error", "Llena todos los campos", "error");
    } else {
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
          console.log(ret);
          var Resp = ret.resultado;
          console.log(Resp);
          if (Resp == 0) {
            MostrarAlerta("Exito", "Datos guardados con exito", "success");
            Limpiar();
          } else {
            MostrarAlerta("Error", "Error al insertar", "error");
          }
        },
        "json"
      );
      location.reload();
    }
  });
  //--------------------------------------------------------------------------------------------------
  //Eliminar jugadores
  $("#btnEliminar").click(function () {
    Swal.fire({
      title: "Eliminar jugador",
      text: "Ingresa el ID del jugador a eliminar",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      canceñmButtonText: "Cancelar",
    }).then((resultado) => {
      if (resultado.value) {
        let Id = resultado.value;
        $.post(
          "./Php/Eliminar.php",
          { id: Id },
          function (ret) {
            if (ret.resultado == 0) {
              location.reload();
              MostrarAlerta("Exito", "Se ha eliminado con exito", "success");
            } else {
              MostrarAlerta("Error", "Algo ha salido mal", "error");
            }
          },
          "json"
        );
      }
    });
  });
  //-----------------------------------------------------------------------------------------------
  //Listado de jugadores
  $("#tablaJugadores").DataTable({
    ajax: {
      url: "Php/Consulta.php",
      dataSrc: "",
    },
    columns: [
      { data: "IdJugador" },
      { data: "Nombre" },
      { data: "ApellidoP" },
      { data: "ApellidoM" },
      { data: "FechaNac" },
      { data: "Nacionalidad" },
      { data: "Dorsal" },
      { data: "Posicion" },
    ],
  });
  //--------------------------------------------------------------------------------------------------
});
