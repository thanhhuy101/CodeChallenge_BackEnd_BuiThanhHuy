import { Document } from "mongoose";

export interface IResource {
  name: string;
  describe: string;
  category: string;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IResourceDocument extends IResource, Document {}

export interface ResourceQuery {
  category?: string;
  name?: string;
  describe?: string;
  search?: string;
}
