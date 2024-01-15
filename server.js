import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connection from "./config/db.js";
import productRouter from "./router/productRouter.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

dotenv.config();

// Connect to the database
connection();

const app = express();

// Use CORS middleware
app.use(cors());

// Body parser middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set up middleware to serve static files
app.use(express.static(join(__dirname, "public/uploads")));
app.use("/api/v1", productRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`
  );
});
