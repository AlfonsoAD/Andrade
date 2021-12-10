<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!--Bootstrap CSS-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <!--Datatables-->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/dt-1.10.20/datatables.min.css"/>  
    <!--Script-->
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.20/datatables.min.js"></script>  
    <script src="Js/ABC.js"></script>
    <!--Estilo propio-->
    <link rel="stylesheet" href="Css/EstiloListado.css">
    <title>LISTADO JUGADORES - SPFC </title>
    </head>

    <header class="header">
        <h2 class="text-center">LISTADO DE JUGADORES</h2>    
        <h3 class="text-center">SAN PANCHO FC</h3>
        <img src="Img/Logo.png" alt="Logo">
    </header>
    
    <body>

    <div class="botones">
        <!--Label-->
            <label for="eliminar">Ingresa el ID: </label>
            <input id="eliminar">

            <!--Botones-->
            <button id="btnEliminar" type="button" class="btn btn-primary">Eliminar</button>
     </div>
     <div class="container">
       <div class="row">
           <div class="col-lg-12">
            
            <table id="tablaJugadores" class="table-striped table-bordered" style="width:100%">
                <thead>
                 <tr>
                    <th>IdJugador</th>
                    <th>Nombre</th>
                    <th>Apellido Paterno</th>                                
                    <th>Apellido Materno</th>  
                    <th>Fecha Nacimiento</th>
                    <th>Nacionalidad</th>
                    <th>Dorsal</th>
                    <th>Posición</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
           </div>
       </div> 
    </div>
    </body>
</html>
    
