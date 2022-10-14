import express from "express";
import countryRoute from "./countries/index.js";
// routes

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes

// Un-Protected Routes
unProtectedRouter.use("/countries", countryRoute);
export { protectedRouter, unProtectedRouter };
