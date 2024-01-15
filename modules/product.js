import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
  },
  slug: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  quantity: {
    type: Number,
    default: 1, // or any other default value
  },
  photo: {
    type: String,
  },
  shipping: {
    type: Boolean,
    default: false, // or any other default value
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
