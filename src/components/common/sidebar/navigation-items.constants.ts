import { 
    Settings, 
    BarChart3,
    LayoutGrid,
    Building2,
    Users,
  } from "lucide-react";

export const navigationItems = [
    {
      icon: BarChart3,
      label: "Tổng quan",
      path: "/",
    },
    {
      icon: Users,
      label: "Quản lý người dùng",
      path: "/users",
    },
    {
      icon: Building2,
      label: "Quản lý tổ chức",
      path: "/tenants",
    },
    {
      icon: LayoutGrid,
      label: "Quản lý ứng dụng",
      path: "/applications",
    },
    {
      icon: Settings,
      label: "Cài đặt",
      path: "/settings",
    },
  ];