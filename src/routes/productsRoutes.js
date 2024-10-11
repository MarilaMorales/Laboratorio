const fs = require('fs').promises ;
const path = require('path');

const archiProduct = path.join(__dirname, '../Data/productos.json');

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


module.exports = {
    writeProducts, readProducts, getByIdProducts
}