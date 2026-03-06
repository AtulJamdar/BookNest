import React, { useState, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StudentSidebar from "../../components/StudentSidebar";
import { FiCalendar, FiMessageSquare } from "react-icons/fi";

const StudentDashboard = () => {
  const { isDarkMode } = useTheme();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [activeBooks, setActiveBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [userFines, setUserFines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [activeRes, booksRes, finesRes] = await Promise.all([
        axios.get(`http://localhost:5000/api/issues/user/${user.id}/active`),
        axios.get(`http://localhost:5000/api/books`),
        axios.get(`http://localhost:5000/api/fines/user/${user.id}`),
      ]);

      setActiveBooks(activeRes.data.issues);
      setAllBooks(booksRes.data.books);
      setUserFines(finesRes.data.fines);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBooks = allBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isOverdue = (dueDate) => new Date() > new Date(dueDate);

  const getDaysLeft = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const pendingFines = userFines.filter((f) => f.status === "pending");
  const totalPendingFine = pendingFines.reduce(
    (sum, f) => sum + f.totalFine,
    0
  );

  if (loading) {
    return (
      <div
        className={`flex min-h-screen ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50"
        }`}
      >
        <StudentSidebar />

        <div className="flex flex-1 items-center justify-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-1 px-10 py-8">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold mb-10">
            Welcome, {user.name}! 👋
          </h1>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

            <div className={`p-6 rounded-xl shadow ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <p className="text-3xl font-bold text-blue-500">{activeBooks.length}</p>
              <p className="text-sm text-gray-500">Active Books</p>
            </div>

            <div className={`p-6 rounded-xl shadow ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <p className="text-3xl font-bold text-red-500">{pendingFines.length}</p>
              <p className="text-sm text-gray-500">Pending Fines</p>
            </div>

            <div className={`p-6 rounded-xl shadow ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <p className="text-3xl font-bold text-orange-500">₹{totalPendingFine}</p>
              <p className="text-sm text-gray-500">Fine Amount</p>
            </div>

            <div className={`p-6 rounded-xl shadow ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <p className="text-3xl font-bold text-green-500">{allBooks.length}</p>
              <p className="text-sm text-gray-500">Available Books</p>
            </div>

          </div>

          {/* Issued Books */}
          <div className="mb-10">

            <h2 className="text-2xl font-bold mb-6">📚 My Issued Books</h2>

            {activeBooks.length === 0 ? (
              <div className={`p-6 rounded-lg text-center ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                <p>You don't have any issued books.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {activeBooks.map((issue) => {

                  const daysLeft = getDaysLeft(issue.dueDate);
                  const overdue = isOverdue(issue.dueDate);

                  return (
                    <div
                      key={issue._id}
                      className={`p-6 rounded-xl shadow ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
                    >
                      <div className="flex justify-between">

                        <div>
                          <h3 className="text-xl font-bold">
                            {issue.bookId.title}
                          </h3>

                          <p className="text-sm text-gray-500">
                            by {issue.bookId.author}
                          </p>

                          <p className="text-sm text-gray-500 mt-2">
                            Category: {issue.bookId.category}
                          </p>
                        </div>

                        <div className="text-right">

                          <div
                            className={`flex items-center gap-2 text-sm font-semibold ${
                              overdue ? "text-red-500" : "text-green-500"
                            }`}
                          >
                            <FiCalendar size={16} />

                            {overdue
                              ? `Overdue by ${Math.abs(daysLeft)} days`
                              : `${daysLeft} days left`}
                          </div>

                          <p className="text-sm text-gray-500 mt-1">
                            Due: {new Date(issue.dueDate).toLocaleDateString()}
                          </p>

                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>

          {/* Browse Books */}

          <div>

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold">
                🔍 Browse Available Books
              </h2>

              <button
                onClick={() => navigate("/student/requests")}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold"
              >
                <FiMessageSquare size={18} />
                My Requests
              </button>

            </div>

            <input
              type="text"
              placeholder="Search books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border mb-8 ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white border-gray-300"
              }`}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {filteredBooks.map((book) => (

                <div
                  key={book._id}
                  className={`p-6 rounded-xl shadow ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >

                  <h3 className="text-lg font-bold mb-2">
                    {book.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {book.author}
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    Category: {book.category}
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    Total Copies: {book.totalCopies}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default StudentDashboard;