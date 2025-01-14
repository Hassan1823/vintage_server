import { Router } from "express";

// * local imports
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/products.controller.js";
import { addSize } from "../controllers/size.controller.js";
import { addReview } from "../controllers/review.controller.js";

const router = Router();

//! routes

// * get all products
router.route("/getAll").get(getAllProducts);

// * create product route
router.route("/create").post(createProduct);

// * update product route
router.route("/update/:id").post(updateProduct);

// * delete product
router.route("/delete/:id").delete(deleteProduct);

// * adding product size
router.route("/addSize/:id").post(addSize);

// * adding product review
router.route("/addReview/:id").post(addReview);

export default router;
