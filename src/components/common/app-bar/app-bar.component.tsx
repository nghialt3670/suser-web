import { SidebarToggle } from "../sidebar-toggle";

export const AppBar = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-sidebar p-2 border-b">
      <SidebarToggle />
    </div>
  );
};