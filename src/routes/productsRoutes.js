const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

//Endpoints manuales

router.get('/', productController.getAllProducts);
router.post('/', productController.postProducts);
router.delete('/:id', productController.deleteProducts)
router.put('/:id', productController.putProductos)
router.get('/:id', productController.getByIdProducts)

module.exports = router;