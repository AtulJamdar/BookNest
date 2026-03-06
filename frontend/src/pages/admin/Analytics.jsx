import React, { useState, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import axios from "axios";
import AdminSidebar from "../../components/AdminSidebar";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Analytics = () => {
  const { isDarkMode } = useTheme();

  const [analyticsData, setAnalyticsData] = useState({
    bookCategories: [],
    issuesTrend: [],
    userStats: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  const fetchAnalyticsData = async () => {
    try {
      const [booksRes, issuesRes, usersRes] = await Promise.all([
        axios.get("http://localhost:5000/api/books"),
        axios.get("http://localhost:5000/api/issues"),
        axios.get("http://localhost:5000/api/users"),
      ]);

      const books = booksRes.data.books;
      const issues = issuesRes.data.issues;
      const users = usersRes.data.users;

      // Category Distribution
      const categoryMap = {};
      books.forEach((book) => {
        categoryMap[book.category] =
          (categoryMap[book.category] || 0) + 1;
      });

      const bookCategories = Object.entries(categoryMap).map(
        ([name, value]) => ({
          name,
          value,
        })
      );

      // Issues Trend
      const issuesTrend = {};
      issues.forEach((issue) => {
        const date = new Date(issue.issueDate).toLocaleDateString();
        issuesTrend[date] = (issuesTrend[date] || 0) + 1;
      });

      const issuesTrendData = Object.entries(issuesTrend).map(
        ([date, count]) => ({
          date,
          issues: count,
        })
      );

      // User Stats
      const userStats = [
        { name: "Admin", value: users.filter((u) => u.role === "admin").length },
        { name: "Students", value: users.filter((u) => u.role === "user").length },
      ];

      setAnalyticsData({
        bookCategories,
        issuesTrend: issuesTrendData,
        userStats,
      });
    } catch (error) {
      console.error("Error fetching analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  const COLORS = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
    "#EC4899",
  ];

  if (loading) {
    return (
      <div className={`flex min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
        <AdminSidebar />

        <div className="flex flex-1 items-center justify-center">
          <p className="text-lg font-semibold">Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 px-10 py-8">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold mb-10">
            📊 Analytics Dashboard
          </h1>

          {/* Top Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

            {/* Books Category */}
            <div
              className={`p-6 rounded-xl shadow-md ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2 className="text-xl font-semibold mb-6">
                Books by Category
              </h2>

              <ResponsiveContainer width="100%" height={320}>
                <PieChart>
                  <Pie
                    data={analyticsData.bookCategories}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {analyticsData.bookCategories.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* User Distribution */}
            <div
              className={`p-6 rounded-xl shadow-md ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2 className="text-xl font-semibold mb-6">
                User Distribution
              </h2>

              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={analyticsData.userStats}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={isDarkMode ? "#444" : "#ccc"}
                  />
                  <XAxis stroke={isDarkMode ? "#999" : "#333"} />
                  <YAxis stroke={isDarkMode ? "#999" : "#333"} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDarkMode ? "#333" : "#fff",
                      border: `1px solid ${isDarkMode ? "#555" : "#ccc"}`,
                    }}
                  />
                  <Bar dataKey="value" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Issues Trend */}
          <div
            className={`p-6 rounded-xl shadow-md ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2 className="text-xl font-semibold mb-6">
              Issues Trend
            </h2>

            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={analyticsData.issuesTrend}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={isDarkMode ? "#444" : "#ccc"}
                />
                <XAxis stroke={isDarkMode ? "#999" : "#333"} />
                <YAxis stroke={isDarkMode ? "#999" : "#333"} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDarkMode ? "#333" : "#fff",
                    border: `1px solid ${isDarkMode ? "#555" : "#ccc"}`,
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="issues"
                  stroke="#10B981"
                  strokeWidth={3}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Analytics;