import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
});

// create product model only if it doesn't exist
export const Product = models.Product || model("Product", productSchema);
