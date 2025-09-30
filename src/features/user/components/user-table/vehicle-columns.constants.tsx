import { type ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Edit, Trash2 } from "lucide-react"
import type { VehicleDetailDto } from "../../types/vehicle-detail-dto.type"

export const vehicleColumns: ColumnDef<VehicleDetailDto>[] = [
  {
    accessorKey: "licensePlate",
    header: "Biển số",
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("licensePlate")}</div>
    },
  },
  {
    accessorKey: "model",
    header: "Model",
    cell: ({ row }) => {
      return <div>{row.getValue("model")}</div>
    },
  },
  {
    accessorKey: "type",
    header: "Loại xe",
    cell: ({ row }) => {
      return <div>{row.getValue("type")}</div>
    },
  },
  {
    accessorKey: "yearOfManufacture",
    header: "Năm SX",
    cell: ({ row }) => {
      return <div>{row.getValue("yearOfManufacture")}</div>
    },
  },
  {
    accessorKey: "kilometersDriven",
    header: "Km đã đi",
    cell: ({ row }) => {
      const km = row.getValue("kilometersDriven") as number
      return <div>{km.toLocaleString()} km</div>
    },
  },
  {
    accessorKey: "status",
    header: "Trạng thái",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge variant="outline">
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "nextMaintenanceDate",
    header: "Bảo dưỡng tiếp theo",
    cell: ({ row }) => {
      return <div>{row.getValue("nextMaintenanceDate")}</div>
    },
  },
  {
    id: "actions",
    header: "Thao tác",
    cell: () => {
      return (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      )
    },
  },
]