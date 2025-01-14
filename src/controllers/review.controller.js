import { Product } from "../models/product.model.js";
import { Review } from "../models/review.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// * adding review for thr product
export const addReview = asyncHandler(async (req, res) => {
  try {
    const productId = req.params.id;
    const { userName, rating, comment } = req.body;
    if (!productId) {
      return res
        .status(400)
        .json({ success: false, message: "Product Id is required" });
    }
    if (!userName || !rating || !comment) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const review = await Review.create({ userName, rating, comment });
    if (!review) {
      return res
        .status(400)
        .json({ success: false, message: "Review not created" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    product.review = review._id;
    product.rating = review.rating + product.rating / 5;
    console.log(
      "🐱‍👤✨ ~ addReview ~ review.rating + product.rating / 5:",
      review.rating + product.rating / 5
    );
    const updatedProduct = await product.save();

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    return res.status(201).json({
      success: true,
      message: "Review Added Successfully!",
      data: review,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});
