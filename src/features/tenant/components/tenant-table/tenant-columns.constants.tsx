import { type ColumnDef } from "@tanstack/react-table"
import type { TenantDetailDto } from "../../api/get-tenant-page.api"

export const tenantColumns: ColumnDef<TenantDetailDto>[] = [
  {
    accessorKey: "name",
    header: "Tên tenant",
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("name")}</div>
    },
  },
]


