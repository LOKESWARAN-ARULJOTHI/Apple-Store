import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import productRouter from "./routes/productRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!!"));

app.use("/api/products", productRouter);

app.listen(port, () =>
    console.log(
        `Server running in ${process.env.NODE_ENV} on ${port}`.yellow.underline
            .bold
    )
);
