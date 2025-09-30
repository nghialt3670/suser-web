import { z } from "zod";

export const userCreateSchema = z.object({
  name: z.string().min(1, "Tên là bắt buộc"),
  username: z
    .string()
    .min(3, "Username tối thiểu 3 ký tự")
    .regex(/^[a-zA-Z0-9._-]+$/, "Username chỉ gồm chữ, số và ._-"),
  password: z.string().min(6, "Mật khẩu tối thiểu 6 ký tự"),
  tenantId: z.string().uuid("Tenant không hợp lệ"),
  authorityIds: z.array(z.string().uuid()).min(1, "Chọn ít nhất 1 quyền"),
});

export type UserCreateSchema = z.infer<typeof userCreateSchema>;


