import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser, type CreateUserDto } from "../api/create-user.api";

export const useCreateUserMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: async (dto: CreateUserDto) => await createUser(dto),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["users"] });
    },
  });
};


