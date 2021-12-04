<?php

$vLogin   = $_POST['parUser'];
$vPassword= $_POST['parPas'];

$hostname = 'localhost';
$database = 'a18100149';
$username = 'root';
$password = 'jesus123';

$link = new mysqli($hostname, $username, $password, $database);

if ($link->connect_error) {
        $row['resultado']  = '1';
        $row['informacion']= 'Error en la BD';
		$row['mensaje']    = 'Error de conexión';
        $row['detalle']    = 'No hay conexión a la base de datos';

    } else {

    $consulta="select IdUsuario, Nombre from users 
            where IdUsuario='".$vLogin."' and Pass='".$vPassword."'";

    $result = $link->query($consulta);

    if ($result->num_rows > 0) {
            $registro = $result->fetch_assoc();

			$row['resultado']  = '0';
			$row['informacion']= 'Login Correcto';
			$row['mensaje']    = 'Acceso Concecido';
			$row['detalle']    = 'Bienvenid@ '.$registro['IdUsuario'].' '.$registro['Nombre'];

            session_start();
            $_SESSION['IdUsuario']=$registro['IdUsuario'];
            $_SESSION['Nombre']=$registro['Nombre'];

    } else  {
        $row['resultado']  = '1';
        $row['informacion']= 'Login incorrecto';
        $row['mensaje']    = 'Acceso denegado';
        $row['detalle']    = 'Ingresa correctamente tus credenciales';
    }

    $link->close();
}


 var_dump($row);


$encoded_row = array_map('utf8_encode',$row);


echo json_encode($encoded_row);
?>

