import express from "express";
import {
  getAllResource,
  getResourceById,
  createResource,
  updateResource,
  deleteResource,
  filterResource,
} from "../controllers/resource.controller.js";

const router = express.Router();

//get all
router.get("/getAll", getAllResource);

//get by id
router.get("/get/:id", getResourceById);

//create
router.post("/create", createResource);

//filter
router.get("/filter", filterResource);

//update
router.put("/update/:id", updateResource);

//delete
router.delete("/delete/:id", deleteResource);

export default router;
