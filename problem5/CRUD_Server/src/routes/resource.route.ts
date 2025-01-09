import express from "express";
import {
  getAllResource,
  getResourceById,
  createResource,
  updateResource,
  deleteResource,
  filterResource,
} from "../controllers/resource.controller";

const router = express.Router();

//get all
router.get("/getAll", getAllResource);

//get by id
//@ts-ignore
router.get("/get/:id", getResourceById);

//create
router.post("/create", createResource);

//filter
router.get("/filter", filterResource);

//update
//@ts-ignore
router.put("/update/:id", updateResource);

//delete
//@ts-ignore
router.delete("/delete/:id", deleteResource);

export default router;
