import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const productDescriptionSchema = new Schema(
  {
    mainDescription: {
      type: String,
      required: true,
    },
    subDescription: {
      type: [
        {
          title: {
            type: String,
            required: true,
          },
          desc: {
            type: String,
            required: true,
          },
        },
      ],
      required: true,
    },
  },
  { timestamps: true }
);

productDescriptionSchema.plugin(mongooseAggregatePaginate);

export const Description = mongoose.model(
  "Description",
  productDescriptionSchema
);
