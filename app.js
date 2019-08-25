var express = require('express'); //almacenando la funcionalidad del expres

var app = express();              //Donde se ejecutan los metodos

app.set("view engine","jade");

app.use(express.static("public"))

app.get("/",function(solicitud,respuesta){    //donde se reciben las peticiones url(/) PURO Dominio
  respuesta.render("index");        
});

app.listen(8080,function(){
	console.log("Servidor Corriendo Mi Señor")
});                  //el puerto donde pasa
