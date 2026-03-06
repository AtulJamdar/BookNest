import React, { useState, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import axios from "axios";
import { FiCheck, FiSearch } from "react-icons/fi";
import AdminSidebar from "../../components/AdminSidebar";

const AdminFines = () => {
  const { isDarkMode } = useTheme();
  const [fines, setFines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("pending");
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetchFines();
  }, [filter]);

  const fetchFines = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/fines");
      let filteredFines = response.data.fines;

      if (filter === "pending") {
        filteredFines = filteredFines.filter((f) => f.status === "pending");
      } else if (filter === "paid") {
        filteredFines = filteredFines.filter((f) => f.status === "paid");
      }

      setFines(filteredFines);
    } catch (error) {
      setError("Error fetching fines");
    } finally {
      setLoading(false);
    }
  };

  const handlePayFine = async (fineId) => {
    try {
      await axios.put(`http://localhost:5000/api/fines/${fineId}/pay`);
      setSuccess("Fine marked as paid!");
      fetchFines();
      setTimeout(() => setSuccess(""), 3000);
    } catch (error) {
      setError(error.response?.data?.message || "Error paying fine");
    }
  };

  const handleCalculateFines = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/fines/calculate"
      );
      setSuccess(response.data.message);
      fetchFines();
      setTimeout(() => setSuccess(""), 3000);
    } catch (error) {
      setError("Error calculating fines");
    }
  };

  const filteredFinesList = fines.filter(
    (fine) =>
      fine.userId?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fine.bookId?.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalAmount = filteredFinesList.reduce(
    (sum, f) => sum + f.totalFine,
    0
  );

  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50"
        }`}
      >
        Loading...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div
        className={`flex-1 px-10 py-10 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto space-y-8 leading-relaxed">

          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">💰 Fine Management</h1>

            <button
              onClick={handleCalculateFines}
              className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold"
            >
              Calculate Fines
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
              <button
                onClick={() => setError("")}
                className="float-right font-bold"
              >
                ✕
              </button>
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="p-4 bg-green-100 text-green-700 rounded-lg">
              {success}
              <button
                onClick={() => setSuccess("")}
                className="float-right font-bold"
              >
                ✕
              </button>
            </div>
          )}

          {/* Filter */}
          <div className="flex gap-4">
            <button
              onClick={() => setFilter("pending")}
              className={`px-4 py-2 rounded font-semibold ${
                filter === "pending"
                  ? "bg-blue-500 text-white"
                  : isDarkMode
                  ? "bg-gray-700"
                  : "bg-gray-200"
              }`}
            >
              Pending Fines
            </button>

            <button
              onClick={() => setFilter("paid")}
              className={`px-4 py-2 rounded font-semibold ${
                filter === "paid"
                  ? "bg-blue-500 text-white"
                  : isDarkMode
                  ? "bg-gray-700"
                  : "bg-gray-200"
              }`}
            >
              Paid Fines
            </button>

            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded font-semibold ${
                filter === "all"
                  ? "bg-blue-500 text-white"
                  : isDarkMode
                  ? "bg-gray-700"
                  : "bg-gray-200"
              }`}
            >
              All Fines
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by student name or book title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-300"
              }`}
            />
          </div>

          {/* Summary */}
          <div
            className={`p-6 rounded-lg shadow ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <p className="text-lg font-semibold">
              Total Amount:{" "}
              <span className="text-orange-500">₹{totalAmount}</span>
            </p>
          </div>

          {/* Table */}
          <div
            className={`rounded-lg shadow overflow-hidden ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead
                  className={`${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}
                >
                  <tr>
                    <th className="px-6 py-4 text-left">Student</th>
                    <th className="px-6 py-4 text-left">Book</th>
                    <th className="px-6 py-4 text-center">Days Overdue</th>
                    <th className="px-6 py-4 text-right">Fine Amount</th>
                    <th className="px-6 py-4 text-center">Status</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredFinesList.map((fine) => (
                    <tr
                      key={fine._id}
                      className={`border-t ${
                        isDarkMode
                          ? "border-gray-700 hover:bg-gray-700"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <td className="px-6 py-5">
                        <p className="font-semibold">{fine.userId?.name}</p>
                        <p className="text-sm text-gray-500">
                          {fine.userId?.email}
                        </p>
                      </td>

                      <td className="px-6 py-5">{fine.bookId?.title}</td>

                      <td className="px-6 py-5 text-center">
                        {fine.daysOverdue} days
                      </td>

                      <td className="px-6 py-5 text-right font-bold text-orange-500">
                        ₹{fine.totalFine}
                      </td>

                      <td className="px-6 py-5 text-center">
                        <span
                          className={`px-3 py-1 rounded text-sm font-semibold ${
                            fine.status === "pending"
                              ? "bg-red-100 text-red-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {fine.status === "pending" ? "⏳ Pending" : "✅ Paid"}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-center">
                        {fine.status === "pending" ? (
                          <button
                            onClick={() => handlePayFine(fine._id)}
                            className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded text-sm flex items-center gap-1 justify-center"
                          >
                            <FiCheck size={16} />
                            Mark Paid
                          </button>
                        ) : (
                          <span className="text-gray-500 text-sm">
                            Paid on{" "}
                            {new Date(fine.paidDate).toLocaleDateString()}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredFinesList.length === 0 && (
              <div className="p-6 text-center">No fines found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFines;