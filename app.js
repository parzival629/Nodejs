var express = require('express'); //almacenando la funcionalidad del expres
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();              //Donde se ejecutan los metodos

mongoose.connect("mongodb://localhost:27017/primera_pagina", {userNewUrlParser: true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


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
  
	/*var data = {
		tittle: "Mi primer super producto",
		description: "super compra",
		precio: 10
	}

	var product = new Product(data);

	product.save(function(err){
		console.log(product);
	});*/

	respuesta.render("index");
});

app.post("/menu",function(solicitud,respuesta){
	if(solicitud.body.password =="12345678"){
		var data = {
			tittle: solicitud.body.tittle,
			description: solicitud.body.description,
			imageUrl: "data-png",
			precio: solicitud.body.precio
		}

		var product = new Product(data);

		product.save(function(err){
			console.log(product);
			respuesta.render("index");
		});	
	}else{
		respuesta.render("menu/new")
	}


});

app.get("/menu/new",function(solicitud,respuesta){
	respuesta.render("menu/new");
})

app.listen(8080,function(){
	console.log("Servidor Corriendo Mi Señor")
});                  //el puerto donde pasa
