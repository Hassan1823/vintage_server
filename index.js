// * lib imports
import dotenv from "dotenv";

// * local imports
import { app } from "./app.js";
import connectDB from "./db/index.js";

// * config
dotenv.config({
  path: "./.env",
});

// * starting server
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️  Server is running at PORT : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB connection failed !!! ", err);
  });
