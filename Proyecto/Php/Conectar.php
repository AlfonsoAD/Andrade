<?php

$hostname='localhost';
$database='ja18100149';
$username='root';
$password='jesus123';

try {
      $con = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);
} catch(PDOException $e) {
      echo "Error de conexion a la base de datos";
      echo $e->getMessage();
      exit();
}

$con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

?>
