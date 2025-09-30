import { useState, useEffect } from "react";
import { LogOut, User as UserIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { userManager } from "@/lib/oidc-client";
import type { User as OidcUser } from "oidc-client-ts";

export const UserSidebarMenuItem = () => {
  const [user, setUser] = useState<OidcUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await userManager.getUser();
        setUser(currentUser);
      } catch (error) {
        console.error("Failed to load user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const handleLogout = async () => {
    try {
      await userManager.signoutRedirect();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (isLoading) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton tooltip="Loading...">
          <Avatar className="h-4 w-4">
            <AvatarFallback>
              <UserIcon className="h-3 w-3" />
            </AvatarFallback>
          </Avatar>
          <span>Loading...</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  if (!user?.profile) {
    return null;
  }

  const profile = user.profile as any;
  const tenantName = profile?.tenant?.name || "Unknown Tenant";
  const userName = profile?.name || "Unknown User";

  return (
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton tooltip={`${userName} (${tenantName})`}>
            <Avatar className="h-4 w-4">
              <AvatarFallback>
                <UserIcon className="h-3 w-3" />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start text-left">
              <span className="text-sm font-medium truncate max-w-[140px]">
                {userName}
              </span>
              <span className="text-xs text-sidebar-foreground/70 truncate max-w-[120px]">
                {tenantName}
              </span>
            </div>
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem onClick={handleLogout} className="text-red-600">
            <LogOut className="mr-2 h-4 w-4" />
            Đăng xuất
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
};
