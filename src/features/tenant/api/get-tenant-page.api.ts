import type { ResponseBody } from "@/types/api/response-body.type";
import type { ResourcePage } from "@/types/api/resource-page.type";
import { tenantAxios } from "./tenant-axios";

export interface TenantDetailDto {
  id: string;
  name: string;
}

export interface TenantPageFilter {
  page?: number;
  size?: number;
  keyword?: string;
}

export const getTenantPage = async (filter: TenantPageFilter) => {
  const res = await tenantAxios.get<ResponseBody<ResourcePage<TenantDetailDto>>>('', {
    params: {
      page: filter.page ?? 1,
      size: filter.size ?? 10,
      keyword: filter.keyword ?? undefined,
    },
  });
  return res.data;
};


