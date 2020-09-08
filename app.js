const express = require('express');
const json = require("./heroes.json")
const app = express();

app.listen(3000,function(){
console.log("hola ");
})

app.get("/",function(req,res){
    res.send("Deberá mostrar un texto de bienvenida al sitio. El texto será: ​Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne yhueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan comoinspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer enti!.");
})

app.get("/heroes",function(req,res){
    res.send(json)
})


