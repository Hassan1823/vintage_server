import { Router } from "express";

// * local imports
import {
  createProduct,
  getAllProducts,
} from "../controllers/products.controller.js";

const router = Router();

//! routes

// * create product route
router.route("/create").post(createProduct);

// * get all products
router.route("/getAll").get(getAllProducts);

export default router;
