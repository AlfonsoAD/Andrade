$("document").ready(function () {
  $("#IdIngresar").click(botonIngresar);

  $("#IdPass").keypress(function (e) {
    if (e.keyCode == 8) {
      botonIngresar();
    }
  });

  function botonIngresar() {
    var vUser = $("#IdUser").val();
    var vPas = $("#IdPass").val();

    if (vUser == 'alfonso' && vPas=='jesusav') {

      $.get("./Php/Login.php", {parUser: vUser,parPas: vPas});

      $('#myModal .modal-header').addClass('modal-header-success');
      $('#myModal .modal-header h5').text('Bienvenido');
      $('#myModal .modal-body p').text('Acceso correcto');
      $('#myModal').modal();

      $("#myModal").on('shown.bs.modal',function() {
          $('#Cerrar').focus();
          });
      $("#myModal").on('hidden.bs.modal',function() {
          $('#myModal .modal-header').removeClass('modal-header-success');
          $(location).attr('href',"Registro.php");
          });

  }
  else {
      $('#myModal .modal-header').addClass('modal-header-danger');
      $('#myModal .modal-header h5').text('Error');
      $('#myModal .modal-body p').text('Credeciales incorrectas');
      $('#myModal').modal();

      $("#myModal").on('shown.bs.modal',function() {
          $('#Cerrar').focus();
      });
      $("#myModal").on('hidden.bs.modal',function() {
          $('#myModal .modal-header').removeClass('modal-header-danger');
          $('#IdPass').focus();
      });
  }
}});