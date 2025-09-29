import type { z } from "zod";
import type { vehicleUpdateSchema } from "../schemas/vehicle-update-schema.schema";

export type VehicleUpdate = z.infer<typeof vehicleUpdateSchema>