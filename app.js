var express = require('express'); //almacenando la funcionalidad del expres
var mongoose = require('mongoose');

var app = express();              //Donde se ejecutan los metodos

mongoose.connect("mongodb://localhost:27017/primera_pagina", {userNewUrlParser: true});

//definir shema de nuestros productos
var productShema = {
	tittle:String,
	descripcion:String,
	imageUrl:String,
	precio:Number
};

var Product = mongoose.model("Product", productShema);

app.set("view engine","jade");

app.use(express.static("public"))

app.get("/",function(solicitud,respuesta){    //donde se reciben las peticiones url(/) PURO Dominio
  
	var data = {
		tittle: "Mi primer super producto",
		description: "super compra",
		precio: 10
	}

	var product = new Product(data);

	product.save(function(err){
		console.log(product);
	});	

  respuesta.render("index");        
});

app.listen(8080,function(){
	console.log("Servidor Corriendo Mi Señor")
});                  //el puerto donde pasa
