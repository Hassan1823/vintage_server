import { Router } from "express";

// * local imports
import {
  createProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/products.controller.js";

const router = Router();

//! routes

// * create product route
router.route("/create").post(createProduct);

// * update product route
router.route("/update/:id").post(updateProduct);

// * get all products
router.route("/getAll").get(getAllProducts);

export default router;
