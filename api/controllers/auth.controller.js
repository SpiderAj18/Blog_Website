import { errorHandler } from "../../utils/error.js";
import User from "../models/user.model.js";
import bcriptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedpassword = bcriptjs.hashSync(password, 10);

  try {
    // Create a new user
    const newUser = new User({ username, email, password: hashedpassword });

    // Save the user to the database
    await newUser.save();

    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      const field = Object.keys(error.keyPattern)[0];
      next(errorHandler(400, `${field} already exists`));
    } else {
      res.status(500).send({ message: "Server error" });
    }
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email == "" || password == "") {
    return next(errorHandler(400, "All fields are required"));
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(400, "user doesn't exist"));
    }
    const validPassword = bcriptjs.compareSync(password, user.password);
    if (!validPassword) {
      return next(errorHandler(400, "invalid credentials"));
    }
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.SECRETKEY
    );
      const {password:pass, ...rest} = user._doc;

    res.status(200).cookie('access_token',token,{
        httpOnly:true,
    }).json({message:'Signin Successfully',user:rest})
  } catch (error) {
    next(error);
  }
};
