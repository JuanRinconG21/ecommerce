const express = require("express");
const router = express.Router();
const ProductosController = require("../controllers/Productos");
const { Products } = require("../models/Conexion");
const multer = require("multer");
const { route } = require("./Categorias");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    let imagePath = file.originalname;
    cb(null, imagePath);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // Tamaño máximo: 50 MB
  },
});

router.get("/productos/listar", ProductosController.ListarProductosInnerJoin);

router.get(
  "/productos/listarCategoria/:id",
  ProductosController.ListarProductosXCate
);

router.post(
  "/productos/Agregar",
  upload.single("Imagen1"),
  async (req, res) => {
    try {
      const originalname = req.file.filename;
      const imagePath = `http://127.0.0.1:3900/images/${originalname}`;
      const Producto = await Products.create({
        ...req.body,
        Imagen1: imagePath,
      });
      res.send({ id: 200, mensaje: "Producto Creado Correctamente" });
    } catch (error) {
      res.send({ id: 400, mensaje: error.message });
    }
  }
);
router.put(
  "/productos/Editar/:id",
  upload.single("Imagen1"),
  async (req, res) => {
    try {
      const originalname = req.file.filename;
      const imagePath = `http://127.0.0.1:3900/images/${originalname}`;
      const Producto = await Products.update(
        { ...req.body, Imagen1: imagePath },
        {
          where: { idProducto: req.params.id },
        }
      );
      res.send({ id: 200, mensaje: "Producto Editado Correctamente" });
    } catch (error) {
      res.send({ id: 400, mensaje: error.message });
    }
  }
);

router.delete("/productos/eliminar/:id", ProductosController.EliminarProductos);

router.get("/productos/listarUno/:id", ProductosController.ListarProductoXid);

module.exports = router;
