import { Router } from "express";
import {
  getAllCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
} from "../controllers/company.controllers.js";
import { isValidate } from "../middlewares/user.middleware.js";
import { createAndUpdateCompanySchema } from "../schemas/company.schema.js";
import upload from "../middlewares/upload.js";

const routes = Router();

routes.get("/", getAllCompanies);

routes.post(
  "/",
  upload.single("logo"),
  isValidate(createAndUpdateCompanySchema),
  createCompany
);

routes.put("/:id", isValidate(createAndUpdateCompanySchema), updateCompany);

routes.delete("/:id", deleteCompany);

export default routes;
