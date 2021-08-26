import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const router = express.Router();

Router.get(
    "/",
    asyncHandler(async (req, res) => {
        const products = await products.find({});
        res.json(products);
    })
);

Router.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    })
);

export default router;
