import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

export const SidebarToggle = () => {
  const { toggleSidebar } = useSidebar();

  const handleToggleClick = () => {
    toggleSidebar();
  };

  return (
    <SidebarMenuButton
      className="hover:bg-transparent active:bg-transparent focus-visible:bg-transparent"
      onClick={handleToggleClick}
    >
      <Menu />
      <h1 className="text-lg font-bold ml-2">sUser</h1>
    </SidebarMenuButton>
  );
};
