import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createApplication, type CreateApplicationDto } from "../api/create-application.api";

export const useCreateApplicationMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: async (dto: CreateApplicationDto) => await createApplication(dto),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["applications"] });
    },
  });
};


