// src/adminjs/resources/index.ts

import { ResourceWithOptions } from "adminjs";
import { User } from "../../models";
import { userResourceOptions } from "./user";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: User,
    options: userResourceOptions
  }
]