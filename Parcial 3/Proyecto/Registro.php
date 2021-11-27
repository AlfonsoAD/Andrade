<!DOCTYPE html>
<html lang="es">

<?php
session_start();
if ( !isset($_SESSION['Login']) || empty($_SESSION['Login']) ) {
    header("Location:./Inicio.html");
}
?>

  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <link rel="stylesheet" href="FormularioBoot.css">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      <link rel="stylesheet" href="css/ModalHeaderColor.css">


    <link rel="stylesheet" href="Css/EstiloFormResponsivo.css" />
    <script src="./Js/Inicio.js
    "></script>
    <title>REGISTRO JUGADORES - SPFC</title>
  </head>

  <body>


  <div class="modal fade" id="myModalSalida" role="dialog">
        <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header modal-header-primary">
                <!-- <button type="button" class="close" data-dismiss="modal">X</button> -->
                <h2 class="modal-title text-center"></h2>
            </div>
            <div class="modal-body text-center">
                <h3>Cerrar Sesion</h3>
            </div>
            <div class="modal-footer">
               <a href="./php/Logout.php" class="btn btn-default">Si</a>
               <a href="#" data-dismiss="modal" class="btn btn-default">No</a>
            </div>
        </div>
        </div>
        </div>



    <div class="container">
      <h2>SAN PANCHO FC</h2>
      <h3>Registro de jugadores</h3>
      <form>
        <div class="row">
          <div class="form-group">
            <label for="idNombre">Nombre(s)</label>
            <input id="idNombre" type="text" class="form-control" />
          </div>

          <div class="form-group">
            <label for="idApellidoP">Apellido Paterno</label>
            <input id="idApellidoP" type="text" class="form-control" />
          </div>

          <div class="form-group">
            <label for="idApellidoM">Apellido Materno</label>
            <input id="idApellidoM" type="text" class="form-control" />
          </div>
        </div>

        <div class="row">
          <div class="form-group">
            <label for="idFechaN">Fecha Nacimiento</label>
            <input id="idFechaN" type="date" class="form-control" />
          </div>

          <div class="form-group">
            <label for="idEdad">Edad(Años)</label>
            <input id="idEdad" type="text" class="form-control" />
          </div>
        </div>

        <div class="row">
          <div class="form-group">
            <label for="idPeso">Peso</label>
            <input id="idPeso" type="text" class="form-control" />
          </div>

          <div class="form-group">
            <label for="idEstatura">Estatura</label>
            <input id="idEstatura" type="text" class="form-control" />
          </div>
        </div>

        <div class="row">
          <div class="form-group">
            <label for="idNacion">Nacionalidad</label>
            <input id="idNacion" type="text" class="form-control" />
          </div>

          <div class="form-group">
            <label for="idDivision">División</label>
            <input id="idDivision" type="text" class="form-control" />
          </div>
        </div>

        <div class="row">
          <div class="form-group">
            <label for="idPosicion">Posicion</label>
            <input id="idPosicion" type="text" class="form-control" />
          </div>

          <div class="form-group">
            <label for="idDorsal">Dorsal</label>
            <input id="idDorsal" type="text" class="form-control" />
          </div>
        </div>
        <input type="submit" name="" value="REGISTRAR"/>
      </form>
    </div>
  </body>
</html>