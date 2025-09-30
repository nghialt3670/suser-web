import { DataTable } from "@/components/common/data-table/data-table.component"
import { useParams } from "react-router-dom"
import { useGetTenantPageQuery } from "../../hooks/use-get-tenant-page-query.hook"
import { tenantColumns } from "./tenant-columns.constants"

export const TenantTable = () => {
  const params = useParams();

  const { data } = useGetTenantPageQuery({
    keyword: params.keyword as string,
    page: params.page ? parseInt(params.page as string) : 1,
    size: params.size ? parseInt(params.size as string) : 10,
  })

  return (
    <div>
      <DataTable columns={tenantColumns} data={data?.data?.items ?? []} />
    </div>
  )
}


