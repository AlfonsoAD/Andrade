$("document").ready(function () {

  $("#IdIngresar").click(botonIngresar);

  $("#IdPass").keypress(function (e) {
    if (e.keyCode == 8) {
      botonIngresar();
    }
  });

  //Funcion para ingresar en el login
  function botonIngresar() {
    var vUser = $("#IdUser").val();
    var vPas = $("#IdPass").val();
    
    $.post(
      "./Php/Login.php",{ parUser: vUser, parPas: vPas },function (ret) {

        console.log(ret);
        if (ret["resultado"] == 0) {
          console.log("Login correcto");

          $("#myModal .modal-header").addClass("modal-header-success");
          $("#myModal .modal-header h5").text(ret.mensaje);
          $("#myModal .modal-body p").text(ret.detalle);
          $("#myModal").modal();

          $("#myModal").on("shown.bs.modal", function () {
            $("#Cerrar").focus();
          });
          $("#myModal").on("hidden.bs.modal", function () {
            $("#myModal .modal-header").removeClass("modal-header-success");
            $(location).attr("href", "Inicio2.php");
          });
        } else {
          console.log("login incorrecto");

          console.log(ret);

          $("#myModal .modal-header").addClass("modal-header-danger");
          $("#myModal .modal-header h5").text(ret.mensaje);
          $("#myModal .modal-body p").text(ret.detalle);
          $("#myModal").modal();

          $("#myModal").on("shown.bs.modal", function () {
            $("#Cerrar").focus();
          });
          $("#myModal").on("hidden.bs.modal", function () {
            $("#myModal .modal-header").removeClass("modal-header-danger");
            $("#IdUser").focus();
          });
        }
      },
      "json"
    );
  }
  
  $("#Cerrar").click(function (){

  });
});
