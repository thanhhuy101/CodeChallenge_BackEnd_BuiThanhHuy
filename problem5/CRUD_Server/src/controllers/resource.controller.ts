import { Request, Response } from "express";
import Resource from "../models/resource.model";
import { IResource, ResourceQuery } from "../types/resource.type";

export const createResource = async (
  req: Request<{}, {}, IResource>,
  res: Response
) => {
  try {
    const resource = new Resource(req.body);
    await resource.save();
    res.status(201).json({ message: "Create success", resource: resource });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const filterResource = async (
  req: Request<{}, {}, {}, ResourceQuery>,
  res: Response
) => {
  try {
    const { category, name, describe, search } = req.query;
    let query: any = {};

    if (category) {
      query.category = category;
    }

    if (name) {
      query.name = name;
    }

    if (describe) {
      query.describe = describe;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ];
    }

    const resources = await Resource.find(query).sort({ createdAt: -1 });
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getAllResource = async (_req: Request, res: Response) => {
  try {
    const resources = await Resource.find({});
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getResourceById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).send("Resource not found");
    }
    return res.json(resource);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export const updateResource = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ error: "Resource not found" });
    }

    Object.assign(resource, req.body);
    await resource.save();
    return res.json(resource);
  } catch (error) {
    return res.status(400).json({ error: (error as Error).message });
  }
};

export const deleteResource = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) {
      return res.status(404).json({ error: "Resource not found" });
    }
    return res.status(200).json({ message: "Resource deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};
