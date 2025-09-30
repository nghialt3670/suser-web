import type { vehicleCreateSchema } from "../schemas/vehicle-create-schema.schema";
import type { z } from "zod";

export type VehicleCreate = z.infer<typeof vehicleCreateSchema>