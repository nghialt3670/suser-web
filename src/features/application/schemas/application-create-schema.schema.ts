import { z } from "zod";

export const applicationCreateSchema = z.object({
  name: z.string().min(1, "Tên ứng dụng là bắt buộc"),
});

export type ApplicationCreateSchema = z.infer<typeof applicationCreateSchema>;


