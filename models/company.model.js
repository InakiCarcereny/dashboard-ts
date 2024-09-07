import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: Buffer,
      required: true,
    },
    revenue: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Company", companySchema);
