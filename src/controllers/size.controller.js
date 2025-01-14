import { Product } from "../models/product.model.js";
import { Size } from "../models/size.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// * adding the size chart
export const addSize = asyncHandler(async (req, res) => {
  try {
    const { chart } = req.body;
    const productId = req.params.id;

    if (!productId) {
      return res
        .status(400)
        .json({ success: false, message: "Product Id is required" });
    }
    if (!chart) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const size = await Size.create({ chart });
    if (!size) {
      return res
        .status(400)
        .json({ success: false, message: "Size not created" });
    }

    //* adding size id to product
    const product = await Product.findByIdAndUpdate(
      { _id: productId }, // finding product using id
      { size: size._id }, //updating the product with size id
      { new: true, runValidators: true }
    );

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    return res.status(201).json({ success: true, data: size });
  } catch (error) {
    console.log("🐱‍👤✨ ~ addSize ~ error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});
