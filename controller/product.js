import fs from "fs";
import express from "express";
import product from "../modules/product.js";
import path from "path";

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, quantity, shipping } = req.body;
    const imagePath = req.file.path.replace("public" + path.sep, "");

    // Remove "uploads\\" prefix from imagePath
    const relativeImagePath = imagePath.replace("uploads" + path.sep, "");

    const data = {
      name: name,
      description: description,
      price: price,
      category: category,
      quantity: quantity,
      shipping: shipping,
      photo: relativeImagePath,
    };
    const products = new product(data);
    await products.save();
    res.status(201).send({
      success: true,
      message: "Product created successfully",
      products: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in product creating",
      error,
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const products = await product.find({}).limit(12).sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      totalCount: products.length,
      message: "all product getting suucessfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};
