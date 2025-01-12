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
      type: String,
      required: true,
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
    // sizes: {
    //   type: [String],
    //   required: false,
    // },
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
