import React, { useState, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import axios from "axios";
import { FiDownload, FiFileText } from "react-icons/fi";
import AdminSidebar from "../../components/AdminSidebar";
import DashboardMain from "../../components/layout/DashboardMain";
import {
  generateBooksReport,
  generateUsersReport,
  generateIssuesReport,
  generateFinesReport,
  exportBooksToExcel,
  exportUsersToExcel,
  exportIssuesToExcel,
  exportFinesToExcel,
} from "../../services/reportService";

// ============================================================================
// ALERT CARD COMPONENT
// ============================================================================
const AlertCard = ({ message, isDarkMode }) => (
  <div
    className={`rounded-xl border px-4 py-3 ${
      isDarkMode
        ? "border-red-500/30 bg-red-500/10 text-red-400"
        : "border-red-200 bg-red-50 text-red-700"
    }`}
  >
    <p className="text-sm font-medium">{message}</p>
  </div>
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
        Loading reports…
      </p>
    </div>
  </div>
);

// ============================================================================
// REPORT CARD COMPONENT
// ============================================================================
const ReportCard = ({ title, description, icon: Icon, onPDF, onExcel, count, isDarkMode }) => (
  <div
    className={`flex flex-col gap-5 rounded-xl border p-6 transition-all duration-300 hover:shadow-md ${
      isDarkMode
        ? "border-gray-700 bg-gray-800/30"
        : "border-gray-200 bg-white shadow-sm"
    }`}
  >
    {/* Header */}
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-center gap-3 flex-1">
        <div className="inline-flex items-center justify-center rounded-lg bg-indigo-600 p-3 text-white shadow-md shadow-indigo-600/25">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p
            className={`text-xs font-medium ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            {count} record{count !== 1 ? "s" : ""}
          </p>
        </div>
      </div>
    </div>

    {/* Description */}
    <p
      className={`text-sm leading-relaxed ${
        isDarkMode ? "text-gray-400" : "text-gray-600"
      }`}
    >
      {description}
    </p>

    {/* Actions */}
    <div className="flex gap-3">
      <button
        onClick={onPDF}
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 font-semibold text-white transition-all hover:bg-red-700 active:scale-95"
        title="Download as PDF"
      >
        <FiDownload size={16} />
        <span className="text-sm">PDF</span>
      </button>

      <button
        onClick={onExcel}
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 font-semibold text-white transition-all hover:bg-emerald-700 active:scale-95"
        title="Download as Excel"
      >
        <FiDownload size={16} />
        <span className="text-sm">Excel</span>
      </button>
    </div>
  </div>
);

// ============================================================================
// STAT BOX COMPONENT
// ============================================================================
const StatBox = ({ label, value, color = "indigo", isDarkMode }) => {
  const colorStyles = {
    indigo: {
      light: "bg-indigo-50 text-indigo-600",
      dark: "bg-indigo-950/30 text-indigo-400",
    },
    violet: {
      light: "bg-violet-50 text-violet-600",
      dark: "bg-violet-950/30 text-violet-400",
    },
    emerald: {
      light: "bg-emerald-50 text-emerald-600",
      dark: "bg-emerald-950/30 text-emerald-400",
    },
    rose: {
      light: "bg-rose-50 text-rose-600",
      dark: "bg-rose-950/30 text-rose-400",
    },
  };

  const style = colorStyles[color] || colorStyles.indigo;
  const bgColor = isDarkMode ? style.dark : style.light;

  return (
    <div
      className={`rounded-lg border border-gray-200 p-5 dark:border-gray-700 ${
        isDarkMode ? "bg-gray-800/50" : "bg-white"
      }`}
    >
      <p className={`text-2xl font-bold ${bgColor.split(" ")[1]}`}>
        {value}
      </p>
      <p
        className={`text-xs font-medium ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {label}
      </p>
    </div>
  );
};

// ============================================================================
// SUMMARY SECTION COMPONENT
// ============================================================================
const SummarySection = ({ data, isDarkMode }) => {
  const totalFines = data.fines.reduce((sum, f) => sum + f.totalFine, 0);

  const stats = [
    { label: "Total Books", value: data.books.length, color: "indigo" },
    { label: "Total Users", value: data.users.length, color: "violet" },
    { label: "Total Issues", value: data.issues.length, color: "emerald" },
    { label: "Total Fines", value: `₹${totalFines.toLocaleString()}`, color: "rose" },
  ];

  return (
    <section
      className={`rounded-xl border p-6 ${
        isDarkMode
          ? "border-gray-700 bg-gray-800/30"
          : "border-gray-200 bg-white shadow-sm"
      }`}
    >
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Summary Statistics
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-indigo-600 dark:bg-indigo-500" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatBox
            key={stat.label}
            label={stat.label}
            value={stat.value}
            color={stat.color}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// MAIN ADMIN REPORTS COMPONENT
// ============================================================================
const AdminReports = () => {
  const { isDarkMode } = useTheme();
  const [data, setData] = useState({
    books: [],
    users: [],
    issues: [],
    fines: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const [booksRes, usersRes, issuesRes, finesRes] = await Promise.all([
        axios.get("http://localhost:5000/api/books"),
        axios.get("http://localhost:5000/api/users"),
        axios.get("http://localhost:5000/api/issues"),
        axios.get("http://localhost:5000/api/fines"),
      ]);

      setData({
        books: booksRes.data.books,
        users: usersRes.data.users,
        issues: issuesRes.data.issues,
        fines: finesRes.data.fines,
      });
    } catch (err) {
      setError("Failed to load report data. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingState isDarkMode={isDarkMode} />;
  }

  const reports = [
    {
      title: "Books Report",
      description: "Download detailed report of all books in the library catalog.",
      icon: FiFileText,
      count: data.books.length,
      onPDF: () => generateBooksReport(data.books),
      onExcel: () => exportBooksToExcel(data.books),
    },
    {
      title: "Users Report",
      description: "Download list of all registered users and admin accounts.",
      icon: FiFileText,
      count: data.users.length,
      onPDF: () => generateUsersReport(data.users),
      onExcel: () => exportUsersToExcel(data.users),
    },
    {
      title: "Issues Report",
      description: "Download report of all book issues and returns transactions.",
      icon: FiFileText,
      count: data.issues.length,
      onPDF: () => generateIssuesReport(data.issues),
      onExcel: () => exportIssuesToExcel(data.issues),
    },
    {
      title: "Fines Report",
      description: "Download comprehensive report of all fines issued to users.",
      icon: FiFileText,
      count: data.fines.length,
      onPDF: () => generateFinesReport(data.fines),
      onExcel: () => exportFinesToExcel(data.fines),
    },
  ];

  return (
    <div
      className={`flex w-full min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <DashboardMain
        isDarkMode={isDarkMode}
        heroTitle="Reports & exports"
        heroSubtitle="Generate and download PDF or Excel reports for books, users, issues, and fines."
      >
        {/* Content Wrapper */}
        <div className="w-full space-y-6">
          {/* Error Alert */}
          {error && (
            <AlertCard message={error} isDarkMode={isDarkMode} />
          )}

          {/* Reports Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {reports.map((report) => (
              <ReportCard
                key={report.title}
                title={report.title}
                description={report.description}
                icon={report.icon}
                count={report.count}
                onPDF={report.onPDF}
                onExcel={report.onExcel}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>

          {/* Summary Statistics Section */}
          <SummarySection data={data} isDarkMode={isDarkMode} />
        </div>
      </DashboardMain>
    </div>
  );
};

export default AdminReports;