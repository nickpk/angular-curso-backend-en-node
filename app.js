// Require
var express = require('express');
var mongoose = require('mongoose');


// Inicializa express
var app = express();

// connexion con mongodb
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', ( err,res) => {
    if(err) throw err;
    console.log('Base de datos: ONLINE');
});

// Rutas
app.get('/',(req,res,next)=> {
    res.status(200).json({
        ok:true,
        mensaje:'Peticion realizada correctamente'
    })
});

// Escuchar peticion
app.listen(3000,()=>{
    console.log('express server corriendo en puerto 3000: ONLINE');
});