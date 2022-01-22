// const express=require('express'); //esta es en la antigua forma
//se puede usar los modulos de javascript como los imports
//para utilizarlos debemos ir al package.json y poner type:"module"
//ejemplo
// "type":"module",
//   "author": "RicardoAltamiranoSanchez",
//   "license": "ISC",
//   "dependencies": {
//     "express": "^4.17.2"
//   }
import express from 'express';
import router from './Router/router.js';
import db from './config/db.js'
const app=express();




const port= process.env.PORT || 5000;



//conexion ala bae de datos
db.authenticate()
.then(()=>{console.log("Conexion ala base de datos existosa");})
.catch((error)=>{console.log(`hubo un error en ${error}`)});

//para habilitar un template engine instalamos npm install pug
//habilitamos pug
app.set('view engine','pug');
//Habilitando el body buscamos
app.use(express.urlencoded({extended:true}))
//enviamos variables locales ala vista 
app.use((req,res,next)=>{
const year= new Date();
const titulo="Agencia De Viajes";
//los locals es un metodo de res y igual a una variable de entorno
res.locals.ActualYear=year.getFullYear();
res.locals.tituloIndex=titulo;
next();

});

//definimos la carpeta publica
app.use(express.static('public'));
//agregamos los router
app.use('/',router);
app.listen(port,()=>{
console.log(`Servidor encendio en el puerto ${port}`);
})

// instalamos dependiencias para la conexion de la base de datos en mysql
//npm install mysql2
//npm install sequelize este seria un orm

//pagina para cambiar codigo de html a pug https://html-to-pug.com/
//pagina de iconos svg https://tablericons.com/