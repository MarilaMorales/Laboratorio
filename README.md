Nombre del Proyecto: Laboratorio API:

# API de Productos con Express

Esta es una API simple creada con Express.js que permite gestionar productos. Incluye funcionalidades para crear, leer, actualizar y eliminar productos almacenados en un archivo JSON.

## Tecnologías utilizadas

- Node.js
- Express.js
- fs (File System)
- path


### Descripción de Archivos

- server.js: Archivo principal que configura el servidor Express y las rutas.
- src/routes/productsRoutes.js: Define las rutas de la API para gestionar productos.
- src/controllers/productController.js: Contiene la lógica para manejar las operaciones sobre los productos.
- src/Data/productos.json: Archivo JSON donde se almacenan los productos.


## Endpoints

La API ofrece los siguientes endpoints:

- **GET** /api/productos: Obtiene todos los productos.
- **GET** /api/productos/:id: Obtiene un producto por su ID.
- **POST** /api/productos: Crea un nuevo producto.
- **PUT** /api/productos/:id: Actualiza un producto existente.
- **DELETE** /api/productos/:id: Elimina un producto por su ID.


## Esquema:


Claro, aquí tienes un esquema simple de la estructura del proyecto que has compartido. Esto te ayudará a visualizar cómo se organizan los archivos y carpetas:

/Laboratorio API/
│
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── productController.js
│   │
│   ├── routes/
│   │   └── productsRoutes.js
│   │
│   └── Data/
│       └── productos.json
│
├── .gitignore
├── package.json
├── package-lock.json
└── server.js