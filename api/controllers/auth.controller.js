import { errorHandler } from "../../utils/error.js";
import User from "../models/user.model.js";
import bcriptjs from 'bcryptjs'

export const signup = async (req, res,next) => {
    const { username, email, password } = req.body;
    const hashedpassword = bcriptjs.hashSync(password,10);

    try {
        // Create a new user
        const newUser = new User({ username, email, password:hashedpassword});
        
        // Save the user to the database
        await newUser.save();
        
        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        if (error.code === 11000) {
            // Duplicate key error
            const field = Object.keys(error.keyPattern)[0];
            next(errorHandler(400,`${field} already exists`));
        } else {
            res.status(500).send({ message: 'Server error' });
        }
    }
};
