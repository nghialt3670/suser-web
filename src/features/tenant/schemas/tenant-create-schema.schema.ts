import { z } from "zod";

export const tenantCreateSchema = z.object({
  name: z.string().min(1, "Tên tenant là bắt buộc"),
});

export type TenantCreateSchema = z.infer<typeof tenantCreateSchema>;


