import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/common/sidebar/sidebar.component";

export const Root = () => {
  return (
    <SidebarProvider>
        <Sidebar />
        <SidebarInset>
          <Outlet />
        </SidebarInset>
    </SidebarProvider>
  );
};
