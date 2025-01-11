// * imports
import mongoose from "mongoose";

// * local import
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Product } from "../models/product.model.js";

// *uploading product
const uploadProduct = asyncHandler(async (req, res) => {
  try {
    const {
      productName,
      productDescription,
      productPrice,
      productDiscountedPrice,
    } = req.body;

    if (
      !productName ||
      !productDescription ||
      !productPrice ||
      !productDiscountedPrice
    ) {
      throw new ApiError(400, "All fields are required");
    }

    const productData = {
      productName,
      productDescription,
      productPrice,
      productDiscountedPrice,
    };

    const newProduct = await Product(productData);

    if (!newProduct) {
      throw new ApiError(500, "Product not uploaded");
    }
    return new ApiResponse(200, "Product uploaded successfully", newProduct);
  } catch (error) {
    throw new ApiError(500, error?.message || "Internal Server Error");
  }
});

// * exporting
export { uploadProduct };
