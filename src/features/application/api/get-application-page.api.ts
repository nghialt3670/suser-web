import type { ResponseBody } from "@/types/api/response-body.type";
import type { ResourcePage } from "@/types/api/resource-page.type";
import { applicationAxios } from "./application-axios";

export interface ApplicationDetailDto {
  id: string;
  name: string;
}

export interface ApplicationPageFilter {
  page?: number;
  size?: number;
  keyword?: string;
}

export const getApplicationPage = async (filter: ApplicationPageFilter) => {
  const res = await applicationAxios.get<ResponseBody<ResourcePage<ApplicationDetailDto>>>('', {
    params: {
      page: filter.page ?? 1,
      size: filter.size ?? 10,
      keyword: filter.keyword ?? undefined,
    },
  });
  return res.data;
};


