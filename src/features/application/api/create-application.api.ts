import type { ResponseBody } from "@/types/api/response-body.type";
import { applicationAxios } from "./application-axios";

export interface CreateApplicationDto {
  name: string;
}

export const createApplication = async (dto: CreateApplicationDto) => {
  const res = await applicationAxios.post<ResponseBody<unknown>>("", dto);
  return res.data;
};


