const express=  require('express');
const { readFile } = require('fs');
const path=require ('path');
const fs= require ('fs').promises;



const archiProduct = path.join(__dirname, '../Data/productos.json')/*  */;



//Escribir y Leer archivo JSON
async function readProducts() {
    try {
        const data = await fs.readFile(archiProduct, 'utf-8');
         return JSON. parse(data);

    } catch (error) {
        console.error('Error al leer los datos', error);
        return [];
        
    }

};

async function writeProducts(products) {
    try {
        const data = JSON.stringify(products);
        await fs.writeFile(writeProducts, data, 'utf-8');
        
    } catch (error) {
        console.error('Error al escribir el dato', error)
        
    }
};


//Elegir Productos por Id
const getByIdProducts = async (req, res) => {
    try { 
        const products = await readProducts();
        const { id } = req.params;
        const product = products.find(product => product.id === parseInt(id));

        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error del servidor', error });
    }
};




//Elegir TODOS los productos

const getAllProducts= async(req,res)=>{
    products= await readProducts();
    try {
        res.json(product)
    } catch (error) {
        res.status(500).json({message: 'Error al obtener los productos'})
    }
    
}




//Guardar Productos

const postProducts =  async(req, res) => {

    const { Nombre, Descripcion, Precio} = req.body;

    if (!Nombre || !Precio || !Descripcion) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    const newProduct = {
        id: products.length + 1,
        Nombre,
        Precio
    }
     
    products.push(newProduct);
    await writeProducts(products)
    res.status(201).json(newProduct)

};




//Eliminar Productos

const deleteProducts = async (req, res) => {

    try {

        const {id} = req.params;
        products = await readProducts();

        const producIndex = products.find(product => product.id === parseInt(id));
        
        if (producIndex === -1) {
            return res.status(404).json({ message:'Producto no encontrado' });
        }


        products.splice(producIndex, 1); //elimina con el splice el producto

        await writeProducts(products);
        res.status(200).json({ message: 'Producto eliminado exitosamente.' });


    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        res.status(500).json({ message: "Error interno del servidor." });
    }
};




//Actualizar Productos

const putProductos = async (req,res) => {
 
    try {
        const products= await readProducts();
        const {id} = req.params;    
        const { Nombre, Descripcion, Precio, Cantidad } = req.body;
        const producIndex = products.find(products => products.id == parseInt(id));
        

        //Validaciones

        if (producIndex === -1) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }



        if(Nombre) {
            products[producIndex].Nombre = Nombre;

        }
        if(Descripcion) {
            products[producIndex].Descripcion = Descripcion;
        }
        if(Precio) {
            products[producIndex].Precio = Precio;
        }
        if(Cantidad) {
            products[producIndex].Cantidad = Cantidad;
        }

        await writeProducts(products);
        console.log(req.body); 
        res.status(200).json({ message: "Producto Editado Exitosamente ", products:[producIndex] });

    } catch (error) {
        console.error("Error al eliminar el Producto", error);
        res.status(500).json({message: "Error interno del servidor"});
    }


};



module.exports = { getByIdProducts, getAllProducts, postProducts, deleteProducts, putProductos}