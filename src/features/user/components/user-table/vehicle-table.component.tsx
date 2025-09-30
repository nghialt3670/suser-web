import { userColumns } from "./vehicle-columns.constants"
import { DataTable } from "@/components/common/data-table/data-table.component"
import { useGetUserPageQuery } from "../../hooks/use-get-user-page-query.hook"
import { useParams } from "react-router-dom"

export const UserTable = () => {
    const params = useParams();

    const { data } = useGetUserPageQuery({
        keyword: params.keyword as string,
        page: params.page ? parseInt(params.page as string) : 1,
        size: params.size ? parseInt(params.size as string) : 10,
    })

    return (
        <div>
            <DataTable columns={userColumns} data={data?.data?.items ?? []} />
        </div>
    )
}