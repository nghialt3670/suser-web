import { type ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Edit, Trash2 } from "lucide-react"
import type { UserDetailDto } from "../../api/get-user-page.api"

export const userColumns: ColumnDef<UserDetailDto>[] = [
  {
    accessorKey: "username",
    header: "Username",
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("username")}</div>
    },
  },
  {
    accessorKey: "name",
    header: "Họ tên",
    cell: ({ row }) => {
      return <div>{row.getValue("name")}</div>
    },
  },
  {
    accessorKey: "isEnabled",
    header: "Kích hoạt",
    cell: ({ row }) => {
      const enabled = row.getValue("isEnabled") as boolean
      return (
        <Badge variant={enabled ? "default" : "secondary"}>
          {enabled ? "Enabled" : "Disabled"}
        </Badge>
      )
    },
  },
  {
    accessorKey: "isAccountNonLocked",
    header: "Khóa",
    cell: ({ row }) => {
      const nonLocked = row.getValue("isAccountNonLocked") as boolean
      return (
        <Badge variant={nonLocked ? "default" : "destructive"}>
          {nonLocked ? "Unlocked" : "Locked"}
        </Badge>
      )
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