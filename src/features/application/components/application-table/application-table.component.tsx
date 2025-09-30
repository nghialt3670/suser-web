import { DataTable } from "@/components/common/data-table/data-table.component"
import { useParams } from "react-router-dom"
import { useGetApplicationPageQuery } from "../../hooks/use-get-application-page-query.hook"
import { applicationColumns } from "./application-columns.constants"

export const ApplicationTable = () => {
  const params = useParams();

  const { data } = useGetApplicationPageQuery({
    keyword: params.keyword as string,
    page: params.page ? parseInt(params.page as string) : 1,
    size: params.size ? parseInt(params.size as string) : 10,
  })

  return (
    <div>
      <DataTable columns={applicationColumns} data={data?.data?.items ?? []} />
    </div>
  )
}


