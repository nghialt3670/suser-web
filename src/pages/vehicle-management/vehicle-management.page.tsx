import { Button } from "@/components/ui/button";
import { CreateVehicleDialog } from "@/features/vehicle/components/create-vehicle-dialog";
import { VehicleTable } from "@/features/vehicle/components/vehicle-table";
import { PlusIcon } from "lucide-react";
import type { FC } from "react";

export const VehicleManagement: FC = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-row justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">Quản lý xe</h1>
          <p className="text-sm text-gray-500">Danh sách và thông tin chi tiết các phương tiện</p>
        </div>
        <CreateVehicleDialog>
          <Button>
            <PlusIcon className="w-4 h-4" />
            <span>Thêm xe mới</span>
          </Button>
        </CreateVehicleDialog>
      </div>
      <VehicleTable />
    </div>
  )
};

