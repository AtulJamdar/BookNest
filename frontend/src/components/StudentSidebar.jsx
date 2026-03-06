import React from "react";
import { FiHome, FiBookOpen, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useAuth } from "../hooks/useAuth";

const StudentSidebar = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: FiHome,
      path: "/student/dashboard",
    },
    {
      name: "Request Book",
      icon: FiBookOpen,
      path: "/student/requests",
    },
  ];

  return (
    <aside
      className={`w-64 min-h-screen flex flex-col justify-between border-r ${
        isDarkMode
          ? "bg-gray-800 border-gray-700 text-white"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      {/* Logo */}
      <div>
        <div className="p-6 text-xl font-bold border-b border-gray-200">
          Student Panel
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition"
              >
                <Icon size={20} />
                {item.name}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium hover:bg-red-500 hover:text-white transition"
        >
          <FiLogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default StudentSidebar;