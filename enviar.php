<?php
$destino = "pablevin@gmail.com";
$correo = $_POST["correo"];

$contenido = "Email de suscriptor:" .$correo;

mail($destino, $contenido);
header("location:gracias.html");
?>