$("document").ready(function () {
  $("#IdIngresar").click(botonIngresar);

  $("#IdPass").keypress(function (e) {
    if (e.keyCode == 8) {
      botonIngresar();
    }
  });
  //--------------------------------------------------------------------------------------------
  //Funcion para ingresar en el login
  function botonIngresar() {
    var vUser = $("#IdUser").val();
    var vPas = $("#IdPass").val();

    if (vUser == "alfonso" && vPas == "123") {
      $.get("Login.php", { parUser: vUser, parPas: vPas });
      Swal.fire("Exito, bienvenido Alfonso");
      $(location).attr("href", "Inicio2.php");
    } else {
      Swal.fire("Error","Ingresa bien tus credenciales","error");
    }
  }
  //-------------------------------------------------------------------------------------------------------
  //Funcion cerrar sesión
  $("#Cerrar").click(function () {
    Swal.fire({
      title: "Seguro quieres salir?",
      icon: "warning",
      showCancelButton: "Cancelar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, cerrar sesión",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Has cerrado la sesión!", "Que tengas buen día", "success");
        $(location).attr("href", "Inicio.html");
      }
    });
  });
});
