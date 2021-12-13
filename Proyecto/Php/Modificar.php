<?php

include "Conectar.php";

$vIdJ = $_POST['id'];
$vNombre = $_POST['nom'];
$vApellidoP = $_POST['app'];
$vApellidoM = $_POST['apm'];
$vFechaN = $_POST['fecn'];
$vNac = $_POST['nac'];
$vPos = $_POST['pos'];
$vDorsal = $_POST['dor'];

        $query = "UPDATE jugadores
        SET Nombre = '$vNombre', ApellidoP = '$vApellidoP', ApellidoM = '$vApellidoM', FechaNac = '$vFechaN', 
        Nacionalidad = '$vNac', Dorsal = '$vDorsal', Posicion = '$vPos'
        WHERE IdJugador = $vIdJ";

        $query=$con->prepare($query);
        $query->execute();
        // $resultado = $query->fetch(pdo::FETCH_ASSOC);

        $row['resultado']  = '0';
               
        $query->closeCursor();

        $encoded_row = array_map('utf8_encode',$row);
        echo json_encode($encoded_row);

?>

