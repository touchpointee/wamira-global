import mongoose, { Schema, models } from "mongoose";

const ResourceArticleSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    isPublished: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default models.ResourceArticle || mongoose.model("ResourceArticle", ResourceArticleSchema);
