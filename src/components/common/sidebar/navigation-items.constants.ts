import { 
    Truck, 
    Users, 
    Wrench, 
    Settings, 
    BarChart3,
    FileText,
    TriangleAlert
  } from "lucide-react";

export const navigationItems = [
    {
      icon: BarChart3,
      label: "Tổng quan",
      path: "/",
    },
    {
      icon: Truck,
      label: "Quản lý xe",
      path: "/vehicles",
    },
    {
      icon: Users,
      label: "Quản lý tài xế",
      path: "/drivers",
    },
    {
      icon: Wrench,
      label: "Bảo dưỡng",
      path: "/maintenances",
    },
    {
      icon: TriangleAlert,
      label: "Sửa chữa",
      path: "/repairs",
    },
    {
      icon: FileText,
      label: "Báo cáo",
      path: "/reports",
    },
    {
      icon: Settings,
      label: "Cài đặt",
      path: "/settings",
    },
  ];