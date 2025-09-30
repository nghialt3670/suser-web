import type { FC, PropsWithChildren } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationCreateSchema, type ApplicationCreateSchema } from "../../schemas/application-create-schema.schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateApplicationMutation } from "../../hooks/use-create-application-mutation.hook";

export const CreateApplicationDialog: FC<PropsWithChildren> = ({ children }) => {
  const form = useForm<ApplicationCreateSchema>({
    resolver: zodResolver(applicationCreateSchema),
    defaultValues: { name: "" },
  });

  const mutation = useCreateApplicationMutation();

  const onSubmit = async (values: ApplicationCreateSchema) => {
    await mutation.mutateAsync({ name: values.name });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thêm ứng dụng</DialogTitle>
          <DialogDescription>Nhập thông tin ứng dụng mới.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên ứng dụng</FormLabel>
                  <FormControl>
                    <Input placeholder="Tên ứng dụng" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-2">
              <Button type="submit" disabled={mutation.isPending}>
                {mutation.isPending ? "Đang tạo..." : "Tạo ứng dụng"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};


