import { useCallback, useState } from "react";

export const useSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const toggleSidebar = useCallback(() => setSidebarOpen((prev) => !prev), []);

  return {
    sidebarOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar,
  };
};