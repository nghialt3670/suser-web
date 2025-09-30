import type { FC, PropsWithChildren } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { tenantCreateSchema, type TenantCreateSchema } from "../../schemas/tenant-create-schema.schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateTenantMutation } from "../../hooks/use-create-tenant-mutation.hook";

export const CreateTenantDialog: FC<PropsWithChildren> = ({ children }) => {
  const form = useForm<TenantCreateSchema>({
    resolver: zodResolver(tenantCreateSchema),
    defaultValues: { name: "" },
  });

  const mutation = useCreateTenantMutation();

  const onSubmit = async (values: TenantCreateSchema) => {
    await mutation.mutateAsync({ name: values.name });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thêm tenant</DialogTitle>
          <DialogDescription>Nhập thông tin tenant mới.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên tenant</FormLabel>
                  <FormControl>
                    <Input placeholder="Tên tenant" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-2">
              <Button type="submit" disabled={mutation.isPending}>
                {mutation.isPending ? "Đang tạo..." : "Tạo tenant"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};


