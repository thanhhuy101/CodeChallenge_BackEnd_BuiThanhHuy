import mongoose, { Schema } from "mongoose";
import { IResourceDocument } from "../types/resource.type";

const resourceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    describe: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Resource = mongoose.model<IResourceDocument>("Resource", resourceSchema);

export default Resource;
