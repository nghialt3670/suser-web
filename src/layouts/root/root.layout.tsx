import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/common/sidebar/sidebar.component";
import { AppBar } from "@/components/common/app-bar/app-bar.component";
import { useIsMobile } from "@/hooks/use-mobile";

export const Root = () => {
  const isMobile = useIsMobile();
  
  return (
    <SidebarProvider>
        <Sidebar />
        <SidebarInset>
          {isMobile && <AppBar />}
          <Outlet />
        </SidebarInset>
    </SidebarProvider>
  );
};
