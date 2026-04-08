import React, { useState, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import axios from "axios";
import { FiBook, FiUsers, FiFileText, FiAlertCircle } from "react-icons/fi";
import AdminSidebar from "../../components/AdminSidebar";
import DashboardMain from "../../components/layout/DashboardMain";

// ============================================================================
// REUSABLE STAT CARD COMPONENT
// ============================================================================
const StatCard = ({ icon: Icon, title, value, accentVariant = 0, isDarkMode }) => {
  const accentStyles = [
    "bg-indigo-100 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-300",
    "bg-violet-100 text-violet-600 dark:bg-violet-950/50 dark:text-violet-300",
    "bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-300",
    "bg-cyan-100 text-cyan-600 dark:bg-cyan-950/50 dark:text-cyan-300",
  ];

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-xl border p-6 transition-all duration-300 hover:shadow-md hover:scale-105 ${
        isDarkMode
          ? "bg-gray-800/50 border-gray-700 hover:border-indigo-500/30"
          : "bg-white border-gray-200 hover:border-indigo-200 shadow-sm"
      }`}
    >
      {/* Icon Badge */}
      <div
        className={`inline-flex items-center justify-center rounded-lg p-3 ${
          accentStyles[accentVariant % accentStyles.length]
        }`}
      >
        <Icon size={24} strokeWidth={1.5} />
      </div>

      {/* Value */}
      <p className="text-2xl font-bold tabular-nums text-gray-900 dark:text-white">
        {value}
      </p>

      {/* Title */}
      <p
        className={`text-sm font-medium text-center ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {title}
      </p>
    </div>
  );
};

// ============================================================================
// SECTION HEADER COMPONENT
// ============================================================================
const SectionHeader = ({ title, isDarkMode }) => (
  <div className="mb-6">
    <h2
      className={`text-xl font-semibold tracking-tight ${
        isDarkMode ? "text-white" : "text-gray-900"
      }`}
    >
      {title}
    </h2>
    <div className={`mt-2 h-1 w-12 rounded-full ${
      isDarkMode ? "bg-indigo-600" : "bg-indigo-500"
    }`} />
  </div>
);

// ============================================================================
// STATS GRID SECTION COMPONENT
// ============================================================================
const StatsSection = ({ title, stats: statsData, isDarkMode }) => (
  <section className={`rounded-xl border p-6 ${
    isDarkMode
      ? "bg-gray-800/30 border-gray-700"
      : "bg-white border-gray-200 shadow-sm"
  }`}>
    <SectionHeader title={title} isDarkMode={isDarkMode} />
    
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${statsData.length <= 3 ? '3' : statsData.length <= 5 ? '5' : '3'} gap-4`}>
      {statsData.map((stat, index) => (
        <StatCard
          key={stat.title}
          icon={stat.icon}
          title={stat.title}
          value={stat.value}
          accentVariant={index}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  </section>
);

// ============================================================================
// LOADING STATE COMPONENT
// ============================================================================
const LoadingState = ({ isDarkMode }) => (
  <div
    className={`flex min-h-screen items-center justify-center ${
      isDarkMode ? "bg-gray-900" : "bg-gray-50"
    }`}
  >
    <div className="flex flex-col items-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-500/20 border-t-indigo-600" />
      <p
        className={`text-sm font-medium ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Loading dashboard…
      </p>
    </div>
  </div>
);

// ============================================================================
// MAIN ADMIN DASHBOARD COMPONENT
// ============================================================================
const AdminDashboard = () => {
  const { isDarkMode } = useTheme();
  const [loading, setLoading] = useState(true);
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

  // Fetch statistics on component mount
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

  if (loading) {
    return <LoadingState isDarkMode={isDarkMode} />;
  }

  // Data structure for stats sections
  const bookStats = [
    { icon: FiBook, title: "Total Books", value: stats.books.totalBooks },
    { icon: FiBook, title: "Available Copies", value: stats.books.totalAvailableCopies },
    { icon: FiBook, title: "Issued Copies", value: stats.books.totalIssuedCopies },
  ];

  const userStats = [
    { icon: FiUsers, title: "Total Users", value: stats.users.totalUsers },
    { icon: FiUsers, title: "Students", value: stats.users.totalStudents },
    { icon: FiUsers, title: "Admins", value: stats.users.totalAdmins },
    { icon: FiFileText, title: "Active Borrowers", value: stats.users.studentsWithActiveBooks },
    { icon: FiAlertCircle, title: "Overdue Users", value: stats.users.studentsWithOverdueBooks },
  ];

  const issueStats = [
    { icon: FiFileText, title: "Books Issued", value: stats.issues.totalIssued },
    { icon: FiFileText, title: "Books Returned", value: stats.issues.totalReturned },
    { icon: FiAlertCircle, title: "Overdue Books", value: stats.issues.overdueBooks },
  ];

  return (
    <div className={`flex w-full min-h-screen ${
      isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
    }`}>
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <DashboardMain
        isDarkMode={isDarkMode}
        heroTitle="Dashboard overview"
        heroSubtitle="Live snapshot of your library—books, patrons, and circulation in one place."
      >
        {/* Content Grid */}
        <div className="w-full space-y-6">
          {/* Books Section */}
          <StatsSection
            title="Books"
            stats={bookStats}
            isDarkMode={isDarkMode}
          />

          {/* Users Section */}
          <StatsSection
            title="Users"
            stats={userStats}
            isDarkMode={isDarkMode}
          />

          {/* Issues Section */}
          <StatsSection
            title="Issues"
            stats={issueStats}
            isDarkMode={isDarkMode}
          />
        </div>
      </DashboardMain>
    </div>
  );
};

export default AdminDashboard;
