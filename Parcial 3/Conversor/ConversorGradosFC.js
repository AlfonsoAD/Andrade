$(document).ready(function () {
  $("#CalcularConversion").click(PresionarBoton);

  function PresionarBoton(e) {
    $.get(
      "ConversorGradosFC.php",
      { grados: $("#grados").val() },
      function (datos) {
        $("#Resultado").html("<h3>Grados Centígrados " + datos + "</h3>");
      }
    );

    return false;
  }
});
