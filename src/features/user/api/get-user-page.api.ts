import type { ResponseBody } from "@/types/api/response-body.type";
import type { ResourcePage } from "@/types/api/resource-page.type";
import { userAxios } from "./user-axios";

export interface UserPageFilter {
  page?: number;
  size?: number;
  keyword?: string;
}

export interface UserDetailDto {
  id: string;
  name: string;
  username: string;
  isAccountNonExpired: boolean;
  isAccountNonLocked: boolean;
  isCredentialsNonExpired: boolean;
  isEnabled: boolean;
}

export const getUserPage = async (filter: UserPageFilter) => {
  const res = await userAxios.get<ResponseBody<ResourcePage<UserDetailDto>>>('', {
    params: {
      page: filter.page ?? 1,
      size: filter.size ?? 10,
      keyword: filter.keyword ?? undefined,
    },
  });
  return res.data;
};


