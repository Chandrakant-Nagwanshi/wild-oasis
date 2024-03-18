import { useMutation } from "@tanstack/react-query";
import { signUp as apiSignUp } from "../../services/apiauth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signUp, isLoading } = useMutation({
    // mutationFn:
    //   apiSignUp,
    mutationFn: ({ emai, fullName, password }) =>
      apiSignUp({ emai, fullName, password }),
    onSuccess: () =>
      toast.success(
        "Account succesfully created! Please verify the account from user's email address. "
      ),
  });
  return { signUp, isLoading };
}
