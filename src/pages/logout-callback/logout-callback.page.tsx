import { userManager } from "@/lib/oidc-client.ts";
import { useEffect, type FC } from "react";
import { useNavigate } from "react-router-dom";

export const LogoutCallback: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    userManager
      .signoutRedirectCallback()
      .then(() => {
        console.log("Logout success");
        // Clear any remaining local state
        userManager.removeUser();
        // Redirect to home page
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.error("Logout error", err);
        // Still clear local state and redirect on error
        userManager.removeUser();
        navigate("/", { replace: true });
      });
  }, [navigate]);

  return <p>Logging out...</p>;
};
