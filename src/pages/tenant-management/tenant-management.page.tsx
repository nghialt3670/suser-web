import type { FC } from "react";
import { TenantTable } from "@/features/tenant/components/tenant-table/tenant-table.component";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { CreateTenantDialog } from "@/features/tenant/components/create-tenant-dialog/create-tenant-dialog.component";

export const TenantManagement: FC = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-row justify-between items-start">
        <h1 className="text-2xl font-bold">Quản lý tenant</h1>
        <CreateTenantDialog>
          <Button>
            <PlusIcon className="w-4 h-4" />
            <span>Thêm tenant</span>
          </Button>
        </CreateTenantDialog>
      </div>
      <TenantTable />
    </div>
  );
};

