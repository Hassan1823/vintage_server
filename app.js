// * lib imports
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// * express
const app = express();

// * cors
app.use(cors());

// app.use(
//   cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true,
//   })
// );

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(express.static("public"));
app.use(cookieParser());

//* importing routes
import productRouter from "./src/routes/products.routes.js";

// * routes decelearation
app.use("/api/products", productRouter);

//* routes
app.get("/", (req, res) => {
  res.status(200).json("Vintage Server Is Running 🚀");
});

// * test route
app.get("/test", (req, res) => {
  res.status(200).json("Welcome to Vintage Leftover 🚀");
});

app.get("*", (req, res) => {
  res.status(200).json("Invalid Route For Vintage LeftOver 😵❎");
});

export { app };
