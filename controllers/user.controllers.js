import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

export const register = async (req, res) => {
  const { username, password, email, lastname } = req.body;

  try {
    const userFind = await User.findOne({ username });

    if (userFind) {
      return res.status(400).json(["Username already exists"]);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
      email,
      lastname,
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(["Error registering user"]);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFind = await User.findOne({ email });

    if (!userFind) {
      return res.status(400).json(["User not found"]);
    }

    const isPasswordCorrect = await bcrypt.compare(password, userFind.password);

    if (!isPasswordCorrect) {
      return res.status(400).json(["Incorrect password"]);
    }

    const token = jwt.sign(
      {
        id: userFind._id,
        username: userFind.username,
        email: userFind.email,
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("token", token);

    res.status(200).json(["Login successful"]);
  } catch (err) {
    res.status(500).json(["Error logging in"]);
  }
};

export const secure = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    const { id } = data;

    const userFind = await User.findById(id);

    if (!userFind) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    res.status(200).json({
      id: userFind._id,
      username: userFind.username,
      email: userFind.email,
      lastname: userFind.lastname,
    });
  } catch (err) {
    res.status(500).json({ message: "Error secure" });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};
