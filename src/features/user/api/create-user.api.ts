import type { ResponseBody } from "@/types/api/response-body.type";
import { userAxios } from "./user-axios";

export interface CreateUserDto {
  name: string;
  username: string;
  password: string;
  tenantId: string;
  authorityIds: string[];
}

export const createUser = async (dto: CreateUserDto) => {
  const res = await userAxios.post<ResponseBody<unknown>>("", dto);
  return res.data;
};


