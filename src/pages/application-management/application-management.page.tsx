import type { FC } from "react";
import { ApplicationTable } from "@/features/application/components/application-table/application-table.component";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { CreateApplicationDialog } from "@/features/application/components/create-application-dialog/create-application-dialog.component";

export const ApplicationManagement: FC = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-row justify-between items-start">
        <h1 className="text-2xl font-bold">Quản lý ứng dụng</h1>
        <CreateApplicationDialog>
          <Button>
            <PlusIcon className="w-4 h-4" />
            <span>Thêm ứng dụng</span>
          </Button>
        </CreateApplicationDialog>
      </div>
      <ApplicationTable />
    </div>
  );
};

