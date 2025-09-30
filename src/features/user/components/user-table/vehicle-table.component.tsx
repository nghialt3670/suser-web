import { vehicleColumns } from "./vehicle-columns.constants"
import { DataTable } from "@/components/common/data-table/data-table.component"
import { useGetVehiclePageQuery } from "../../hooks/use-get-vehicle-page-query.hook"
import { useParams } from "react-router-dom"

export const UserTable = () => {
    const params = useParams();

    const { data } = useGetVehiclePageQuery({
        keyword: params.keyword as string,
        page: params.page ? parseInt(params.page as string) : 1,
        size: params.size ? parseInt(params.size as string) : 10,
    })

    return (
        <div>
            <DataTable columns={vehicleColumns} data={data?.data?.items ?? []} />
        </div>
    )
}