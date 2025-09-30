import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTenant, type CreateTenantDto } from "../api/create-tenant.api";

export const useCreateTenantMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: async (dto: CreateTenantDto) => await createTenant(dto),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["tenants"] });
    },
  });
};


