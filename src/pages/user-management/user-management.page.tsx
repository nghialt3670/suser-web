import { Button } from "@/components/ui/button";
import { CreateVehicleDialog } from "@/features/user/components/create-user-dialog";
import { UserTable } from "@/features/user/components/user-table";
import { PlusIcon } from "lucide-react";
import type { FC } from "react";

export const UserManagement: FC = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-row justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">Quản lý người dùng</h1>
          <p className="text-sm text-gray-500">Danh sách và thông tin chi tiết các người dùng</p>
        </div>
        <CreateVehicleDialog>
          <Button>
            <PlusIcon className="w-4 h-4" />
            <span>Thêm người dùng mới</span>
          </Button>
        </CreateVehicleDialog>
      </div>
      <UserTable />
    </div>
  )
};

