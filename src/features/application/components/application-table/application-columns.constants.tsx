import { type ColumnDef } from "@tanstack/react-table"
import type { ApplicationDetailDto } from "../../api/get-application-page.api"

export const applicationColumns: ColumnDef<ApplicationDetailDto>[] = [
  {
    accessorKey: "name",
    header: "Tên ứng dụng",
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("name")}</div>
    },
  },
]


