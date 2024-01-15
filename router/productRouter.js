import express from "express";
import { createProduct, getProduct } from "../controller/product.js";
import upload from "../config/uploader.js";

const router = express.Router();

router.post("/createProduct", upload.single("photo"), createProduct);
router.get("/getProduct", getProduct);

export default router;
