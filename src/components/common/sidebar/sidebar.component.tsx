import {
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    Sidebar as SidebarUI,
  } from "@/components/ui/sidebar";
import { SidebarToggle } from "../sidebar-toggle";
import { navigationItems } from "./navigation-items.constants";
import { useNavigate, useLocation } from "react-router-dom";
import { UserSidebarMenuItem } from "@/features/user/components/user-sidebar-menu-item";
  
  export const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    return (
      <SidebarUI collapsible="icon">
        <SidebarHeader>
          <SidebarToggle />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {navigationItems.map((item) => {
                // For the root path "/", we need exact match
                // For other paths, we can use startsWith for nested routes
                const isActive = item.path === "/" 
                  ? location.pathname === "/" 
                  : location.pathname.startsWith(item.path);
                return (
                  <SidebarMenuItem 
                    key={item.path} 
                    onClick={() => navigate(item.path)}
                    className={isActive ? "sidebar-menu-item-active" : ""}
                  >
                    <SidebarMenuButton 
                      tooltip={item.label}
                      isActive={isActive}
                      className={isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : ""}
                    >
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <UserSidebarMenuItem />
          </SidebarMenu>
        </SidebarFooter>
      </SidebarUI>
    );
  };
  