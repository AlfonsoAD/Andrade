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
  //Cancelar alta y modificación
  $("#btnCancelarru").click(function () {
    location.reload();
  });
  //--------------------------------------------------------------------------------------------
  //Realizar una alta y modificación en la base de datos
  $("#btnRegistrar").click(function () {
    var vidj = $("#idJugador").val();
    var vnombre = $("#idNombre").val();
    var vapp = $("#idApellidoP").val();
    var vapm = $("#idApellidoM").val();
    var vfecn = $("#idFechaN").val();
    var vnac = $("#idNacion").val();
    var vpos = $("#idPosicion").val();
    var vdor = $("#idDorsal").val();

    if (vidj == "") {
      //Alta
      if (
        (vnombre == "") |
        (vapp == "") |
        (vapm == "") |
        (vfecn == "") |
        (vnac == "") |
        (vpos == "") |
        (vdor == "")
      ) {
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
              Swal.fire({
                title: "Desea registrar un nuevo jugador?",
                showDenyButton: true,
                confirmButtonText: "Si, registrar",
                denyButtonText: `No, mejor no`,
              }).then((result) => {
                if (result.isConfirmed) {
                  Limpiar();
                  location.reload();
                } else if (result.isDenied) {
                  Swal.fire("Has cancelado el registro", "", "info");
                }
              });
            } else {
              MostrarAlerta("Error", "Error al insertar", "error");
            }
          },
          "json"
        );
      }
      //Modificación
    } else {
      if (
        (vnombre == "") |
        (vapp == "") |
        (vapm == "") |
        (vfecn == "") |
        (vnac == "") |
        (vpos == "") |
        (vdor == "")
      ) {
        MostrarAlerta("Error", "Llena todos los campos", "error");
      } else {
        $.post(
          "./Php/Modificar.php",
          {
            id: vidj,
            nom: vnombre,
            app: vapp,
            apm: vapm,
            fecn: vfecn,
            nac: vnac,
            pos: vpos,
            dor: vdor,
          },
          function (ret) {
            var Resp = ret.resultado;

            if (Resp == 0) {
              Swal.fire({
                title: "Desea modificar datos de este jugador?",
                showDenyButton: true,
                confirmButtonText: "Si, lo quiero hacer",
                denyButtonText: `No, mejor no`,
              }).then((result) => {
                if (result.isConfirmed) {
                  Limpiar();
                  location.reload();
                } else if (result.isDenied) {
                  Swal.fire("Has cancelado la modificación", "", "info");
                }
              });
            } else {
              MostrarAlerta("Error", "Error al modificar", "error");
            }
          },
          "json"
        );
      }
    }
  });
  //--------------------------------------------------------------------------------------------------
  //Realizar una baja en la base de datos
  $("#btnEliminar").click(function () {
    Swal.fire({
      title: "Eliminar jugador",
      text: "Ingresa el ID del jugador a eliminar",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      confirmButtonColor: "#19cc16",
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#db0226",
    }).then((result) => {
      if (result.value) {
        let Id = result.value;
        if (result.isConfirmed) {
          $.post(
            "./Php/Eliminar.php",
            { id: Id },
            function (ret) {
              if (ret.resultado == 0) {
                location.reload();
              } else {
                MostrarAlerta("Error", "Algo ha salido mal", "error");
              }
            },
            "json"
          );
        }
      }
    });
  });
  //-----------------------------------------------------------------------------------------------
  //Realizar consulta en la base de datos para modificar datos de un jugador
  $("#btnUpdate").click(function () {
    Swal.fire({
      title: "Modificación",
      text: "Ingresa el ID del jugador que quieres modificar",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Ok",
      confirmButtonColor: "#19cc16",
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#db0226",
    }).then((result) => {
      if (result.value) {
        let Id = result.value;
        if (result.isConfirmed) {
          $.post(
            "./Php/Consulta_Update.php",
            { idJ: Id },
            function (ret) {
              if (ret.resultado == 0) {
                $("#idJugador").val(ret.detalle.IdJugador);
                $("#idNombre").val(ret.detalle.Nombre);
                $("#idApellidoP").val(ret.detalle.ApellidoP);
                $("#idApellidoM").val(ret.detalle.ApellidoM);
                $("#idFechaN").val(ret.detalle.FechaNac);
                $("#idNacion").val(ret.detalle.Nacionalidad);
                $("#idPosicion").val(ret.detalle.Posicion);
                $("#idDorsal").val(ret.detalle.Dorsal);
              } else {
                MostrarAlerta("Error", "Algo ha salido mal", "error");
              }
            },
            "json"
          );
        }
      }
    });
  });
  //-----------------------------------------------------------------------------------------------
  //Listado de jugadores traida desde la base de datos
  $("#tablaJugadores").DataTable({
    ajax: {
      url: "Php/Listado.php",
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
