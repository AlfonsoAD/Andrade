<!DOCTYPE html>
<html>

<?php
	session_start();
	if ( !isset($_SESSION['IdUsuario']) || empty($_SESSION['IdUsuario']) ) {
		header("Location: ./Inicio.html");
	}
?>
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="Css/EstiloInicio2.css" >
    <script src="Js/Inicio.js"></script>
    <title>BIENVENIDO - SPFC</title>
</head>
<body>
<!--Encabezado-->
<header class="header">
		<div class="container">
		<div class="btn-menu">
			<label for="btn-menu">☰</label>
		</div>
			<div class="logo">
				<h1>SAN PANCHO FC</h1>
			</div>
			<nav class="menu" id="Cerrar">
				<a href="./php/CerrarSesion.php" >Cerrar Sesión</a>
			</nav>
		</div>
</header>

<!--Menu lateral-->
<div class="capa"></div>
<input type="checkbox" id="btn-menu">
<div class="container-menu">
	<div class="cont-menu">
		<nav>
			<a href="Registro.html">Registrar jugadores</a>
			<a href="#">Lista de jugadores</a>
		</nav>
		<label for="btn-menu">✖️</label>
	</div>
</div>

<!--Caja-->
<div class="Caja">
	<h2>BIENVENIDO</h2>
	<img src="./Img/Logo.png">
</div>

</html>
</body>