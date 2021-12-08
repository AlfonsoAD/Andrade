<?php

$vNombre    = $_POST['nom'];
$vApellidoP = $_POST['app'];
$vApellidoM = $_POST['apm'];
$vFechaN = $_POST['fecn'];
$vNac = $_POST['nac'];
$vPos = $_POST['pos'];
$vDorsal = $_POST['dor'];

$hostname = 'localhost';
$database = 'ja18100149';
$username = 'root';
$password = 'jesus123';

try {
    $dbh = new PDO("mysql:host=$hostname;dbname=$database", $username, $password);
    echo "conectado";
} catch(PDOException $e) {
    $row['resultado']  = '1';
    $row['informacion']= 'Error DB';
    $row['mensaje']    = 'Exeption';
    $row['detalle']    = $e->getMessage();
}

try {
    
    $Query="INSERT INTO jugadores 
    SET Nombre = ?,ApellidoP = ?,
        ApellidoM = ?,fechanac = ?, Nacionalidad = ?,
        Posicion = ?,Dorsal = ? "; 

    $stmt = $dbh->prepare($Query);
    $stmt->bindParam(1, $vNombre);
    $stmt->bindParam(2, $vApellidoP);
    $stmt->bindParam(3, $vApellidoM);
    $stmt->bindParam(4, $vFechaN);
    $stmt->bindParam(5, $vNac);
    $stmt->bindParam(6, $vPos);
    $stmt->bindParam(7, $vDorsal);

   if ($stmt->execute()) {

        $stmt = $dbh->prepare("select LAST_INSERT_ID() as consecutivo");
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        $row['resultado']  = '0';
        $row['informacion']= 'Exito';
        $row['mensaje']    = "Registro Insertado exitosamente";
        $row['detalle']    = $result['consecutivo'];
   } else {
        $row['resultado']  = '2';
        $row['informacion']= 'Error DB';
        $row['mensaje']    = 'Error Ejecucion de Insert';
        $row['detalle']    = 'Error al hacer sentecia de insercion';
   }

} catch(PDOException $exception) {
    $row['resultado']  = '3';
    $row['informacion']= 'Error DB';
    $row['mensaje']    = 'Exepcion en Insercion';
    $row['detalle']    =  $exception->getMessage();
}


$encoded_row = array_map('utf8_encode',$row);
echo json_encode($encoded_row);
?>
