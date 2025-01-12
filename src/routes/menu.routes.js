import { Router } from "express";

// * routes import
import { createMenu, getAllMenu } from "../controllers/menu.controller.js";

const router = Router();

//~ routes

// * create menu route
router.route("/create").post(createMenu);

// * get all menu route
router.route("/getAll").get(getAllMenu);

export default router;
