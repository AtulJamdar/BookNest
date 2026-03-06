import React from "react";
import {
  FiBook,
  FiUsers,
  FiFileText,
  FiAlertCircle,
  FiHome,
  FiLogOut,
  FiClipboard,
  FiDollarSign,
  FiBarChart2,
  FiTrendingUp
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useAuth } from "../hooks/useAuth";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menuItems = [
    { name: "Dashboard", icon: FiHome, path: "/admin/dashboard" },
    { name: "Books", icon: FiBook, path: "/admin/books" },
    { name: "Users", icon: FiUsers, path: "/admin/users" },
    { name: "Issues", icon: FiFileText, path: "/admin/issues" },
    { name: "Issue Book", icon: FiAlertCircle, path: "/admin/issue-book" },
    { name: "Book Requests", icon: FiClipboard, path: "/admin/requests" },
    { name: "Fine Management", icon: FiDollarSign, path: "/admin/fines" },
    { name: "Reports", icon: FiBarChart2, path: "/admin/reports" },
    { name: "Analytics", icon: FiTrendingUp, path: "/admin/analytics" },
  ];

  return (
    <aside
      className={`w-64 min-h-screen flex flex-col justify-between border-r ${
        isDarkMode
          ? "bg-gray-800 border-gray-700 text-white"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      <div>
        {/* Logo Section - Added pl-8 for a slight start indent */}
        <div className={`p-6 pl-8 text-xl font-bold border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          Library Admin
        </div>

        {/* Menu Section - Used px-4 to keep buttons away from the side borders */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                // gap-4 and px-4 provides a balanced internal starting space
                className="flex items-center gap-4 w-full px-4 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition text-left"
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Logout Section */}
      <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <button
          onClick={handleLogout}
          className="flex items-center gap-4 w-full px-4 py-3 rounded-lg hover:bg-red-500 hover:text-white transition"
        >
          <FiLogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;