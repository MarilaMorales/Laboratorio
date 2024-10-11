//Importar el express
const express=require('express');
const path= require('path');
const cors = require('cors');
const fs= require ('fs');

//-rutas

const productsRoutes = require('./src/routes/productsRoutes')

//Creamos una aplicacion de express:
const app= express();

//Json
app.use(express.json());


//Definir el Puerto
const port=3000

//Las rutas
app.use('/api/productos', productsRoutes);

//Analisis de lo que esta entrando
app.use (express.urlencoded({extended:true}));


//Servidor

app.listen(port, () =>{

    console.log(`Servidor corriendo en http://localhost:${port}`);
    
});



