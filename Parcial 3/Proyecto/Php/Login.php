<?php

$vLogin   = $_GET['parUser'];
$vPassword= $_GET['parPas'];

session_start();
$_SESSION['Login']=$vLogin;

?>