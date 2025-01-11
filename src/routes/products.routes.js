import { Router } from "express";

// * local imports
import { uploadProduct } from "../controllers/products.controller.js";

const router = Router();

//! routes

// * create product route
router.route("/create").post(uploadProduct);

export default router;
