// * imports

// * local import
import { Product } from "../models/product.model.js";
import { Description } from "../models/description.meodel.js";
import { asyncHandler } from "../utils/asyncHandler.js";
// ~------------------------------- Description Controller -------------------------------~
export const addDescription = async (
  mainDescription,
  subDescription,
  req,
  res
) => {
  try {
    // const { mainDescription, subDescription } = req.body;
    if (!mainDescription || !subDescription) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const descriptionData = {
      mainDescription,
      subDescription,
    };
    const newDescription = await Description.create(descriptionData);
    if (!newDescription) {
      return res
        .status(500)
        .json({ success: false, message: "Error in creating description" });
    }
    console.log("🐱‍👤✨ ~ newDescription:", newDescription._id);

    return newDescription._id;
  } catch (error) {
    console.log("🐱‍👤✨ ~ addDescription ~ error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

// ~------------------------------- Description Controller -------------------------------~

// *uploading product
export const createProduct = asyncHandler(async (req, res) => {
  try {
    const {
      name,
      price,
      discountedPrice,
      quantity,
      images,
      category,
      tags,
      mainDescription,
      subDescription,
      // colors,
      // sizes,
      specs,
    } = req.body;

    if (
      !name ||
      !price ||
      !discountedPrice ||
      !category ||
      !quantity ||
      !specs ||
      !tags ||
      !mainDescription ||
      !subDescription ||
      // !colors ||
      // !sizes ||
      !images
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // * adding description
    const description = await addDescription(
      mainDescription,
      subDescription,
      req,
      res
    );
    console.log("🐱‍👤✨ ~ createProduct ~ description:", description);

    if (!description) {
      return res
        .status(404)
        .json({ success: false, message: "Description Id not found" });
    }

    const productData = {
      name,
      price,
      discountedPrice,
      images,
      quantity,
      specs,
      tags,
      category,
      description: description,
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

// * delete product
export const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log("🐱‍👤✨ ~ deleteProduct ~ error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});
