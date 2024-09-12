import Company from "../models/company.model.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";
import User from "../models/user.model.js";

export const getAllCompanies = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const { id } = user;

    const userFind = await User.findById(id);

    if (!userFind) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const companies = await Company.find({
      user: userFind._id,
    });

    res.status(200).json(companies);
  } catch (err) {
    res.status(500).json({ message: "Error getting companies" });
  }
};

export const createCompany = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const { id } = user;

    const userFind = await User.findById(id);

    if (!req.file || req.file.mimetype !== "image/png") {
      return res
        .status(400)
        .json({ message: "Por favor, sube un archivo PNG válido" });
    }

    const { name, revenue, size, type, country } = req.body;
    const logoBuffer = req.file.buffer;

    const company = new Company({
      name,
      logo: logoBuffer,
      revenue,
      size,
      type,
      country,
      user: userFind._id,
    });

    const newCompany = await company.save();

    res.status(201).json(newCompany);
  } catch (err) {
    res.status(500).json({
      message: "Error creating company",
    });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, logo, revenue, size, type, country } = req.body;

    const updateCompany = await Company.findByIdAndUpdate(
      {
        id,
      },
      {
        name,
        logo,
        revenue,
        size,
        type,
        country,
      },
      {
        new: true,
      }
    );

    res.status(200).json(updateCompany);
  } catch (err) {
    res.status(500).json({ message: "Error updating company" });
  }
};

export const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteCompany = await Company.findByIdAndDelete(id);

    if (!deleteCompany) {
      return res.status(404).json({ message: "Company not found" });
    }

    res.status(200).json({ message: "Company deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting company" });
  }
};
