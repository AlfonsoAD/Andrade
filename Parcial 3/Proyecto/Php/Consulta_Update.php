<?php
$IdJugador = $_POST['idJ'];
// $IdUsuario = '3';

$hostname = 'localhost';
$database = 'ja18100149';
$username = 'root';
$password = 'jesus123';

try {
    $dbh = new PDO("mysql:host=$hostname;dbname=$database", $username, $password);
} catch(PDOException $e) {
    $row['resultado']  = '1';
    $row['informacion']= 'Error DB';
    $row['mensaje']    = 'Exeption';
    $row['detalle']    = $e->getMessage();
}

$sql = "SELECT * FROM jugadores WHERE IdJugador = ?";
$stmt = $dbh->prepare($sql);
$stmt->bindParam(1, $IdJugador);

 if($stmt->execute()){
       $result = $stmt->fetch(PDO::FETCH_ASSOC);

       $row['resultado']  = '0';
       $row['informacion']= 'Consulta Exitosa';
       $row['mensaje']    = 'Registro Encontrado';
       $row['detalle']    = $result;
} else {
       $row['resultado']  = '2';
       $row['informacion']= 'Error Consulta';
       $row['mensaje']    = 'Error';
       $row['detalle']    = "Error al ejectar la consulta";
}

echo json_encode($row);
?>
