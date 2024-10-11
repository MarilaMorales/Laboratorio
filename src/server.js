//Importar el express
const express=require('express');
const path= require('path');
const cors = requiere('cors');
const fs= require ('fs');

//-rutas

const productsRoutes = require('../src/routes/productsRoutes')


//Json
app.use(express.json());

//Creamos una aplicacion de express:
const app= express();

//Definir el Puerto
const port=3000

//Las rutas
app.use('/api/products', productsRoutes);

//Analisis de lo que esta entrando
app.use (express.urlencoded({extended:true}));


//Servidor

app.listen(port, () =>{

    console.log(`Servidor corriendo en http://localhost:${port}`);
    
});



