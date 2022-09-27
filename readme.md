# Sprint 2 - Tema 06 - Promesas y MySQL + Node

> Para poder utilizar este ejemplo, deberán tener creada una base de datos con el nombre "hack_academy" y una tabla llamada "users" dentro de ella. De querer optar por otros nombres, deberán cambiar lo correspondiente tanto en la conexion como en las consultas

## Pasos para poder realizar una conexión a nuestra BBDD con mysql2

1. Instalar mysql2 a través de npm `npm install mysql2`
2. Establecer la conexión:
   - Pasar el host (dirección)
   - Pasar el nombre de usuario
   - Pasar la contraseña
   - Pasar qué base de datos vamos a usar
3. OPCIONAL. Testear la conexíon con el método connect

## Archivo db.js

Para poder reutilizar nuestra conexión asi como la posibilidad de hacer consultas, hemos creado un archivo llamado ``db.js` donde exportaremos la conexión, el uso del método execute, además de establecer un parámetro que hemos llamado `query` (podría llamarse milanesa) que nos permitirá elegir qué consulta hacer a la base a la hora de usar dicha función.
