import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema(
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

const Resource = mongoose.model("Resource", resourceSchema);

export default Resource;
