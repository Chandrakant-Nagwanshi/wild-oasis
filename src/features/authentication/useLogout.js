import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOut as apiLogout } from "../../services/apiauth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: apiLogout,
    onSuccess: () => {
      navigate("/login", { replace: true });
      queryClient.removeQueries();
    },
  });
  return { logout, isLoading };
}
