
import { NavLink, useNavigate } from "react-router-dom";
import {
  Activity,
  BrainCircuit,
  Boxes,
  ChevronLeft,
  CircleHelp,
  Command,
  Database,
  LayoutDashboard,
  LogOut,
  Settings2,
  ShieldCheck,
  Workflow,
  X,
} from "lucide-react";

import Brand from "../Brand";
import "./Sidebar.css";

const navigation = [
  {
    label: "Overview",
    path: "/dashboard",
    icon: LayoutDashboard,
    end: true,
  },
  {
    label: "Intelligence",
    path: "/intelligence",
    icon: BrainCircuit,
  },
  {
    label: "Context & Memory",
    path: "/context",
    icon: Database,
  },
  {
    label: "Workflows",
    path: "/workflows",
    icon: Workflow,
  },
];

const management = [
  { label: "Integrations", path: "/integrations", icon: Boxes },
  { label: "Activity", path: "/activity", icon: Activity },
  { label: "Security", path: "/security", icon: ShieldCheck },
];

export default function Sidebar({
  isOpen = false,
  isCollapsed = false,
  onClose,
  onNavigate,
  user,
}) {
  const navigate = useNavigate();

  function handleSignOut() {
    onClose?.();
    navigate("/login");
  }

  function renderLinks(items) {
    return items.map(({ label, path, icon: Icon, end }) => (
      <NavLink
        key={path}
        to={path}
        end={end}
        onClick={onNavigate}
        title={isCollapsed ? label : undefined}
        aria-label={label}
        className={({ isActive }) =>
          `os-sidebar-link ${isActive ? "active" : ""}`
        }
      >
        <span className="os-sidebar-link-icon">
          <Icon size={18} strokeWidth={1.8} />
        </span>

        <span className="os-sidebar-link-label">{label}</span>

        <ChevronLeft
          className="os-sidebar-link-arrow"
          size={14}
          aria-hidden="true"
        />
      </NavLink>
    ));
  }

  return (
    <>
      <button
        type="button"
        aria-label="Close navigation overlay"
        className={`os-sidebar-overlay ${isOpen ? "visible" : ""}`}
        onClick={onClose}
        tabIndex={isOpen ? 0 : -1}
      />

      <aside
        id="os-sidebar"
        className={[
          "os-sidebar",
          isOpen ? "is-open" : "",
          isCollapsed ? "is-collapsed" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-label="Main navigation"
      >
        <div className="os-sidebar-brand-row">
          <Brand onClick={onNavigate} />

          <button
            type="button"
            className="os-sidebar-close"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X size={19} />
          </button>
        </div>

        <button
          type="button"
          className="os-workspace-switcher"
          title={isCollapsed ? user?.workspace || "Personal workspace" : undefined}
          onClick={() => navigate("/settings")}
        >
          <span className="os-workspace-icon">
            <Command size={17} />
          </span>

          <span className="os-workspace-copy">
            <small>WORKSPACE</small>
            <strong>{user?.workspace || "Personal workspace"}</strong>
          </span>

          <span className="os-workspace-status" />
        </button>

        <nav className="os-sidebar-navigation" aria-label="Workspace pages">
          <p className="os-sidebar-label">WORKSPACE</p>
          <div className="os-sidebar-links">{renderLinks(navigation)}</div>

          <p className="os-sidebar-label os-sidebar-label-spaced">
            MANAGEMENT
          </p>
          <div className="os-sidebar-links">{renderLinks(management)}</div>
        </nav>

        <div className="os-sidebar-bottom">
          <NavLink
            to="/settings"
            onClick={onNavigate}
            title={isCollapsed ? "Settings" : undefined}
            aria-label="Settings"
            className={({ isActive }) =>
              `os-sidebar-link os-settings-link ${isActive ? "active" : ""}`
            }
          >
            <span className="os-sidebar-link-icon">
              <Settings2 size={18} />
            </span>
            <span className="os-sidebar-link-label">Settings</span>
          </NavLink>

          <button
            type="button"
            className="os-sidebar-help"
            title={isCollapsed ? "Help & support" : undefined}
            aria-label="Help and support"
            onClick={() => {
              onNavigate?.();
              navigate("/help");
            }}
          >
            <span className="os-sidebar-link-icon">
              <CircleHelp size={18} />
            </span>
            <span className="os-sidebar-link-label">Help & support</span>
          </button>

          <div className="os-sidebar-divider" />

          <div className="os-sidebar-user">
            <span
              className="os-user-avatar"
              title={isCollapsed ? user?.name || "Workspace Owner" : undefined}
            >
              {user?.avatar || "HO"}
            </span>

            <span className="os-user-copy">
              <strong>{user?.name || "Alex Morgan"}</strong>
              <small>{user?.role || "Workspace Owner"}</small>
            </span>

            <button
              type="button"
              className="os-user-logout"
              aria-label="Sign out"
              title="Sign out"
              onClick={handleSignOut}
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
