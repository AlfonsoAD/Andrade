<?php
include "Conectar.php";

try {
       $queryStr="select * from jugadores";
       $query=$con->prepare($queryStr);
       $query->execute();

        while ($row = $query->fetch()) {
            echo $row['idJugador'].'-'.
                 $row['Nombre'].'-'.
                 $row['ApellidoP'].'-'.
                 $row['ApellidoM'].'-'.
                 $row['FechaNac'].'<br>';
        }
        $query->closeCursor();

} catch(PDOException $e) {
        echo "Error de consulta a la base de datos";
        echo $e->getMessage();
}
?>
