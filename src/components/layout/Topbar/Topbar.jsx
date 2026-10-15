
import { useState } from "react";
import {
  Bell,
  CheckCheck,
  ChevronDown,
  Command,
  LogOut,
  Search,
  Settings2,
  UserRound,
  X,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Topbar.css";

const routeTitles = {
  "/dashboard": "Overview",
  "/intelligence": "Intelligence",
  "/context": "Context & Memory",
  "/workflows": "Workflows",
  "/integrations": "Integrations",
  "/activity": "Activity",
  "/security": "Security",
  "/settings": "Settings",
  "/help": "Help & support",
};

export default function Topbar({
  onMenuClick,
  user,
  notifications = [],
}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const pageTitle = routeTitles[location.pathname] || "Workspace";
  const unreadCount = notifications.filter((item) => !item.read).length;

  function handleSearchSubmit(event) {
    event.preventDefault();
    const query = search.trim();

    if (!query) return;

    navigate(`/dashboard?search=${encodeURIComponent(query)}`);
    setSearchOpen(false);
  }

  return (
    <header className="os-topbar">
      <div className="os-topbar-left">
        <button
          type="button"
          className="os-menu-button"
          aria-label="Toggle navigation"
          aria-controls="os-sidebar"
          onClick={onMenuClick}
        >
          <span className="os-menu-lines">
            <span />
            <span />
            <span />
          </span>
        </button>

        <div className="os-topbar-breadcrumb">
          <span className="os-topbar-command">
            <Command size={15} />
          </span>
          <span>Workspace</span>
          <span className="os-topbar-slash">/</span>
          <strong>{pageTitle}</strong>
        </div>
      </div>

      <div className="os-topbar-actions">
        {searchOpen ? (
          <form className="os-search-form" onSubmit={handleSearchSubmit}>
            <Search size={16} />
            <input
              autoFocus
              type="search"
              aria-label="Search workspace"
              placeholder="Search workspace..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setSearchOpen(false);
                  setSearch("");
                }
              }}
            />
            <button
              type="button"
              aria-label="Close search"
              onClick={() => {
                setSearchOpen(false);
                setSearch("");
              }}
            >
              <X size={15} />
            </button>
          </form>
        ) : (
          <button
            type="button"
            className="os-topbar-icon-button os-search-button"
            aria-label="Open search"
            onClick={() => setSearchOpen(true)}
          >
            <Search size={18} />
            <span>Search</span>
            <kbd>⌘ K</kbd>
          </button>
        )}

        <div className="os-popover-wrap">
          <button
            type="button"
            className={`os-topbar-icon-button os-notification-button ${
              notificationsOpen ? "selected" : ""
            }`}
            aria-label={`Notifications${unreadCount ? `, ${unreadCount} unread` : ""}`}
            aria-expanded={notificationsOpen}
            onClick={() => {
              setNotificationsOpen((value) => !value);
              setProfileOpen(false);
            }}
          >
            <Bell size={18} />
            {unreadCount > 0 && <span className="os-notification-dot" />}
          </button>

          {notificationsOpen && (
            <div className="os-topbar-popover os-notifications-popover">
              <div className="os-popover-heading">
                <div>
                  <strong>Notifications</strong>
                  <small>{unreadCount} unread</small>
                </div>
                <CheckCheck size={17} />
              </div>

              {notifications.length ? (
                <div className="os-notification-list">
                  {notifications.map((item) => (
                    <div className="os-notification-item" key={item.id}>
                      <span className="os-notification-indicator" />
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                        <small>{item.time}</small>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="os-empty-notifications">
                  <Bell size={22} />
                  <strong>You&apos;re all caught up</strong>
                  <span>New workspace updates will appear here.</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="os-profile-wrap">
          <button
            type="button"
            className={`os-profile-button ${profileOpen ? "selected" : ""}`}
            aria-expanded={profileOpen}
            onClick={() => {
              setProfileOpen((value) => !value);
              setNotificationsOpen(false);
            }}
          >
            <span className="os-profile-avatar">{user?.avatar || "HO"}</span>
            <span className="os-profile-copy">
              <strong>{user?.name || "Workspace Owner"}</strong>
              <small>{user?.role || "Workspace Owner"}</small>
            </span>
            <ChevronDown size={15} />
          </button>

          {profileOpen && (
            <div className="os-topbar-popover os-profile-popover">
              <div className="os-profile-popover-user">
                <span className="os-profile-avatar">{user?.avatar || "HO"}</span>
                <div>
                  <strong>{user?.name || "Workspace Owner"}</strong>
                  <small>{user?.role || "Workspace Owner"}</small>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setProfileOpen(false);
                  navigate("/settings");
                }}
              >
                <UserRound size={16} /> Account
              </button>

              <button
                type="button"
                onClick={() => {
                  setProfileOpen(false);
                  navigate("/settings");
                }}
              >
                <Settings2 size={16} /> Preferences
              </button>

              <button
                type="button"
                className="os-profile-logout"
                onClick={() => navigate("/login")}
              >
                <LogOut size={16} /> Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
