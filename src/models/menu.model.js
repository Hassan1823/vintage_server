import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const menuSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    subMenu: {
      type: [
        {
          name: {
            type: String,
            required: true,
          },
          link: {
            type: String,
            required: true,
          },
        },
      ],
      required: false,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

menuSchema.plugin(mongooseAggregatePaginate);
export const Menu = mongoose.model("Menu", menuSchema);
