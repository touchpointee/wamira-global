import mongoose, { Schema, models } from "mongoose";

const ServiceSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String, required: true },
    features: [{ type: String }],
    benefits: [{ type: String }],
    image: { type: String, required: true },
    icon: { type: String, required: true },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default models.Service || mongoose.model("Service", ServiceSchema);
