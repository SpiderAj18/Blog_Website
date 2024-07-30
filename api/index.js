import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();
app.use(express.json());

const port = process.env.PORT;

try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");
} catch (error) {
  console.log("unable to connect to db:", error);
}

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute); // Corrected here


app.use((err,req,res,next)=>{
    const statusCode =err.statusCode || 500;
    const message = err.message ||'Internal server error';
    res.status(statusCode).json({
        success : false,
        statusCode,
        message
    })
})
