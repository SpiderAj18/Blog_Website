import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";

const app = express();

const port = process.env.PORT;

try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");
} catch (error) {
  console.log("unable to connect to db :", error);
}

app.use('/api/user',userRoute)

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
