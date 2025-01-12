// * imports

// * local import
import { Product } from "../models/product.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// *uploading product
export const createProduct = asyncHandler(async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountedPrice,
      quantity,
      images,
      category,
      tags,
      // colors,
      // sizes,
      specs,
    } = req.body;

    if (
      !name ||
      !description ||
      !price ||
      !discountedPrice ||
      !category ||
      !quantity ||
      !specs ||
      !tags ||
      // !colors ||
      // !sizes ||
      !images
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const productData = {
      name,
      description,
      price,
      discountedPrice,
      images,
      quantity,
      specs,
      tags,
      category,
      // colors,
      // sizes,
    };

    const newProduct = await Product.create(productData);
    if (!newProduct) {
      return res
        .status(500)
        .json({ success: false, message: "Error in creating product" });
    }

    return res.status(200).json({
      success: true,
      message: "Product uploaded successfully",
      product: newProduct,
    });
  } catch (error) {
    console.log("🐱‍👤✨ ~ createProduct ~ error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

// * update product
export const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      price,
      discountedPrice,
      quantity,
      images,
      category,
      tags,
      specs,
    } = req.body;

    if (
      !name ||
      !description ||
      !price ||
      !discountedPrice ||
      !category ||
      !quantity ||
      !specs ||
      !tags ||
      !images
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const productData = {
      name,
      description,
      price,
      discountedPrice,
      images,
      quantity,
      specs,
      tags,
      category,
    };

    const updatedProduct = await Product.findByIdAndUpdate(id, productData, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.log("🐱‍👤✨ ~ updateProduct ~ error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

// * get all products
export const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const getAllProducts = await Product.find();
    if (!getAllProducts) {
      return res
        .status(400)
        .json({ success: false, message: "Error in fetching products" });
    }

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: getAllProducts,
    });
  } catch (error) {
    console.log("🐱‍👤✨ ~ getAllProducts ~ error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});
