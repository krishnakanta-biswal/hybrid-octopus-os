
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import useSidebar from "../../../hooks/useSidebar";
import "./DashboardLayout.css";

export default function DashboardLayout({
  children,
  user,
  notifications,
}) {
  const { isOpen, closeSidebar, toggleSidebar } = useSidebar();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 899px)").matches
  );

  const location = useLocation();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 899px)");

    function handleViewportChange(event) {
      setIsMobile(event.matches);
      closeSidebar();
    }

    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, [closeSidebar]);

  useEffect(() => {
    closeSidebar();
  }, [location.pathname, closeSidebar]);

  function handleMenuClick() {
    if (isMobile) {
      toggleSidebar();
    } else {
      setIsCollapsed((previous) => !previous);
    }
  }

  return (
    <div
      className={[
        "os-app-shell",
        isCollapsed && !isMobile ? "os-sidebar-collapsed" : "",
        isOpen && isMobile ? "os-mobile-sidebar-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Sidebar
        isOpen={isOpen}
        isCollapsed={isCollapsed && !isMobile}
        onClose={closeSidebar}
        onNavigate={closeSidebar}
        user={user}
      />

      <div className="os-app-main">
        <Topbar
          onMenuClick={handleMenuClick}
          user={user}
          notifications={notifications}
          isCollapsed={isCollapsed}
        />

        <main className="os-page-content">{children}</main>
      </div>
    </div>
  );
}
