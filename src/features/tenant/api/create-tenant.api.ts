import type { ResponseBody } from "@/types/api/response-body.type";
import { tenantAxios } from "./tenant-axios";

export interface CreateTenantDto {
  name: string;
}

export const createTenant = async (dto: CreateTenantDto) => {
  const res = await tenantAxios.post<ResponseBody<unknown>>("", dto);
  return res.data;
};


