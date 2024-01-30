const express = require("express");
const router = express.Router();
const ProductosController = require("../controllers/Productos");
const { Products } = require("../models/Conexion");
const multer = require("multer");
const auth = require("../controllers/auth");
const sharp = require("sharp");

/**
 * Funcion para Capturar Datos de una Imagen y Guardarla
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    let imagePath = Date.now() + "-" + file.originalname;
    cb(null, imagePath);
  },
});

/**
 * Funcion Para Guardar Imagen y darle un Tamaño Maximo
 */
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // Tamaño máximo: 50 MB
  },
});

/**
 * RESIZE
 */

const HelpImg = (filePath, nombre, size = 300) => {
  return sharp(filePath).resize(size, size).toFile(`./uploads/${nombre}`);
};

router.get(
  "/productos/listar/:pagina?",
  ProductosController.ListarProductosInnerJoin
);

router.get(
  "/productos/listarNo",
  ProductosController.ListarProductosInnerJoinNo
);

router.get(
  "/productos/listarMasVendido",
  ProductosController.ListarProductosInnerMasVendido
);

router.get(
  "/productos/listarCategoria/:id",
  auth,
  ProductosController.ListarProductosXCate
);

/**
 * Ruta con Funcion para Agregar datos al Base de Datos y Guardar Una Ruta de la Imagen
 */
router.post(
  "/productos/Agregar",
  upload.single("Imagen1"),
  auth,
  async (req, res) => {
    try {
      console.table(req.body);
      console.log("REQ FILE 2", req.file);
      // Redimensionar la imagen antes de almacenarla
      // Ruta completa del archivo
      const filePath = req.file.path;
      // Redimensionar la imagen antes de almacenarla
      const originalname = req.file.filename;
      HelpImg(req.file.path, "resize-" + originalname, 300);
      //Guardar
      const imagePath = `http://localhost:2100/${"resize-" + originalname}`;
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
/**
 * Ruta con Funcion para Editar datos en la Base de Datos y Actualizar la Ruta de la Imagen
 */
router.put(
  "/productos/Editar/:id",
  upload.single("Imagen1"),
  auth,
  async (req, res) => {
    try {
      const originalname = req.file.filename;
      HelpImg(req.file.path, "resize-" + originalname, 300);
      const imagePath = `http://localhost:2100/${"resize-" + originalname}`;
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

router.delete(
  "/productos/eliminar/:id",
  auth,
  ProductosController.EliminarProductos
);

router.get(
  "/productos/listarUno/:id",
  auth,
  ProductosController.ListarProductoXid
);

router.post(
  "/productos/disponibilidad/:id",
  auth,
  ProductosController.VerDispo
);

module.exports = router;
