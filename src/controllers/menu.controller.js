// * imports

// * local import
import { Menu } from "../models/menu.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// *create menu
export const createMenu = asyncHandler(async (req, res) => {
  try {
    const { name, link, subMenu } = req.body;
    if (!name || !link) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    let menuData;

    if (subMenu) {
      menuData = {
        name,
        link,
        subMenu,
      };
    } else {
      menuData = {
        name,
        link,
      };
    }

    const newMenu = await Menu.create(menuData);
    if (!newMenu) {
      return res
        .status(400)
        .json({ success: false, message: "Error in creating menu" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Menu created successfully", newMenu });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

//* get all menu
export const getAllMenu = asyncHandler(async (req, res) => {
  try {
    const allMenu = await Menu.find();
    if (!allMenu) {
      return res
        .status(400)
        .json({ success: false, message: "Error in fetching menu" });
    }
    return res
      .status(200)
      .json({
        success: true,
        message: "Menu list fetched successfully",
        data: allMenu,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});
