import React from "react";
import "../resourses/layout.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AdminLayout({ children }) {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = React.useState(false);

  const { user } = useSelector((state) => state.users);

  const adminMenu = [
    {
      name: "Home",
      path: "/admin/AdminHome",
      icon: "ri-home-line",
    },
    {
      name: "Buses",
      path: "/admin/buses",
      icon: "ri-bus-line",
    },
    {
      name: "Tour",
      path: "/admin/tour",
      icon: "ri-bus-line",
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: "ri-user-line",
    },
    {
      name: "Bookings",
      path: "/admin/bookings",
      icon: "ri-file-list-line",
    },
    {
      name: "Logout",
      path: "/logout",
      icon: "ri-logout-box-line",
    },
  ];

  let activeRoute = window.location.pathname;
  if (window.location.pathname.includes("book-now")) {
    activeRoute = "/";
  }

  return (
    <div className="layout-parent">
      <div className="sidebar">
        <div className="sidebar-header">
          {collapsed ? (
            <i
              className="ri-menu-2-fill"
              style={{ color: "white" }}
              onClick={() => setCollapsed(!collapsed)}
            ></i>
          ) : (
            <i
              className="ri-close-line"
              style={{ color: "white" }}
              onClick={() => setCollapsed(!collapsed)}
            ></i>
          )}

          <h1 className="logo">HoHo</h1>
          <h1 className="role">
            {user?.name} <br />
            Role: Admin
          </h1>
        </div>

        <div className="d-flex flex-column gap-3 justify-content-start menu">
          {adminMenu.map((item, index) => {
            return (
              <div
                className={`${
                  activeRoute === item.path && "active-menu-item"
                } menu-item`}
              >
                <i className={item.icon}></i>
                {!collapsed && (
                  <span
                    onClick={() => {
                      if (item.path === "/logout") {
                        localStorage.removeItem("token");
                        navigate("/login");
                      } else {
                        navigate(item.path);
                      }
                    }}
                  >
                    {item.name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="body">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
