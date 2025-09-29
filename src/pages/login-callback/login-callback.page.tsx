import { userManager } from "@/lib/oidc-client.ts";
import { useEffect, type FC } from "react";
import { useNavigate } from "react-router-dom";

export const LoginCallback: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    userManager
      .signinRedirectCallback()
      .then((user) => {
        console.log("Login success", user);
        navigate("/");
      })
      .catch((err) => {
        console.error("Login error", err);
        navigate("/login");
      });
  }, [navigate]);

  return <p>Logging in...</p>;
};
