$("document").ready(function () {
  $("#IdIngresar").click(botonIngresar);

  $("#IdPass").keypress(function (e) {
    if (e.keyCode == 13) {
      botonIngresar();
    }
  });

  function botonIngresar() {
    var vLog = $("#IdUser").val();
    var vPas = $("#idPass").val();

    if (vLog == "Alfonso" && vPas == "jesus123") {
      $.get(
        "../Php/Login.php",
        { parLog: vLog, parPas: vPas },
        console.log("Regreso")
      );

      console.log("login correcto");
      $(location).attr('href',"Registro.php");
      
    } 
    else {
      console.log("login incorrecto");
    }
  }
});
