import { Button } from "@/components/ui/button";
import { userManager } from "@/lib/oidc-client";
import { LogInIcon } from "lucide-react";
import type { FC } from "react";

export const Login: FC = () => {

  const handleLoginClick = () => {
    userManager.signinRedirect();
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Button variant="outline" onClick={handleLoginClick}>
        <LogInIcon />
        <span>Đăng nhập</span>
      </Button>
    </div>
  )
};