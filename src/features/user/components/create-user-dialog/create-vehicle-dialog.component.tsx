import type { FC, PropsWithChildren } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userCreateSchema, type UserCreateSchema } from "../../schemas/user-create-schema.schema";
import { useCreateUserMutation } from "../../hooks/use-create-user-mutation.hook";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export const CreateUserDialog: FC<PropsWithChildren> = ({ children }) => {
  const form = useForm<UserCreateSchema>({
    resolver: zodResolver(userCreateSchema),
    defaultValues: {
      name: "",
      username: "",
      password: "",
      tenantId: "",
      authorityIds: [],
    },
  });

  const createMutation = useCreateUserMutation();

  const onSubmit = async (values: UserCreateSchema) => {
    await createMutation.mutateAsync({
      name: values.name,
      username: values.username,
      password: values.password,
      tenantId: values.tenantId,
      authorityIds: values.authorityIds,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thêm người dùng</DialogTitle>
          <DialogDescription>
            Nhập thông tin người dùng mới.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Họ tên</FormLabel>
                  <FormControl>
                    <Input placeholder="Nguyễn Văn A" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mật khẩu</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tenantId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tenant ID</FormLabel>
                  <FormControl>
                    <Input placeholder="UUID của tenant" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="authorityIds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Authority IDs (UUID)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nhập các UUID, phân tách bằng dấu phẩy"
                      value={field.value.join(",")}
                      onChange={(e) => field.onChange(
                        e.target.value
                          .split(",")
                          .map((s) => s.trim())
                          .filter((s) => s.length > 0)
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-2">
              <Button type="submit" disabled={createMutation.isPending}>
                {createMutation.isPending ? "Đang tạo..." : "Tạo người dùng"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
