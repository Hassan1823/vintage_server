import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const sizeSchema = new Schema(
  {
    chart: [
      {
        size: {
          type: String,
          required: true,
        },
        chest: {
          type: String,
          required: false,
        },
        length: {
          type: String,
          required: false,
        },
        sleeve: {
          type: String,
          required: false,
        },
        waist: {
          type: String,
          required: false,
        },
        scale: {
          type: String,
          required: false,
          default: "cm",
        },
      },
    ],
  },
  { timestamps: true }
);

sizeSchema.plugin(mongooseAggregatePaginate);

export const Size = mongoose.model("Size", sizeSchema);
