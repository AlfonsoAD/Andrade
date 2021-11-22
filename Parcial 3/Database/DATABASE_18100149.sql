CREATE DATABASE A18100149;

USE A18100149;

CREATE TABLE users(
	IdUsuario VARCHAR(25) NOT NULL,
	Nombre VARCHAR(25) NOT NULL,
	Pass VARCHAR(12) NOT NULL,
	PRIMARY KEY (IdUsuario)
);

CREATE TABLE jugadores (
	IdJugador INT PRIMARY KEY NOT NULL,
	Nombre VARCHAR(25) NOT NULL,
	ApellidoP VARCHAR(25) NOT NULL,
	ApellidoM VARCHAR(25) NOT NULL,
	FechaNac DATE NOT NULL
);

CREATE TABLE datosadicionales (
	IdDatosA INT NOT NULL,
	Nacionalidad VARCHAR(25) NOT NULL,
	Estatura DECIMAL(10,0) NOT NULL,
	Peso DECIMAL(10,0) NOT NULL,
	Id_jug INT(11) NOT NULL,
	PRIMARY KEY (IdDatosA),
	FOREIGN KEY (Id_jug) REFERENCES jugadores (IdJugador) 
);

CREATE TABLE datosjug (
	IdDatosJ INT NOT NULL,
	Dorsal INT NOT NULL,
	Posicion VARCHAR(25) NOT NULL,
	Division VARCHAR(25) NOT NULL,
	IdJug INT NOT NULL,
	PRIMARY KEY (IdDatosJ),
	FOREIGN KEY (IdJug) REFERENCES jugadores (IdJugador)
);


------------------------------------------------------------------------------------------------

USE a18100149;

--------------------------------------------------------------------------------------------
INSERT INTO Users (idusuario,Nombre,pass) VALUES ('alfonso@sanpancho.com','Alfonso','jesus123');
INSERT INTO Users (idusuario,Nombre,pass) VALUES ('amaro@sanpancho.com','Luis','amaro123');
INSERT INTO Users (idusuario,Nombre,pass) VALUES ('anna@sanpancho.com','Anna','anna123');
--------------------------------------------------------------------------------------------
INSERT INTO Jugadores (idjugador,Nombre,ApellidoP,ApellidoM,fechanac) 
VALUES (1,'Alfonso','Andrade','Dominguez',02/10/2000);

INSERT INTO Jugadores (idjugador,Nombre,ApellidoP,ApellidoM,fechanac) 
VALUES (2,'Luis','Amaro','Arizpe',20/03/2000);

INSERT INTO Jugadores (idjugador,Nombre,ApellidoP,ApellidoM,fechanac) 
VALUES (3,'Alejandro','Aleman','Perez',30/11/1998);

INSERT INTO Jugadores (idjugador,Nombre,ApellidoP,ApellidoM,fechanac) 
VALUES (4,'Axel','Gutierrez','Lopez',03/12/1999);

INSERT INTO Jugadores (idjugador,Nombre,ApellidoP,ApellidoM,fechanac) 
VALUES (5,'Felipe','Andrade','Dominguez',04/2/2003);
--------------------------------------------------------------------------------------------
INSERT INTO Datosjug (iddatosj,Dorsal,Posicion,division,idjug) 
VALUES (11,2,'Lateral','Primera',1);

INSERT INTO Datosjug (iddatosj,Dorsal,Posicion,division,idjug) 
VALUES (12,11,'Extremo','Primera',2);

INSERT INTO Datosjug (iddatosj,Dorsal,Posicion,division,idjug) 
VALUES (13,6,'Medio','Primera',3);

INSERT INTO Datosjug (iddatosj,Dorsal,Posicion,division,idjug) 
VALUES (14,1,'Portero','Primera',4);

INSERT INTO Datosjug (iddatosj,Dorsal,Posicion,division,idjug) 
VALUES (15,9,'Delantero','Primera',5);
----------------------------------------------------------------------------------------------
INSERT INTO Datosadicionales (iddatosa,Nacionalidad,estatura,peso,id_jug) 
VALUES (100,'Mexicana',178.2,75.4,1);

INSERT INTO Datosadicionales (iddatosa,Nacionalidad,estatura,peso,id_jug) 
VALUES (101,'Mexicana',170.2,70.2,2);

INSERT INTO Datosadicionales (iddatosa,Nacionalidad,estatura,peso,id_jug) 
VALUES (102,'Mexicana',174.3,73,3);

INSERT INTO Datosadicionales (iddatosa,Nacionalidad,estatura,peso,id_jug) 
VALUES (103,'Mexicana',195,78,4);

INSERT INTO Datosadicionales (iddatosa,Nacionalidad,estatura,peso,id_jug) 
VALUES (104,'Mexicana',188.3,76,5);