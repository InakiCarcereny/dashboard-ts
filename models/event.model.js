import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    dateInit: {
      type: String,
      required: true,
    },
    hourInit: {
      type: String,
      required: true,
    },
    dateEnd: {
      type: String,
      required: true,
    },
    hourEnd: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Event", eventSchema);
