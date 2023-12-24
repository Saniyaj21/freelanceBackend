import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  article: {
    type: String,
  },
  product: {
    type: String,
  },
  inPrice: {
    type: Number,
  },
  price: {
    type: Number,
  },
  unit: {
    type: String,
  },
  inStock: {
    type: Number,
  },
  description: {
    type: String,
  },
});

export const ArticleModel = mongoose.model("Article", articleSchema);
