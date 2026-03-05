import React, { useState, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import axios from "axios";
import { FiBook, FiUsers, FiFileText, FiAlertCircle } from "react-icons/fi";
import AdminSidebar from "../../components/AdminSidebar"; // you will change path later

const AdminDashboard = () => {
  const { isDarkMode } = useTheme();

  const [stats, setStats] = useState({
    books: { totalBooks: 0, totalAvailableCopies: 0, totalIssuedCopies: 0 },
    users: {
      totalUsers: 0,
      totalStudents: 0,
      totalAdmins: 0,
      studentsWithActiveBooks: 0,
      studentsWithOverdueBooks: 0,
    },
    issues: { totalIssued: 0, totalReturned: 0, overdueBooks: 0 },
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [booksRes, usersRes, issuesRes] = await Promise.all([
        axios.get("http://localhost:5000/api/books/stats/dashboard"),
        axios.get("http://localhost:5000/api/users/stats/dashboard"),
        axios.get("http://localhost:5000/api/issues/stats/dashboard"),
      ]);

      setStats({
        books: booksRes.data,
        users: usersRes.data,
        issues: issuesRes.data,
      });
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const StatSquare = ({ icon: Icon, title, value, accent }) => (
    <div
      className={`h-40 rounded-xl border flex flex-col items-center justify-center text-center transition hover:shadow-lg ${
        isDarkMode
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <div className={`p-2 rounded-lg mb-2 ${accent}`}>
        <Icon size={20} />
      </div>

      <p className="text-3xl font-bold">{value}</p>
      <p className={`text-sm mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
        {title}
      </p>
    </div>
  );

  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className={`flex ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      
      {/* Sidebar Component */}
      <AdminSidebar />

      {/* Right Content */}
      <main className="flex-1 p-10">

        <h1 className="text-3xl font-bold mb-10">Dashboard Overview</h1>

        {/* Books */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Books</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <StatSquare
              icon={FiBook}
              title="Total Books"
              value={stats.books.totalBooks}
              accent="bg-blue-100 text-blue-600"
            />
            <StatSquare
              icon={FiBook}
              title="Available Copies"
              value={stats.books.totalAvailableCopies}
              accent="bg-green-100 text-green-600"
            />
            <StatSquare
              icon={FiBook}
              title="Issued Copies"
              value={stats.books.totalIssuedCopies}
              accent="bg-orange-100 text-orange-600"
            />
          </div>
        </section>

        {/* Users */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Users</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <StatSquare
              icon={FiUsers}
              title="Total Users"
              value={stats.users.totalUsers}
              accent="bg-blue-100 text-blue-600"
            />
            <StatSquare
              icon={FiUsers}
              title="Students"
              value={stats.users.totalStudents}
              accent="bg-purple-100 text-purple-600"
            />
            <StatSquare
              icon={FiUsers}
              title="Admins"
              value={stats.users.totalAdmins}
              accent="bg-red-100 text-red-600"
            />
            <StatSquare
              icon={FiFileText}
              title="Active Books"
              value={stats.users.studentsWithActiveBooks}
              accent="bg-cyan-100 text-cyan-600"
            />
            <StatSquare
              icon={FiAlertCircle}
              title="Overdue Students"
              value={stats.users.studentsWithOverdueBooks}
              accent="bg-red-100 text-red-600"
            />
          </div>
        </section>

        {/* Issues */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Issues</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <StatSquare
              icon={FiFileText}
              title="Books Issued"
              value={stats.issues.totalIssued}
              accent="bg-blue-100 text-blue-600"
            />
            <StatSquare
              icon={FiFileText}
              title="Books Returned"
              value={stats.issues.totalReturned}
              accent="bg-green-100 text-green-600"
            />
            <StatSquare
              icon={FiAlertCircle}
              title="Overdue Books"
              value={stats.issues.overdueBooks}
              accent="bg-red-100 text-red-600"
            />
          </div>
        </section>

      </main>
    </div>
  );
};

export default AdminDashboard;