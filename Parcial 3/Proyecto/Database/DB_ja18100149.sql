CREATE DATABASE ja18100149;

USE ja18100149;

CREATE TABLE users(
	IdUsuario VARCHAR(25) NOT NULL,
	Nombre VARCHAR(25) NOT NULL,
	Pass VARCHAR(12) NOT NULL,
	PRIMARY KEY (IdUsuario)
);

CREATE TABLE jugadores (
	IdJugador INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	Nombre VARCHAR(25) NOT NULL,
	ApellidoP VARCHAR(25) NOT NULL,
	ApellidoM VARCHAR(25) NOT NULL,
	FechaNac DATE NOT NULL,
	Nacionalidad VARCHAR(25) NOT NULL,
	Dorsal INT NOT NULL,
	Posicion VARCHAR(25) NOT NULL
);
-- ------------------------------------------------------------------------------------------------

USE a18100149;

-- --------------------------------------------------------------------------------------------
INSERT INTO Users (idusuario,Nombre,pass) VALUES ('alfonso@sanpancho.com','Alfonso','jesus123');
INSERT INTO Users (idusuario,Nombre,pass) VALUES ('amaro@sanpancho.com','Luis','amaro123');
INSERT INTO Users (idusuario,Nombre,pass) VALUES ('anna@sanpancho.com','Anna','anna123');
--  -----------------------------------------------------------------------------------------------

INSERT INTO Jugadores (Nombre,ApellidoP,ApellidoM,fechanac,Nacionalidad,Dorsal,Posicion) 
VALUES ('Alfonso','Andrade','Dominguez',02/10/2000,'Mexiana',2,'Lateral');

INSERT INTO Jugadores (Nombre,ApellidoP,ApellidoM,fechanac,Nacionalidad,Dorsal,Posicion) 
VALUES ('Luis','Amaro','Arizpe',20/03/2000,'Mexiana',11,'Extremo');

INSERT INTO Jugadores (Nombre,ApellidoP,ApellidoM,fechanac,Nacionalidad,Dorsal,Posicion) 
VALUES ('Alejandro','Aleman','Perez',30/11/1998,'Mexiana',6,'Medio');

INSERT INTO Jugadores (Nombre,ApellidoP,ApellidoM,fechanac,Nacionalidad,Dorsal,Posicion) 
VALUES ('Axel','Gutierrez','Lopez',03/12/1999,'Mexiana',1,'Portero');

INSERT INTO Jugadores (Nombre,ApellidoP,ApellidoM,fechanac,Nacionalidad,Dorsal,Posicion) 
VALUES ('Felipe','Andrade','Dominguez',04/2/2003,'Mexiana',9,'Delantero');
