import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    description: {
      type: Schema.Types.ObjectId,
      ref: "Description",
      required: true,
    },
    size: {
      type: Schema.Types.ObjectId,
      ref: "Size",
      required: false,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountedPrice: {
      type: Number,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    specs: {
      type: [
        {
          colorImg: {
            type: String,
            required: true,
          },
          colorName: {
            type: String,
            required: true,
          },
          sizes: {
            type: [String],
            required: false,
          },
        },
      ],
      required: false,
    },
    review: {
      type: Schema.Types.ObjectId,
      ref: "Review",
      required: false,
    },
    rating: {
      type: Number,
      required: false,
      default: 0,
    },
    topRated: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.plugin(mongooseAggregatePaginate);

export const Product = mongoose.model("Product", productSchema);
