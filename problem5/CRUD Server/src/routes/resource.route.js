import express from "express";
import {
  getAllResource,
  getResourceById,
} from "../controllers/resource.controller.js";

const router = express.Router();

//get all
router.get("/getAll", getAllResource);

//get by id
router.get("/get/:id", getResourceById);
//
router.post("/create", (req, res) => {});
//
router.put("/update/:id", (req, res) => {});
//
router.delete("/delete/:id", (req, res) => {});

export default router;
