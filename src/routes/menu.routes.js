import { Router } from "express";

// * routes import
import {
  createMenu,
  getAllMenu,
  updateMenu,
} from "../controllers/menu.controller.js";

const router = Router();

//~ routes

// * create menu route
router.route("/create").post(createMenu);

// * update menu route
router.route("/update/:id").post(updateMenu);

// * get all menu route
router.route("/getAll").get(getAllMenu);

export default router;
