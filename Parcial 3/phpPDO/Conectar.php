<?php

$hostname='localhost';
$database='a18100149';
$username='root';
$password='';

try {
      $con = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);
      echo "hola, si me concté";
} catch(PDOException $e) {
      echo "Error de conexion a la base de datos";
      echo $e->getMessage();
      exit();
}

$con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

?>
