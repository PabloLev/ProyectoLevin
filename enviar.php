<?php
$destino = "pablevin@gmail.com";
$correo = $_POST["correo"];

$contenido = "Email de suscriptor:" .$correo;

mail($destino, "contacto", $contenido);
header("location:gracias.html");

?>