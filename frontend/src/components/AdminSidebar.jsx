import React from "react";
import {
  FiBook,
  FiUsers,
  FiFileText,
  FiAlertCircle,
  FiHome,
  FiLogOut,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const menuItems = [
    { name: "Dashboard", icon: FiHome, path: "/admin/dashboard" },
    { name: "Books", icon: FiBook, path: "/admin/books" },
    { name: "Users", icon: FiUsers, path: "/admin/users" },
    { name: "Issues", icon: FiFileText, path: "/admin/issues" },
    { name: "Issue Book", icon: FiAlertCircle, path: "/admin/issue-book" },
  ];

  return (
    <aside
      className={`w-64 min-h-screen border-r flex flex-col justify-between ${
        isDarkMode
          ? "bg-gray-800 border-gray-700 text-white"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      {/* Logo */}
      <div>
        <div className="p-6 text-xl font-bold border-b border-gray-200">
          Library Admin
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg transition hover:bg-blue-500 hover:text-white"
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
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-red-500 hover:text-white transition">
          <FiLogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;